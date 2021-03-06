import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useField } from '@unform/core';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {
  Currency,
  Label,
  Container,
  InputBlock,
  Error,
  Prefix,
} from './styles';

import defaultTheme from 'styles/theme'
import { ThemeProvider } from 'styled-components';

library.add(fas);

export interface InputProps {
  name: string;
  placeholder?: string;
  icon?: IconName;
  prefix?: string;
  size?: 'default' | 'medium' | 'large' | 'flex';
}

let theme = defaultTheme;

export function addCurrencyInputTheme(userTheme: any) {
  return theme = userTheme;
}

const CurrencyInput: React.FC<InputProps> = ({
  name,
  placeholder,
  icon,
  size = 'default',
  prefix = 'R$',
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [formatedValue, setFormatedValue] = useState<string>('');

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  function formatReal(int: number) {
    let tmp = `${int}`;
    tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
    if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');

    return tmp;
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = formatedValue;
    }
  }, [formatedValue]);

  const handleChange = useCallback((event) => {
    const number = event.target.value.replace(/[^0-9.]/g, '');
    const newCurrency = formatReal(number);
    setFormatedValue(newCurrency);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <ThemeProvider theme={theme}>

      <InputBlock>
        <Container
          isErrored={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
          size={size}
          >
          {prefix && (
            <Prefix dimension={size} isFocused={isFocused} isFilled={isFilled}>
              {prefix}
            </Prefix>
          )}
          <Currency
            id={name}
            ref={inputRef}
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleChange}
            dimension={size}
            fixedDecimalLength={2}
            {...rest}
            />
          <Label
            isFilled={isFilled}
            isFocused={isFocused}
            htmlFor={name}
            size={size}
            currency
            >
            {placeholder}
          </Label>
          {icon && <FontAwesomeIcon icon={icon} size="sm" />}
        </Container>
        {error && <Error>{error}</Error>}
      </InputBlock>

    </ThemeProvider>
  );
};

export default CurrencyInput;
