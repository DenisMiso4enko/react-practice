import React from "react";

const CityesList = ({ cities, onSelectCity }) => {
  return (
    <ul>
      {cities.map(({ name, description }, index) => (
        <li key={name} onClick={() => onSelectCity(index)}>
          {name} ({description})
        </li>
      ))}
    </ul>
  );
};

export default CityesList;
