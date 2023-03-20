import styled from "styled-components";

export const ContainerBtn = styled.button`
  background: #000;
  color: #f7e926;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  border-radius: 1rem;
  width: 100%;
`;

export const CardContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  display: flex;
`;

export const Card = styled.div`
  justify-content: center;
  background: #f7e926;
  color: black;
  margin: 1rem;
  border-radius: 10px;
  padding: 1rem;
  max-width: 18rem;
  text-align: center;
  box-shadow: 0 10px 16px -6px rgb(5 5 5 / 30%),
    0 25px 10px -24px rgb(5 5 5 / 10%);
`;

export const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  grid-template-columns: 350px 350px 350px;
  @media (max-width: 850px) {
    grid-template-columns: 340px;
  }
`;
