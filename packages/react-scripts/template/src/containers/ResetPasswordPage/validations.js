import * as Yup from 'yup';

import globalMessages from 'containers/App/messages';

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required(globalMessages.required),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    globalMessages.mustMatch
  )
});
