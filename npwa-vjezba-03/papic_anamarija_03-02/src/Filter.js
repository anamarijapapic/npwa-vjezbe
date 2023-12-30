import React, { useState, useEffect } from 'react';
import useDropdown from './useDropdown';

function PopcornFilter() {
  const [flavors, setFlavors] = useState([]);
  const [selectedFlavor, FlavorDropdown] = useDropdown(flavors, 'salted');
  const [subFlavors, setSubFlavors] = useState([]);
  const [selectedSubFlavor, SubFlavorDropdown] = useDropdown(subFlavors, '');

  useEffect(() => {
    fetch('https://demo5224149.mockable.io/popcorn-flavors')
      .then(response => response.json())
      .then(data => setFlavors(data['popcorn-flavors']))
      .catch(error => {
        console.error('Error fetching popcorn flavors: ', error);
      });
  }, []);

  useEffect(() => {
    if (selectedFlavor) {
      fetch(`https://demo5224149.mockable.io/popcorn-flavors/${selectedFlavor}`)
        .then(response => response.json())
        .then(data => setSubFlavors(data[selectedFlavor]))
        .catch(error => {
          console.error(`Error fetching ${selectedFlavor} flavors: `, error);
        });
    }
  }, [selectedFlavor]);

  return (
    <div>
      <div>
        <label htmlFor="flavorSelect">Choose a popcorn flavor: </label>
        <FlavorDropdown />
      </div>

      <div>
        <label htmlFor="subFlavorSelect">Choose a sub-flavor: </label>
        <SubFlavorDropdown />
      </div>
    </div>
  );
}
  
export default PopcornFilter;
