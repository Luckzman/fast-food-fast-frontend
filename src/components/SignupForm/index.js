import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const SignupForm = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input fluid placeholder="First name" />
      <Form.Input fluid placeholder="Last name" />
    </Form.Group>
    <Form.Field>
      <input placeholder="Email" />
    </Form.Field>
    <Form.Field>
      <input placeholder="Phone" />
    </Form.Field>
    <Form.Group widths="equal">
      <Form.Input type="password" fluid placeholder="Password" />
      <Form.Input type="password" fluid placeholder="Repeat Password" />
    </Form.Group>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default SignupForm;
