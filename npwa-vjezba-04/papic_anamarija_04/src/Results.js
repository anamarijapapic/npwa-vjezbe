import React from 'react';
import { Link } from 'react-router-dom';

class Results extends React.Component {
  render() {
    const { filteredProducts, selectedFlavor, selectedSubFlavor } = this.props;

    if (!filteredProducts) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Filtered Products:</h3>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.name}>
              {product.displayName} 
              <Link to={`/${selectedFlavor}/${selectedSubFlavor}/${product.name}`}>
                Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Results;
