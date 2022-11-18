import React from 'react';

const City = ({ onChangeCity , cities, currentIndex }) => {
    
    const city = cities[currentIndex]
    return (
        <div>
             <h3>{city.name}</h3>
             <textarea value={city.description} onChange={(e) => onChangeCity(currentIndex, e.target.value)}></textarea>
        </div>
    );
};

export default City;