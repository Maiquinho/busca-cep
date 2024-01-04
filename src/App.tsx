import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AddressProvider } from './contexts/AddressContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AddressProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AddressProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
