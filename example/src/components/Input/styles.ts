import styled, { css } from 'styled-components';
import ReactInputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
  currency?: boolean;
  size: 'default' | 'medium' | 'large' | 'flex';
}

type InputWithoutSize = Omit<ContainerProps, 'size'>;

interface InputProps extends InputWithoutSize{
  dimension: 'default' | 'medium' | 'large' | 'flex';
}

export const InputBlock = styled.div`
  margin: 8px;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 300px;
  height: 40px;
  padding: 0 16px;
  border: 0.10rem solid ${(props) => props.theme.colors.stroke};
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-bottom: 0;

  &:before {
    content: '';
    background-color: ${(props) => props.theme.colors.stroke};
    position: absolute;
    width: 6px;
    height: 40px;
    left: -2px;
    z-index: 10;
    border-radius: 3px 0 0 3px;
    padding: 0;
  }
  svg {
    position: absolute;
    z-index: 10;
    right: 16px;
    color: ${(props) => props.theme.colors.stroke};
  }

  ${(props) =>
    props.size === 'flex' &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${props.theme.colors.error};
      svg {
        color: ${props.theme.colors.error};
      }
      &:before {
        background-color: ${props.theme.colors.error};
      }
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
      svg {
        color: ${props.theme.colors.primary};
      }
      &:before {
        background-color: ${props.theme.colors.primary};
      }
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
      svg {
        color: ${props.theme.colors.primary};
      }
      &:before {
        background-color: ${props.theme.colors.primary};
      }
    `}

    /* MEDIUM SIZE  */

    ${props => props.size === 'medium' && css`
      height: 50px;
      width: 320px;
      &:before{
        height: 50px;
      }
    `}

    /* LARGE SIZE */

    ${props => props.size === 'large' && css`
      height: 60px;
      width: 350px;
      &:before{
        height: 60px;
      }
    `}
`;

export const MaskedInput = styled(ReactInputMask)<InputProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  background: none;
  z-index: 1;
  border: none;
  padding: 0 40px 0 16px;
  font-size: 10px;
  ${(props) =>
    props.dimension === 'large' &&
    css`
      font-size: 18px;
    `}
  color: ${(props) => props.theme.colors.primary};
  &:focus {
    outline: none;
  }
`;

export const Currency = styled(CurrencyInput)<InputProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  background: none;
  z-index: 1;
  border: none;
  padding: 0 40px 0 40px;
  font-size: 10px;
  ${(props) =>
    props.dimension === 'large' &&
    css`
      font-size: 18px;
      padding: 0 60px 0 40px;
    `}

  ${(props) =>
  props.dimension === 'medium' &&
  css`
    font-size: 16px;
    padding: 0 50px 0 40px;
  `}
  color: ${(props) => props.theme.colors.primary};
  &:focus {
    outline: none;
  }
`;
export const Prefix = styled.span<InputProps>`
  position: absolute;
  z-index: 10;
  left: 16px;
  color: ${(props) => props.theme.colors.stroke};

  ${(props) =>
    props.dimension === 'medium' &&
    css`
      font-size: 16px;
    `}

    ${(props) =>
    props.dimension === 'large' &&
    css`
      font-size: 18px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary};
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.primary};
    `}
    z-index: 120;
`;

export const Input = styled.input<InputProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  background: none;
  z-index: 1;
  border: none;
  padding: 0 40px 0 16px;
  font-size: 10px;

  ${(props) =>
    props.dimension === 'medium' &&
    css`
      font-size: 16px;
    `}
  ${(props) =>
  props.dimension === 'large' &&
  css`
    font-size: 18px;
  `}

  color: ${(props) => props.theme.colors.primary};
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label<ContainerProps>`
  position: absolute;
  background-color: ${props => props.theme.colors.background};
  padding: 0 4px;
  color: ${(props) => props.theme.colors.stroke};
  font-size: 14px;
  cursor: text;

  display: flex;
  align-items: center;

  transition: all 0.2s ease;
  z-index: 100;

  ${(props) =>
    props.currency &&
    css`
      padding-left: 24px;
    `}

  ${props => props.isFocused && css`
      font-size: 10px;
      transform: translateY(-1.2rem) translateX(-5px);
      z-index: 501;
      background: ${props.theme.colors.background};
      padding: 0 4px;
      color: ${props.theme.colors.primary};
    `}

    ${props => props.isFilled && css`
      font-size: 10px;
      transform: translateY(-1.2rem) translateX(-5px);
      z-index: 501;
      background: ${props.theme.colors.background};
      padding: 0 4px;
      color: ${props.theme.colors.primary};
    `}

    /* MEDIUM SIZE */

    ${props => props.size === 'medium' && css`
      font-size: 16px;
    `}

    ${props => props.size === 'medium' && props.isFocused && css`
      font-size: 12px;
      transform: translateY(-1.6rem) translateX(-5px);
    `}

    /* LARGE SIZE */

    ${props => props.size === 'large' && css`
      font-size: 18px;
    `}

    ${props => props.size === 'large' && props.isFocused && css`
      font-size: 12px;
      transform: translateY(-1.9rem) translateX(-5px);
    `}
`;

export const Error = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.colors.error};
  margin-top: 0;
`;
