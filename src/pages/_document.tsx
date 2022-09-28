/* eslint-disable class-methods-use-this */
import { ColorModeScript, theme } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Convite casamento Aleixo e Bruna" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <link rel="shortcut icon" href="/favicon.jpg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Dancing+Script&family=Inter&family=Poppins&family=Shadows+Into+Light&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
