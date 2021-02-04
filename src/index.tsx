import React from 'react';

import FormComponent from 'components/Form'
import BasicInput, { addBasicInputTheme } from 'components/Input/basic'
import CurrencyInput, { addCurrencyInputTheme } from 'components/Input/currency';
import MaskedInput, { addMaskedInputTheme } from 'components/Input/mask';
import { Form } from '@unform/web';

import { ThemeProvider } from 'styled-components';

export {
  BasicInput,
  CurrencyInput,
  MaskedInput,
  Form,
  addBasicInputTheme,
  addCurrencyInputTheme,
  addMaskedInputTheme,
}

import defaultTheme from 'styles/theme'

let theme = defaultTheme;

export function addFormTheme(userTheme: any) {
  return theme = userTheme;
}

export const CustomForm: React.FC = ({children, ...rest}) => {
  return(
    <ThemeProvider theme={theme}>
      <FormComponent {...rest}>{children}</FormComponent>
    </ThemeProvider>
  )
};
