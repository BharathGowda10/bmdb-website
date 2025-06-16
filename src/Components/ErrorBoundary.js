import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    throw new Error(`this is component error1 ${error} ${errorInfo}`);
  }

  render() {
    if (this.state.error) {
      return this.props.fallback || <div>Something went Wrong....</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
