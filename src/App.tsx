import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Cart } from "./components/Cart"
import { Header } from "./components/Header"
import { Routers } from "./routers"
import { Container, Body } from "./style"
import { GlobalStyle } from "./style/globalStyle"
import dark from "./style/theme/dark"
import light from "./style/theme/light"

function App() {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <div>
            <Header />
          </div>
          <Body>
            ...
            <Routers />
          </Body>
          <Cart />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
