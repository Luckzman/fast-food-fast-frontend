import React from 'react';
import { Tab } from 'semantic-ui-react';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

const panes = [
  {
    menuItem: 'Signup',
    render: function login() {
      return (
        <Tab.Pane attached={false}>
          <SignupForm />
        </Tab.Pane>
      );
    }
  },
  {
    menuItem: 'Login',
    render: function signup() {
      return (
        <Tab.Pane attached={false}>
          <LoginForm />
        </Tab.Pane>
      );
    }
  }
];

const FormTab = () => <Tab menu={{ secondary: true }} panes={panes} />;

export default FormTab;
