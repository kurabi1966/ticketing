import 'bootstrap/dist/css/bootstrap.css';
// https://github.com/vercel/next.js/blob/canary/errors/css-global.md

import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  console.log('AppComponent');

  return (
    <div className="container">
      <Header currentUser={currentUser} />
      <Component {...pageProps} currentUser={currentUser} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  console.log('AppComponent.getInitialProps');

  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return { pageProps, ...data }; // ...data contains now currentuser object
};
export default AppComponent;
