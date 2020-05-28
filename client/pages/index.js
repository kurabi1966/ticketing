// import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  console.log('LandingPage');
  if (currentUser) {
    return <div>Welcom {currentUser.email}</div>;
  }
  return <div>Not loged in user</div>;
};

LandingPage.getInitialProps = async (context) => {
  console.log('LandingPage.getInitialProps');
  // const client = buildClient(context);
  // const { data } = await client.get('/api/users/currentuser');
  return {};
};
export default LandingPage;
