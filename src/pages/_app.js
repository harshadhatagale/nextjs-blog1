import "@/styles/globals.css";
import NextTopLoader from 'nextjs-toploader';
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <main className="dark:bg-black h-lvh dark:text-white">
      <Layout>
      <NextTopLoader speed={500}/>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
