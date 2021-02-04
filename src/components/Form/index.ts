import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';

interface FormProps{
  dimension?: 'small' | 'medium' | 'large' | 'custom';
}

const Form = styled(Unform)<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 352px;
  border: 0.12rem solid ${props => props.theme.colors.stroke};
  border-radius: 6px;

  position: relative;
  padding-bottom: 18px;
  padding-top: 8px;

  &:after{
    content: '';
    position: absolute;
    width: 352px;
    height: 10px;
    background-color: ${props => props.theme.colors.primary};

    bottom: -1px;
    border-radius: 0 0 6px 6px;
  }

  ${props => props.dimension === 'medium' && css`
    width: 448px;
    &:after{
      width: 448px;
    }
  `}
  ${props => props.dimension === 'large' && css`
    width: 640px;
    &:after{
      width: 640px;
    }
  `}
  ${props => props.dimension === 'custom' && css`
    width: 100%;
    padding: 18px;
    &:after{
      width: 100%;
    }
  `}
`;

export default Form;
