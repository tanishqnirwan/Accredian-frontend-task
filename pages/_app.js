import { Fragment } from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
      <link 
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" 
            rel="stylesheet" 
          />
        <title>Accredian</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
