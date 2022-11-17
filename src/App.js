import { useState } from "react";
import "./App.css";
import { RecursiveButton } from "./RecursiveButton";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handelShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="App">
      <RecursiveButton/>
      {/* <button onClick={handelShowModal}>Нажми и ...</button>
      {showModal && (
        <div>
          <h1>Привет, мир!</h1>
          <p>message</p>
        </div>
      )} */}
    </div>
  );
}

export default App;
