import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
          <title>JSH Resume</title>
          <meta name="author" content={"Joe1220"} />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="black" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="조승현의 웹 프론트엔드 개발자 이력서입니다. 잘 부탁드립니다."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
