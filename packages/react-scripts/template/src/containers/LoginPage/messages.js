import { defineMessages } from 'react-intl';

export const scope = 'LoginPage';

export default defineMessages({
  loginTitle: {
    id: `${scope}.text.loginTitle`,
    defaultMessage: 'Login'
  },
  loginButton: {
    id: `${scope}.button.login`,
    defaultMessage: 'Login'
  },
  registerLink: {
    id: `${scope}.link.register`,
    defaultMessage: `Don't have an account? Register`
  },
  forgotPasswordLink: {
    id: `${scope}.text.forgotPassword`,
    defaultMessage: 'Forgot password?'
  }
});
