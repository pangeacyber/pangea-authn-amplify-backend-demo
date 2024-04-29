import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@pangeacyber/react-auth";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

const client = generateClient();

export default function App({ Component, pageProps }: AppProps) {
  const hostedLoginURL = process?.env?.NEXT_PUBLIC_AUTHN_HOSTED_LOGIN_URL || "";
  const authConfig = {
    clientToken: process?.env?.NEXT_PUBLIC_AUTHN_CLIENT_TOKEN || "",
    domain: process?.env?.NEXT_PUBLIC_PANGEA_DOMAIN || "",
  };

  return (
    <AuthProvider loginUrl={hostedLoginURL} redirectPathname="/authenticated" config={authConfig}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
