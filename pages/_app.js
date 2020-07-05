import App from "next/app";
import { getServerSideToken } from "../lib/auth";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  let user = {};
  if (appContext.ctx.req) {
    user = getServerSideToken(appContext.ctx.req);
  }

  return { ...appProps, ...user };
};

export default MyApp;
