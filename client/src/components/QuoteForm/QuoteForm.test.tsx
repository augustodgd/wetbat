import { render, screen } from "@testing-library/react"
import QuoteForm from "./QuoteForm"

const expectedFields = {
    combobox: [
        'From', 'Destination', 'Transportation'
    ],
    textbox: [
        'Name', 'Email'
    ],
    spinbutton: [
        'People'
    ]
}

const dateFields = ['Depart Date', 'Return Date']

describe('<QuoteForm />', () => {
    describe.each(Object.entries(expectedFields))('%s fields', (fieldType, fieldLabels) => {
        it.each(fieldLabels)('should render %s field', (label) => {
            render(<QuoteForm />)
            expect(screen.getByRole(fieldType, { name: label })).toBeInTheDocument()
        })
    })

    describe('date fields', () => {
        it.each(dateFields)('should render %s field', (label) =>{
            render(<QuoteForm />)
            expect(screen.getByLabelText(label)).toBeInTheDocument()
        })
    })
 })