import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  padding: 0 16px;
`;

export default Form;
