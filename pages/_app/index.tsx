import React from "react"
import { ThemeProvider } from "styled-components"
import App from "next/app"
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

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(result => console.log("SW Registered: ", result))
        .catch(error => console.log("Can't register SW: ", error))
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...rootStore}>
        <ThemeProvider theme={themes}>
          <>
            <Head>
              <title>JSH Resume</title>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default CustomApp
