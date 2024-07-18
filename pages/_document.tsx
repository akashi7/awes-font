import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <title>Mark 8</title>
      <link
        href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap'
        rel='preconnect'
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
