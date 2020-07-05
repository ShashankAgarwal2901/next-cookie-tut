import LoginForm from "../components/LoginForm";
import { authInitialProps } from "../lib/auth";
import Layout from "../components/Layout";

const Login = (props) => {
  return (
    <Layout title="Log in" {...props}>
      <LoginForm {...props} />
    </Layout>
  );
};
Login.getInitialProps = authInitialProps();
export default Login;
