
import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe('<Header />', () => {
    it('should match snapshot', () => {
        render(<Header />)
        expect(screen.getByTestId('header')).toMatchSnapshot()
    })
 })