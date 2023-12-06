import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
