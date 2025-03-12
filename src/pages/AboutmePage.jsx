import React from 'react';
import AboutmeComponent from '../components/AboutmeComponent';
import styled from 'styled-components';

// Styled components for the page
const AboutmeSection = styled.section`
  padding: 0px;
  min-height: 60vh;
  color: black;
`;

const AboutmePage = () => {
  console.log('AboutmePage is running'); // For debugging

  return (
    <AboutmeSection>
      <AboutmeComponent />
    </AboutmeSection>
  );
};

export default AboutmePage;
