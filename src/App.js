import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [value, setValue] = useState("");
//   // const [checked, setChecked] = useState(false);  // это для checkbox
//   const [checked, setChecked] = useState(false);
//   const handlerOnChangeInput = (e) => {
//     setValue(e.target.value);
//   };

//   const items = ['Яблоко', 'Банан', 'Апельсин']
//   return (
//     <div className="App">
//       {/* <input type="text" value={value} onChange={handlerOnChangeInput} /> */}
//       {/* <label>
//         Check me
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={() => setChecked(!checked)}
//         />
//       </label> */}
//       {items.map(item => (
//         <label key={item}>
//         {item}
//         <input
//           type="radio"
//           checked={checked === item}
//           onChange={() => setChecked(item)}
//         />
//       </label>
//       ))}
//     </div>
//   );
// }

function App () {
  const [value, setValue] = useState('Яблоко')
  const handlerSelect = e => {
    setValue(e.target.value)
    console.log(e.target.value);
  }
  return (
    <select value={value} onChange={handlerSelect}>
      <option value="Яблоко">Яблоко</option>
      <option value="Банан">Банан</option>
      <option value="Апельсин">Апельсин</option>
      <option value="Виноград">Виноград</option>
    </select>
  )
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//     };
//   }
//   handlerOnChangeInput(e) {
//     this.setState({
//       value: e.target.value
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <input type="text" value={this.value} onChange={(e) =>this.handlerOnChangeInput(e)} />
//       </div>
//     );
//   }
// }

export default App;
