import React from 'react';

import FormComponent from 'components/Form'
import BasicInput, { addBasicInputTheme } from 'components/Input/basic'
import CurrencyInput, { addCurrencyInputTheme } from 'components/Input/currency';
import MaskedInput, { addMaskedInputTheme } from 'components/Input/mask';

import {ThemeProvider} from 'styled-components'

export {
  BasicInput,
  CurrencyInput,
  MaskedInput,
  addBasicInputTheme,
  addCurrencyInputTheme,
  addMaskedInputTheme
}

import defaultTheme from 'styles/theme'

let theme = defaultTheme;

export function addFormTheme(userTheme: any) {
  return theme = userTheme;
}

export const Form: React.FC = ({children, ...rest}) => {
  return(
    <ThemeProvider theme={theme}>
      <FormComponent {...rest}>{children}</FormComponent>
    </ThemeProvider>
  )
};
