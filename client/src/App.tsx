import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage.tsx/DashboardPage.';
import QuoteDetailsPage from './pages/QuoteDetailsPage/QuoteDetailsPage';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/quote/:id" element={<QuoteDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
