import { defineMessages } from 'react-intl';

export const scope = 'WelcomePage';

export default defineMessages({
  loginLink: {
    id: `${scope}.link.login`,
    defaultMessage: 'Login'
  },
  registerLink: {
    id: `${scope}.link.register`,
    defaultMessage: 'Register'
  },
  heading: {
    id: `${scope}.heading`,
    defaultMessage: 'Vivify Ideas React Boilerplate'
  },
  subheading: {
    id: `${scope}.subheading`,
    defaultMessage:
      'We are Vivify Ideas, a web development company and home of extraordinary developers.'
  },
  builtWithLove: {
    id: `${scope}.message.builtWhithLove`,
    defaultMessage: 'Built with love by the {team} team.'
  }
});
