import styled from 'styled-components';
export const SectionTitle = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  text-align: center;
  color: ${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
