import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }
//   render() {
//     return <p>{this.state.date.toLocaleDateString()}</p>;
//   }
// }
// ReactDOM.render(<Clock />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
