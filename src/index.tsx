import Form from 'components/Form'
import BasicInput from 'components/Input/basic'
import CurrencyInput from 'components/Input/currency';
import MaskedInput from 'components/Input/mask';

import defaultTheme from 'styles/theme'

let theme = defaultTheme;

function addInputTheme(userTheme: any) {
  return theme = userTheme;
}

export {
  Form,
  BasicInput,
  CurrencyInput,
  MaskedInput,
  addInputTheme
}
