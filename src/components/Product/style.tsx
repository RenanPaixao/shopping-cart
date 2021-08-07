import styled from "styled-components";

export const Container = styled.div`
  width: 10rem;
  height: 12rem;



  background-color: var(--white);
  border: solid 1px var(--yellow);
  border-radius: 5px;
  `
export const WrapperContent = styled.div`
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.3rem;


  img{
    width: 7rem;
    border-radius: 5px;
  }
  
`

export const BottomInfo = styled.p`
  inline-size: 100%;
  font-size: 0.7rem;

  padding: 0 1.5rem;
  margin-bottom: -0.5rem;

  display: flex;
  justify-content: space-between;

  color: var(--blue);
  span{
    margin-left: auto;
  }
`
