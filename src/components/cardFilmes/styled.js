import styled from "styled-components";

export const ContainerBtn = styled.button`
  display: flex;
  justify-content: center;
  justify-content: center;
  /* background: none; */
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.6rem;
`;

export const CardContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  display: flex;
`;

export const Card = styled.div`
  margin: 1rem;
  border-radius: 20px;
  padding: 0.5rem;
  max-width: 18rem;
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
