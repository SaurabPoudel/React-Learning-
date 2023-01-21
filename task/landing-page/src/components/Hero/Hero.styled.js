import styled,{keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  position: relative;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroText = styled.h1`
  position: absolute;
  z-index: 1;
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px #000;
  animation: ${fadeIn} 1s ease-in-out;

`;