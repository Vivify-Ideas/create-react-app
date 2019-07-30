import * as Yup from 'yup';

import globalMessages from 'containers/App/messages';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email(globalMessages.email)
    .required(globalMessages.required),
  password: Yup.string().required(globalMessages.required)
});
