import * as Yup from 'yup';

import globalMessages from 'containers/App/messages';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required(globalMessages.required),
  lastName: Yup.string().required(globalMessages.required),
  email: Yup.string()
    .email(globalMessages.email)
    .required(globalMessages.required),
  password: Yup.string().required(globalMessages.required)
});
