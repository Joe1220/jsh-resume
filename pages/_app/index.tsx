import React from "react"
import { ThemeProvider } from "styled-components"
import App, { Container } from "next/app"
import Head from "next/head"
import { Provider, observer } from "mobx-react"

import rootStore from "../../src/stores/RootStore"
import themes from "../../src/config/styles"
import GlobalStyles from "../../src/config/styles/GlobalStyles"

@observer
class CustomApp extends App {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...rootStore}>
        <ThemeProvider theme={themes}>
          <Container>
            <Head>
              <title>JSH Resume</title>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default CustomApp
