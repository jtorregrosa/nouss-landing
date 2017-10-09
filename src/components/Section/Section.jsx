import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  height: 500px;
  background: ${props => props.theme.primary.base};  
  background: linear-gradient(to top, ${props => props.theme.primary.base}, ${props => props.theme.secondary.base});
`;

function Section() {
  return (
    <SectionContainer />
  );
}

export default Section;
