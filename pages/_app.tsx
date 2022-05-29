import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Nav } from "../src/nav/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
