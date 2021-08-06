import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  padding: .3rem 1rem;

  background-color: var(--white);

  @media(min-width: 576px){
  padding: .3rem 1rem .5rem 3rem;

  }
  @media(min-width: 720px){
  padding: .3rem 1rem .5rem 4rem;

  }
  @media(min-width: 960px){
  padding: .3rem 1rem .5rem 5rem;
  
  }
  @media(min-width: 1200px){
    padding: .5rem 1rem .5rem 6rem;
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
    width: 80px;
    height: 70px;
  }
`;
