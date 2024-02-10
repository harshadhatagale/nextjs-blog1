import "@/styles/globals.css";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <main className="dark:bg-slate-800 h-lvh dark:text-white">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
