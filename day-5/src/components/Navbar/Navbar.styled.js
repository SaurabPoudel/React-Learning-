import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3f51b5;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  
  .left-side {
    h1 {
      margin: 0;
    }
  }
  
  .right-side {
    display: flex;
    a {
      display: flex;
      align-items: center;
      color: #fff;
      text-decoration: none;
      margin: 0 10px;
      &:hover {
        color: #f5f5f5;
        text-decoration: underline;
      }
      &.active {
        color: #f5f5f5;
        font-weight: bold;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .right-side {
      flex-wrap: wrap;
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;