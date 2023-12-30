import React, { useState, useEffect } from 'react';

function PopcornFilter() {
  const [flavors, setFlavors] = useState([]);
  const [selectedFlavor, setSelectedFlavor] = useState('salted');
  const [subFlavors, setSubFlavors] = useState([]);
  const [selectedSubFlavor, setSelectedSubFlavor] = useState('');

  useEffect(() => {
    const flavorsUrl = 'https://demo5224149.mockable.io/popcorn-flavors';
    fetch(flavorsUrl)
      .then(response => response.json())
      .then(data => setFlavors(data['popcorn-flavors']))
      .catch(error => {
        console.error('Error fetching popcorn flavors: ', error);
      });
  }, []);

  useEffect(() => {
    if (selectedFlavor) {
      const subFlavorsUrl = `https://demo5224149.mockable.io/popcorn-flavors/${selectedFlavor}`;
      fetch(subFlavorsUrl)
        .then(response => response.json())
        .then(data => setSubFlavors(data[selectedFlavor]))
        .catch(error => {
          console.error(`Error fetching ${selectedFlavor} flavors: `, error);
        });
    }
  }, [selectedFlavor]);

  const handleFlavorChange = (e) => {
    setSelectedFlavor(e.target.value);
    setSelectedSubFlavor('');
  };

  const handleSubFlavorChange = (e) => {
    setSelectedSubFlavor(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="flavorSelect">Choose a popcorn flavor: </label>
        <select id="flavorSelect" value={selectedFlavor} onChange={handleFlavorChange}>
          {flavors.map(flavor => (
            <option key={flavor} value={flavor}>{flavor}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="subFlavorSelect">Choose a sub-flavor: </label>
        <select id="subFlavorSelect" value={selectedSubFlavor} onChange={handleSubFlavorChange}>
          {subFlavors.map(subFlavor => (
            <option key={subFlavor} value={subFlavor}>{subFlavor}</option>
          ))}
        </select>
      </div>

      <div>
        <p>Selected Popcorn Flavor: {selectedFlavor}</p>
        <p>Selected Sub-Flavor: {selectedSubFlavor}</p>
      </div>
    </div>
  );
}

export default PopcornFilter;
