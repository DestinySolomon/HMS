import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-[#181C23] rounded-xl border border-[#2A2F38] p-6">
          <h3 className="text-white text-lg font-semibold">
            Something went wrong
          </h3>
          <p className="text-gray-400 mt-2">{String(this.state.error)}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
