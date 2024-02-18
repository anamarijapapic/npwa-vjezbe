import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: null,
      subFlavor: null,
      productName: null,
      selectedProduct: null,
    };
  }

  componentDidMount() {
    this.fetchProductDetails();
  }

  componentDidUpdate(prevProps) {
    const { flavor, subFlavor, productName } = this.props.params;

    if (
      prevProps.params.flavor !== flavor ||
      prevProps.params.subFlavor !== subFlavor ||
      prevProps.params.productName !== productName
    ) {
      this.setState({
        flavor,
        subFlavor,
        productName,
        selectedProduct: null,
      });

      this.fetchProductDetails();
    }
  }

  fetchProductDetails() {
    const { flavor, subFlavor, productName } = this.props.params;

    fetch(`https://demo3861058.mockable.io/popcorn-flavors/${flavor}`)
      .then(response => response.json())
      .then(data => {
        const productData = data[flavor][subFlavor];
        const productDetails = productData.find(product => product.name === productName);

        if (productDetails) {
          this.setState({ selectedProduct: productDetails });
        } else {
          console.error(`No details found for ${productName}`);
        }
      })
      .catch(error => {
        console.error(`Error fetching details for ${productName}: `, error);
      });
  }

  render() {
    const { selectedProduct } = this.state;

    if (!selectedProduct) return <div>Loading...</div>;

    const { displayName, details } = selectedProduct;

    return (
      <div>
        <h3>{displayName} Details:</h3>
        <p>Description: {details.description}</p>
        <p>Ingredients: {details.ingredients.join(', ')}</p>
        <p>Price: ${details.price}</p>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default withParams(Details);
