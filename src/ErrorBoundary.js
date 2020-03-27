import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error ", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 4000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    }
    if (this.state.hasError) {
      return (
        <h3>
          There was an error with this listing <Link to="/"> Click here</Link>{" "}
          to go back to home page or wait for few seconds
        </h3>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
