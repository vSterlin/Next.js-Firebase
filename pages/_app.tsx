import "../styles/globals.css";
import type { AppProps } from "next/app";

import AuthProvider from "../components/AuthProvider";
import { auth } from "firebase-admin";
import { adminApp } from "../config/firebase-admin";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}



export default MyApp;
