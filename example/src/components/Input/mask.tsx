import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Props as InputProps,  } from 'react-input-mask';
import { useField } from '@unform/core';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Container, InputBlock, Label, Error, MaskedInput } from './styles';

import defaultTheme from 'styles/theme'
import { ThemeProvider } from 'styled-components';

library.add(fas);

interface Props extends InputProps {
  name: string;
  placeholder?: string;
  icon?: IconName;
  variant?: 'large' | 'custom';
  height?: number;
}

let theme = defaultTheme;

export function addMaskedInputTheme(userTheme: any) {
  return theme = userTheme;
}


const InputMask: React.FC<Props> = ({
  name,
  icon,
  placeholder,
  variant = 'large',
  height,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);


    if(inputRef.current){
      setIsFilled(!!inputRef.current?.value);
    }
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
          variant={variant}
          height={height}
          >
          {icon && <FontAwesomeIcon icon={icon} size="sm" />}
          <MaskedInput
            id={name}
            ref={inputRef}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            variant={variant}
            defaultValue={defaultValue}
            {...rest}
            />
          <Label
            isFilled={isFilled}
            isFocused={isFocused}
            htmlFor={name}
            variant={variant}
            >
            {placeholder}
          </Label>
        </Container>
        {error && <Error>{error}</Error>}
      </InputBlock>
    </ThemeProvider>
  );
};
export default InputMask;
