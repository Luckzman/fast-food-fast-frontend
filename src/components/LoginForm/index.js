import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/authActions/authActions';
import Loading from '../Loader/Loading';
import { loginValidator } from '../../helpers/validate';
import InlineError from '../../helpers/inlineErrors';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { login } = this.props;
    const errors = loginValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    login(user);
  };

  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({ user });
  };

  render() {
    const { user, errors } = this.state;
    if (this.props.user.isAuthenticated) {
      return <Redirect to="catalog" />;
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input
            id="email"
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field>
          <input
            name="password"
            value={this.password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          {errors.password && <InlineError text={errors.password} />}
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
