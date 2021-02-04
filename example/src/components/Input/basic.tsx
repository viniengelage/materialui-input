import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
  InputHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Input, Label, Container, InputBlock, Error } from './styles';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'styles/theme'

library.add(fas);

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  icon?: IconName;
  variant?: 'large' | 'custom';
  height?: number;
}

let theme = defaultTheme;

export function addBasicInputTheme(userTheme: any) {
  return theme = userTheme;
}

const BasicInput: React.FC<InputProps> = ({
  name,
  placeholder,
  icon,
  variant = 'large',
  height,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

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
          <Input
            id={name}
            ref={inputRef}
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            variant={variant}
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

export default BasicInput;
