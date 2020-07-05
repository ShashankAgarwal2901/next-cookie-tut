import React from "react";
import Router from "next/router";

class index extends React.Component {
  componentDidMount() {
    Router.push("/login");
  }
  render() {
    return null;
  }
}

export default index;
