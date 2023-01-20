import styled from 'styled-components';

export const StyledContactUs = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 10px;
      input, textarea {
        padding: 12px 20px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        width: 100%;
      }
      textarea {
        min-height: 150px;
      }
      p {
        color: red;
        font-size: 0.8em;
        margin-top: 5px;
      }
    }
    input[type="submit"] {
      background-color: #4CAF50;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
      &:hover {
        background-color: #3e8e41;
      }
    }
  }
`;