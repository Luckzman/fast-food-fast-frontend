import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: {
        quantity: 1
      }
    };
  }

  componentDidMount() {
    const catalog = () => {};
    catalog();
  }

  handleChange = (event) => {
    const { menus } = this.state;
    const { name, value } = event.target;
    menus[name] = value;
    console.log(menus);
    this.setState({ menus });
  };

  addToCart = (menuItem) => {
    const newCart = {};
    const { menus } = this.state;
    newCart.quantity = menus.quantity;
    newCart.menu = menuItem;
  };

  render() {
    const { menuItem } = this.props;
    const { menus } = this.state;
    return (
      <div className="img-container" key={menuItem.id}>
        <img src={menuItem.image} alt="category" />
        <p>{menuItem.food_name}</p>
        <div>
          <button type="button">view details</button>
          <input
            type="number"
            min="1"
            max="99"
            name="quantity"
            value={menus.quantity}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.addToCart.bind(this, menuItem)}>
            Place Order
          </button>
        </div>
      </div>
    );
  }
}

MenuItem.propTypes = {
  menuItem: PropTypes.object
};

MenuItem.defaultProps = { menuItem: {} };
