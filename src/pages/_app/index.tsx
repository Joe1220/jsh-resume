import React from "react"
import App from "next/app"
import { Provider, observer } from "mobx-react"

import rootStore from "../../stores/RootStore"

@observer
class CustomApp extends App {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...rootStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default CustomApp
