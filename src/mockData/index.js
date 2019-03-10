const payload = {
  firstname: 'john',
  lastname: 'joseph',
  email: 'jo@jos.com',
  password: 'password123R'
};

const signupSuccessAction = [
  {
    type: 'SIGNUP_SUCCESS',
    payload
  }
];

const signupFailureAction = [
  {
    type: 'SIGNUP_FAILURE',
    payload
  }
];

const fakeUser2 = {
  email: 'jo@jos.com',
  password: 'password'
};
const signupOkResponse = {
  data: {
    status: 201,
    success: true,
    data: {
      message:
        'Account successfully created, Kindly check your email to activate your account. In case you did not receive the activation link in your mail, kindly visit this link localhost:3000/api/v1/users/resend/activation/mail to resend the mail.'
    }
  }
};
const mockResponse = {
  data: {
    data: {
      message: 'Successfully logged in'
    }
  }
};
const mockArticleResponse = {
  message: 'Article Successfully created'
};
const error = {
  response: {
    status: 400,
    success: false,
    data: {
      message: 'Oops! something went wrong, kindly try again'
    }
  }
};
const loginOkResponse = {
  data: {
    status: 200,
    success: true,
    data: {
      token: 'sampleToken',
      message: 'You have sccessfully login'
    }
  }
};
const loginBadResponse = {
  status: 400,
  success: false,
  data: {
    message: 'Incorrect credentials'
  }
};
const startAction = [{ type: 'START' }];

const socialToken = 'hyakfhkdhiuashvk98924cxndusjdusnfixomj9';

const mockPath = 'auth/facebook/';

const autoLoginResponse = {
  data: {
    message: 'Your account has been successfully activated! You can begin spreaing your ideas now.'
  }
};

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiZDE1NjRhYTYtZTgxZC00MWFiLTg0NjktMGFhNTczZjRhNmM1Iiwicm9sZSI6W119LCJpYXQiOjE1NTEzNDg0NjEsImV4cCI6MTU1MTQzNDg2MX0.W-Q3vDCP1b4iKMOm_cBSMTzmRqvU9kpzcP-E2ka2n4U';

export {
  payload,
  fakeUser2,
  mockResponse,
  signupOkResponse,
  startAction,
  signupSuccessAction,
  signupFailureAction,
  error,
  loginOkResponse,
  loginBadResponse,
  mockArticleResponse,
  socialToken,
  mockPath,
  jwtToken,
  autoLoginResponse
};
