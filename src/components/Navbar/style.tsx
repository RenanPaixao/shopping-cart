import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  padding: .3rem 1rem;

  background-color: var(--white);

  @media(min-width: 576px){
  padding: .3rem 1rem .3rem 1.7rem;

  }
  @media(min-width: 720px){
  padding: .3rem 1rem .3rem 2rem;

  }
  @media(min-width: 960px){
  padding: .3rem 1rem .3rem 2.5rem;
  
  }
  @media(min-width: 1200px){
    padding: .3rem 1rem .3rem 5rem;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 55px;

  cursor: pointer;

  @media(min-width: 576px){
    width: 70px;
    height: 65px;
  }
  @media(min-width: 720px){
    width: 75px;
    height: 70px;
  }
  @media(min-width: 960px){
    width: 80px;
    height: 75px;
  }
  @media(min-width: 1200px){
    width: 90px;
    height: 80px;
  }
`;
