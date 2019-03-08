import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import FormTab from '../FormTab';

const ModalContainer = () => (
  <Modal trigger={<Button>Login</Button>} closeIcon size="mini">
    <Modal.Content>
      <FormTab />
    </Modal.Content>
  </Modal>
);

export default ModalContainer;
