import styled, { css } from 'styled-components';
import ReactInputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
  currency?: boolean;
  variant?: 'large' | 'custom';
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
    props.variant === 'custom' &&
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
`;

export const MaskedInput = styled(ReactInputMask)<ContainerProps>`
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
    props.variant === 'large' &&
    css`
      font-size: 14px;
    `}
  color: ${(props) => props.theme.colors.primary};
  &:focus {
    outline: none;
  }
`;

export const Currency = styled(CurrencyInput)<ContainerProps>`
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
    props.variant === 'large' &&
    css`
      font-size: 14px;
    `}
  color: ${(props) => props.theme.colors.primary};
  &:focus {
    outline: none;
  }
`;
export const Prefix = styled.span<ContainerProps>`
  position: absolute;
  z-index: 10;
  left: 16px;
  color: ${(props) => props.theme.colors.stroke};
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

export const Input = styled.input<ContainerProps>`
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
    props.variant === 'large' &&
    css`
      font-size: 14px;
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
      transform: translateY(-20px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 4px;
      color: ${props.theme.colors.primary};
    `}

    ${props => props.isFilled && css`
      font-size: 10px;
      transform: translateY(-20px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 4px;
      color: ${props.theme.colors.primary};
    `}
`;

export const Error = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.colors.error};
  margin-top: 0;
`;
