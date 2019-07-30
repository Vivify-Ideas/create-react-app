import * as Yup from 'yup';

import globalMessages from 'containers/App/messages';

export const updateUserSchema = Yup.object().shape({
  firstName: Yup.string().required(globalMessages.required),
  lastName: Yup.string().required(globalMessages.required)
});
