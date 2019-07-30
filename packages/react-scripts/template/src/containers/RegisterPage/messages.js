import { defineMessages } from 'react-intl';

export const scope = 'RegisterPage';

export default defineMessages({
  registerTitle: {
    id: `${scope}.text.registerTitle`,
    defaultMessage: 'Register'
  },
  registerButton: {
    id: `${scope}.button.register`,
    defaultMessage: 'Register'
  },
  loginLink: {
    id: `${scope}.link.login`,
    defaultMessage: 'Already have an account? Login'
  }
});
