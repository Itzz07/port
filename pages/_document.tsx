import { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLOG TECH",
  description: "~ by itzz rio",
};

export default function Document() {
  return (
    <Html lang="en">
      
      <Head>
        <title>Itzz Rio</title>
        <link rel="Icon" href="static/person.png"></link>
      </Head> 
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
