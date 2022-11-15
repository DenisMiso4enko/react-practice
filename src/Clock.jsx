import React, { useState } from "react";

// export const Clock = () => {
//   const [state, setState] = useState({
//     title: "Title for Clock",
//     date: new Date(),
//   });
//   setInterval(() => {
//     setState({
//       title: "Title for Clock",
//       date: new Date(),
//     });
//   });
//   return (
//     <div>
//       <h1>{state.title}</h1>
//       <p>{state.date.toLocaleTimeString()}</p>
//     </div>
//   );
// };

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      title: "Title for Clock",
      counter: 0,
    };
    setInterval(() => {
      this.setState((state, props) => ({
        date: new Date(),
        counter:  state.counter + 1,
      }));
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {this.state.counter}
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
