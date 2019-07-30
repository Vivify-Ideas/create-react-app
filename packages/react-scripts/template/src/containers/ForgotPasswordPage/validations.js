import * as Yup from 'yup';

import globalMessages from 'containers/App/messages';

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email(globalMessages.email)
    .required(globalMessages.required)
});
