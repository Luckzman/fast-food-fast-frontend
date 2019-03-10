import { signupValidate, loginValidator } from '../validate';

describe('Test validator', () => {
  it('should check for valid email', () => {
    const user = {
      email: 'fakerfake.com',
      password: 'passwordA23s'
    };
    const checkUser = loginValidator(user);
    expect(checkUser.email).toEqual('Invalid Email Address');
  });

  it('should check if email field is empty', () => {
    const user = {
      email: '',
      password: 'passwordA23s'
    };
    const checkUser = loginValidator(user);
    expect(checkUser.email).toEqual('Email field is required');
  });

  it('should check if password is in right format', () => {
    const user = {
      email: 'faker@faker.com',
      password: 'passwo23s'
    };
    const checkUser = loginValidator(user);
    expect(checkUser.password).toEqual(
      'Password must be at least 8 characters, 1 uppercase letter, 1 number'
    );
  });
});

describe('Check signUp validation', () => {
  it('Test sign up validator', () => {
    const user = {
      firstname: 'faker',
      lastname: 'fake',
      email: 'faker@fake.com',
      password: 'passwordAS12'
    };
    const data = signupValidate(user);
    expect(data).toMatchInlineSnapshot('Object {}');
  });

  it('should check if password is in right format', () => {
    const user = {
      firstname: 'faker',
      lastname: 'fake',
      email: 'faker@fake.com',
      password: 'passwordAS'
    };
    const checkUser = signupValidate(user);
    expect(checkUser.password).toEqual(
      'Password must be at least 8 characters, 1 uppercase letter, 1 number'
    );
  });
  it('should check if firstname is empty', () => {
    const user = {
      firstname: '',
      lastname: 'fake',
      email: 'faker@fake.com',
      password: 'passwordAS'
    };
    const checkUser = signupValidate(user);
    expect(checkUser.firstname).toEqual('Firstname field is required');
  });
  it('should check if lastname is empty', () => {
    const user = {
      firstname: 'fake',
      lastname: '',
      email: 'faker@fake.com',
      password: 'passwordAS'
    };
    const checkUser = signupValidate(user);
    expect(checkUser.lastname).toEqual('Lastname field is required');
  });
  it('should check if email is empty', () => {
    const user = {
      firstname: 'fake',
      lastname: 'fake',
      email: '',
      password: 'passwordAS'
    };
    const checkUser = signupValidate(user);
    expect(checkUser.email).toEqual('Email field is required');
  });
  it('should check if password is empty', () => {
    const user = {
      firstname: 'fake',
      lastname: 'fake',
      email: 'fake@fake.com',
      password: ''
    };
    const checkUser = signupValidate(user);
    expect(checkUser.password).toEqual('Password field is required');
  });

  it('should check for valid email', () => {
    const user = {
      firstname: 'faker',
      lastname: 'fake',
      email: 'fakerfake.com',
      password: 'passwordAS'
    };
    const checkUser = signupValidate(user);
    expect(checkUser.email).toEqual('Invalid Email Address');
  });
});
