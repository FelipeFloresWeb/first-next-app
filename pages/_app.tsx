import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { HealtBar } from "../components/HealtBar";
import { Layout } from "../components/Layout";
import { colors } from "./style";

export const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <HealtBar />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
