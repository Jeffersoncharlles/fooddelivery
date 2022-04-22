import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Cart } from "./components/Cart"
import { Header } from "./components/Header"
import { Routers } from "./routers"
import { Container, Body } from "./style"
import { GlobalStyle } from "./style/globalStyle"
import ReactTooltip from "react-tooltip"
import dark from "./style/theme/dark"
import light from "./style/theme/light"
import { useStore } from "./context/store"

function App() {
  const { search, setSearch } = useStore()

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <div>
            <Header search={search} onSearch={setSearch} />
          </div>
          <Body>
            <div>
              <Routers />
            </div>
          </Body>
          <Cart />
          <ReactTooltip id="tip-top" place="top" effect="solid" />
          <ReactTooltip id="tip-button" place="bottom" effect="solid" />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
