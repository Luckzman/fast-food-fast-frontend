import axios from 'axios';
import moxios from 'moxios';

import * as auth from '../auth';

describe('get user', async () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('calls axios get method', async () => {
    axios.post = jest.fn().mockResolvedValue({});
    await auth.loginCall({});
    expect(axios.post).toBeCalledTimes(1);
  });
  it('calls axios get method', async () => {
    axios.post = jest.fn().mockResolvedValue({});
    await auth.signupCall({});
    expect(axios.post).toBeCalledTimes(1);
  });
});
