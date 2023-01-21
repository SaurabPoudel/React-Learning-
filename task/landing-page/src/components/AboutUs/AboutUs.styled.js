import styled from 'styled-components';

export const StyledAboutUs = styled.div`
  background-color: #f5f5f5;
  background-image: url('./assets/about-us-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2em;
    line-height: 1.5em;
    svg {
      margin-right: 5px;
    }
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 1em;
    }
  }
`;