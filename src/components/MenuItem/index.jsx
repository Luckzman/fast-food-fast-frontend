import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { placeOrder } from '../../actions/orderActions';

class MenuItem extends Component {
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
    this.setState({ menus });
  };

  addToCart = (menuItem) => {
    const cart = [];
    const newCart = {};
    const { menus } = this.state;
    const { placeNewOrder } = this.props;
    newCart.quantity = menus.quantity;
    newCart.menu = menuItem;
    cart.push(newCart);
    placeNewOrder(cart);
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

const mapStateToProps = state => ({
  order: state.orderReducer
});

const mapDispatchToProps = dispatch => ({
  placeNewOrder: dispatch(placeOrder())
});

export { MenuItem as Menu };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);

MenuItem.propTypes = {
  placeNewOrder: PropTypes.object,
  menuItem: PropTypes.object
};

MenuItem.defaultProps = { placeNewOrder: {}, menuItem: {} };
