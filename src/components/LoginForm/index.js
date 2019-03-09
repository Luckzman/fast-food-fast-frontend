import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/authActions/authActions';
import Loading from '../Loader/Loading';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      }
      // errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { login } = this.props;
    // if (errors) {
    //   this.setState({ errors });
    // }
    console.log(user);
    login(user);
  };

  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    console.log(user);
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    if (this.props.user.success) {
      return <Redirect to="catalog" />;
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input name="email" value={user.email} placeholder="Email" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <input
            name="password"
            value={this.password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </Form.Field>
        {this.props.user.authIsLoading ? <Loading size="tiny" /> : null}
        <Button type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(userLogin(user))
});

const mapStateToProps = state => ({ user: state.authReducer });

export { LoginForm as Login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

LoginForm.propTypes = {
  login: PropTypes.func,
  user: PropTypes.object
};

LoginForm.defaultProps = { login: null, user: {} };
