import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Main } from "next/document";
export default function App({ Component, pageProps }) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
