import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    background: white;
    padding: 0 20px;
    font-size: 18px;
    color: #444;
    border-radius: 3px;


    border: ${props => (props.withError ? '2px solid red' : 0)};
    }

  button {
    width: 80px;
    height: 55px;
    background: #63f5b8;
    padding: 0 20px;
    margin-left: 10px;
    font-size: 20px;
    color: #fff;
    border-radius: 3px;
    border: 0;
    font-weight: bold;

    &:hover {
      background: #52d89f;
    }
  }
`;
