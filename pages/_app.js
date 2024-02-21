import { ContextProvider } from "@/context/AppContext";
import "@/styles/globals.scss";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>ImageHub</title>
      </Head>
      <ContextProvider>
        <Component {...pageProps} key={router.asPath} />
      </ContextProvider>
    </>
  );
}
