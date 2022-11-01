import styled from 'styled-components';
import { Field } from 'formik';

export const FormLabel = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;

  text-align: center;
  text-transform: capitalize;

  font-weight: ${p => p.theme.fontWeights.normal}px;
  font-size: ${p => p.theme.fontSizes.regular};
  color: ${p => p.theme.colors.secondary};
`;
export const Input = styled(Field)`
  display: block;
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;

  margin: 0 auto;
  padding: 0 ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.secondary};
  background-color: rgba(255, 255, 255, 0.4);

  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color linear 200ms;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.muted};
  }
`;
