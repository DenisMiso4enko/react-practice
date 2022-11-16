import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.intervalFlag = null;
    this.state = {
      date: new Date(),
      title: "Title for App",
      count: 0,
    };
    this.intervalFlag = setInterval(() => {
      this.setState((state, props) => ({
        date: new Date(),
        count: state.count + 1,
      }));
    }, 1000);
  }

  componentDidMount() {
    console.log("компонент был вызван");
  }

  componentDidUpdate() {
    console.log("компонент был обновлен");
  }

  componentWillUnmount() {
    clearInterval(this.intervalFlag)
    console.log('компонент был уничтожен');
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <span>{this.state.count}</span>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
