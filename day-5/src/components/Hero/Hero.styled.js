import styled, {keyframes} from 'styled-components';

const animate = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const HeroContainer = styled.div`
  background-image: url('./assets/HeroImage.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroText = styled.h1`
  color: white;
  font-size: 3em;
  text-align: center;
  animation: ${animate} 1s ease-in-out;
`;