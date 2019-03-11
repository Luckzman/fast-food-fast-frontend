import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMenu } from '../../actions/menuItem';
import MenuItem from '../MenuItem';
import './Catalog.scss';

class MenuCatalog extends Component {
  renderHeader() {
    return (
      <header>
        <div className="container">
          <div>
            <Link to="/">FastFoodFast.com</Link>
          </div>
        </div>
      </header>
    );
  }

  renderContent() {
    const { menu } = this.props;
    return (
      <main>
        <div id="container" className="container top catalog">
          {menu.response.data
            ? menu.response.data.menu.map(menuItem => (
              <MenuItem key={menuItem.id} menuItem={menuItem} />
            ))
            : null}
        </div>
      </main>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menuReducer
});

const mapDispatchToProps = dispatch => ({
  catalog: dispatch(getMenu())
});

export { MenuCatalog as Menu };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuCatalog);

MenuCatalog.propTypes = {
  menu: PropTypes.object
};

MenuCatalog.defaultProps = { menu: {} };
