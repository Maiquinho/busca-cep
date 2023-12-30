import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <main>
        <h1>Hello World</h1>
      </main>
    </ThemeProvider>
  )
}
