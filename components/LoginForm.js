import { loginUser } from "../lib/auth";
import Router from "next/router";

class LoginForm extends React.Component {
  state = {
    email: "Shanna@melissa.tv",
    password: "anastasia.net",
    error: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: "", loading: true });
    const { email, password } = this.state;
    loginUser(email, password)
      .then(() => {
        Router.push("/profile");
      })
      .catch(this.showError);
  };

  showError = (err) => {
    console.error(err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, loading: false });
  };
  render() {
    const { user = {} } = this.props.auth || {};
    {
      if (user.name) {
        return <h3>You are already logged in</h3>;
      } else
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="email"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.handleChange}
              />
            </div>

            <button disabled={this.state.loading} type="submit">
              {this.state.loading ? "Sending" : "Submit"}
            </button>
            {this.state.error && <div>{this.state.error}</div>}
          </form>
        );
    }
  }
}

export default LoginForm;
