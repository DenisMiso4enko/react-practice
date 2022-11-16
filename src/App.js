import "./App.css";
import React, { Component, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter + 1)
  }
  return <div>
    <button onClick={handleClick}>На меня нажали {counter} раз</button>
  </div>;
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render() {
//     return <div>
//       <button onClick={this.handleClick}>На меня нажали {this.state.count} раз</button>
//     </div>;
//   }
// }

export default App;
