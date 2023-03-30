import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.colors.default};
    *{
      font-family: 'Montserrat', sans-serif;
    }
  }
`;
const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <Container></Container>
    </>
  );
}

export default App;
