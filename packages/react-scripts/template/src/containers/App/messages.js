import { defineMessages } from 'react-intl';

export const scope = 'Global';

export default defineMessages({
  email: {
    id: `${scope}.validations.email`,
    defaultMessage: 'Invalid email'
  },
  required: {
    id: `${scope}.validations.required`,
    defaultMessage: 'Required'
  },
  mustMatch: {
    id: `${scope}.validations.mustMatch`,
    defaultMessage: 'Must match'
  }
});
