import React from 'react';

import Form from 'components/Form'

import Basic, {addBasicInputTheme} from 'components/Input/basic'
import Currency from 'components/Input/currency';
import Masked from 'components/Input/mask';

import defaultTheme from 'styles/theme'
import exampleTheme from 'styles/userTheme'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global'

let theme = defaultTheme;

export function addInputTheme(userTheme: any) {
  return theme = userTheme;
}

addBasicInputTheme(exampleTheme)


const Inputs:React.FC = () => {
  addInputTheme(exampleTheme)
  return(
    <ThemeProvider theme={theme}>

    <Form onSubmit={() => console.log('Submit')}>
      <Basic name="basic" placeholder="Basic"/>
      <Currency name="currency" placeholder="Value"/>
      <Masked name="masked" mask="(99) 9 9999-9999" placeholder="Cellphone"/>
    </Form>

    <GlobalStyle />

    </ThemeProvider>
  )
};

export default Inputs;
