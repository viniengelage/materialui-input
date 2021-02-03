# viniengelage-materialui-button

> A input component list, crafted with styled-components and Unform. This a module for Vinicios Engelage's MaterialUI

[![NPM](https://img.shields.io/npm/v/viniengelage-materialui-button.svg)](https://www.npmjs.com/package/viniengelage-materialui-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @viniengelage/materialui-input
```

or

```bash
yarn add @viniengelage/materialui-input
```

## Usage

```jsx
import React from 'react';

import { BasicInput } from '@viniengelage/materialui-input'

const App = () => (
  <Form onSubmit={() => console.log('submit')}>
    <BasicInput name="input"/>
  </Form>
)

export default App;

```



### Theme

You can add your own theme, using the function *addButtonTheme*

```jsx
import theme from './myTheme';

import { addInputTheme } from '@viniengelage/materialui-input'

addInputTheme(theme)

```

You can use this function in your App.js

## License

MIT © [viniengelage](https://github.com/viniengelage)
