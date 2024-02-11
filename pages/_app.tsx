import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import './global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Build Test</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
