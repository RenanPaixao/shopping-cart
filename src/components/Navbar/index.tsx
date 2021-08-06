import { Container, Logo } from './style';

interface IProps{
  src: string,
  children?: JSX.Element[] | string 
}

function Navbar({src,children}:IProps):JSX.Element {
  return (
    <Container>
      <Logo src={src} />
      {children}
    </Container>
  );
}

export default Navbar;
