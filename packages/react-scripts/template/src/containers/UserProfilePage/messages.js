import { defineMessages } from 'react-intl';

export const scope = 'UserProfile';

export default defineMessages({
  updateUserHeader: {
    id: `${scope}.text.updateUserHeader`,
    defaultMessage: 'Update Profile'
  },
  updateButton: {
    id: `${scope}.button.update`,
    defaultMessage: 'Update'
  }
});
