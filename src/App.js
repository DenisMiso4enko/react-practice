import React, { useState } from "react";
import "./App.css";
import City from "./City";
import CityesList from "./CityesList";

function App() {
  const [cities, setCities] = useState([
    {
      name: "Москва",
      description: "Столица России",
    },
    {
      name: "Зеленоград",
      description: "Научный спутник Москвы",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlerChangeCity = (n, description) => {
    setCities(
      cities.map((city, index) => {
        if (index === n) {
          return {
            ...city,
            description,
          };
        }

        return city
      })
    );
  };
  const handlerSelectCity = (n ) => setCurrentIndex(n)
  return (
    <div className="App">
      <CityesList cities={cities} onSelectCity={handlerSelectCity}/>
      <City cities={cities} onChangeCity={handlerChangeCity} currentIndex={currentIndex} />
    </div>
  );
}

export default App;
