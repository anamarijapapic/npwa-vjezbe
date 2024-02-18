import React, { useState, useEffect } from 'react';
import useDropdown from './useDropdown';
import Results from './Results';

function PopcornFilterForm() {
  const [flavors, setFlavors] = useState([]);
  const [selectedFlavor, FlavorDropdown] = useDropdown(flavors, 'salted');
  const [subFlavors, setSubFlavors] = useState([]);
  const [selectedSubFlavor, SubFlavorDropdown] = useDropdown(subFlavors, 'butter');
  const [loadingSubFlavors, setLoadingSubFlavors] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://demo3861058.mockable.io/popcorn-flavors')
      .then(response => response.json())
      .then(data => setFlavors(data['popcorn-flavors']))
      .catch(error => {
        console.error('Error fetching popcorn flavors: ', error);
      });
  }, []);

  useEffect(() => {
    const fetchSubFlavors = async () => {
      try {
        if (selectedFlavor) {
          setLoadingSubFlavors(true);

          const response = await fetch(`https://demo3861058.mockable.io/popcorn-flavors/${selectedFlavor}`);
          const data = await response.json();

          const subFlavorsData = data[selectedFlavor];
          if (subFlavorsData) {
            setSubFlavors(Object.keys(subFlavorsData));
          } else {
            console.error(`No sub-flavors found for ${selectedFlavor}`);
            setSubFlavors([]);
          }
        }
      } catch (error) {
        console.error(`Error fetching ${selectedFlavor} flavors: `, error);
      } finally {
        setLoadingSubFlavors(false);
      }
    };

    fetchSubFlavors();
  }, [selectedFlavor]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredData = await fetchFilteredProducts(selectedFlavor, selectedSubFlavor);
    
    setFilteredProducts(filteredData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="flavorSelect">Choose a popcorn flavor: </label>
          <FlavorDropdown />
        </div>

        <div>
          <label htmlFor="subFlavorSelect">Choose a sub-flavor: </label>
          <SubFlavorDropdown />
        </div>

        <button type="submit">Submit</button>
      </form>

      <Results
        filteredProducts={filteredProducts}
        selectedFlavor={selectedFlavor}
        selectedSubFlavor={selectedSubFlavor}
      />
    </div>
  );
}

const fetchFilteredProducts = async (flavor, subFlavor) => {
  console.log(`Fetching ${flavor} - ${subFlavor} products...`);
  try {
    const response = await fetch(`https://demo3861058.mockable.io/popcorn-flavors/${flavor}`);
    const data = await response.json();
    
    return data[flavor][subFlavor];
  } catch (error) {
    console.error(`Error fetching ${flavor} - ${subFlavor} products: `, error);
  }
};

export default PopcornFilterForm;
