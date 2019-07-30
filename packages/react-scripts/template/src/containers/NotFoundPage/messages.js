import { defineMessages } from 'react-intl';

export const scope = 'NotFoundPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Page not found.'
  },
  backLink: {
    id: `${scope}.link.back`,
    defaultMessage: 'Go back'
  }
});
