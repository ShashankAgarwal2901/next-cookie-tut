import { getUserProfile, authInitialProps } from "../lib/auth.js";
import Layout from "../components/Layout";

class profile extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    getUserProfile().then((user) => this.setState({ user }));
  }

  render() {
    return (
      <Layout title="Profile" {...this.props}>
        <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
      </Layout>
    );
  }
}

profile.getInitialProps = authInitialProps(true);

export default profile;
