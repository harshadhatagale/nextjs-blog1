import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Main } from "next/document";
export default function App({ Component, pageProps }) {
  return (
    <main className="dark:bg-slate-800 h-lvh dark:text-white">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
