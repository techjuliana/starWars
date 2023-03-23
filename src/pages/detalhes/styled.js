import styled from "styled-components";

export const Container = styled.div`
  color: #f7e926;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  border-radius: 1rem;
  text-align: center;
  width: 100%;
  h1 {
    margin: 2rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  h5{
    margin:1rem;
  }
`;

export const Linha = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    max-width: 20rem;
    text-align: start;
    margin: 2rem;
  }
  img {
    width: 20rem;
    max-height: 40rem;
  }
`;
