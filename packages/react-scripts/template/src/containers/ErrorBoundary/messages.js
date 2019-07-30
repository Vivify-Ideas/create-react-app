import { defineMessages } from 'react-intl';

export const scope = 'NotFoundPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is embarrassing 🤦‍'
  },
  reportFeedbackButton: {
    id: `${scope}.button.reportFeedback`,
    defaultMessage: 'Report feedback'
  },
  backLink: {
    id: `${scope}.link.back`,
    defaultMessage: 'Go back'
  }
});
