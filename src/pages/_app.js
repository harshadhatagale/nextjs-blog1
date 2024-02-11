import "@/styles/globals.css";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {
  return (
      <main className="dark:bg-black h-lvh dark:text-white">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
