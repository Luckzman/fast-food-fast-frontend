import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { signupValidator } from '../../helpers/validate';
import { userSignUp } from '../../actions/authActions/authActions';
import Loading from '../Loader/Loading';
import InlineError from '../../helpers/inlineErrors';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
      },
      errors: {}
    };
  }

  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({ user });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { signup } = this.props;
    const errors = signupValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    signup(user);
  };

  render() {
    const { user, errors } = this.state;
    if (this.props.user.isAuthenticated) {
      return <Redirect to="catalog" />;
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="firstname"
            value={user.firstname}
            onChange={this.handleChange}
            placeholder="First name"
          />
          <Form.Input
            fluid
            name="lastname"
            value={user.lastname}
            onChange={this.handleChange}
            placeholder="Last name"
          />
        </Form.Group>
        {errors.firstname && <InlineError text={errors.firstname} />}
        {errors.lastname && <InlineError text={errors.lastname} />}
        <Form.Field>
          <input
            id="email"
            name="email"
            value={user.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field>
          <input name="phone" value={this.phone} onChange={this.handleChange} placeholder="Phone" />
          {errors.phone && <InlineError text={errors.phone} />}
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="password"
            value={this.password}
            type="password"
            onChange={this.handleChange}
            fluid
            placeholder="Password"
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
  signup: user => dispatch(userSignUp(user))
});

const mapStateToProps = state => ({ user: state.authReducer });

export { SignupForm as Signup };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

SignupForm.propTypes = {
  signup: PropTypes.func,
  user: PropTypes.object
};

SignupForm.defaultProps = { signup: null, user: {} };
