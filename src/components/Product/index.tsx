import {Container, WrapperContent, BottomInfo} from './style'

interface IProps{
  name:string,
  image:string,
  qtt:number,
  price:number
}

function Product({name,image,qtt,price}:IProps):JSX.Element{
  return(
  <Container>
    <WrapperContent>
      <p>{name}</p>
      <img src={image}/>
      
      <BottomInfo>Qtd: {qtt} <span>R$ {price}</span></BottomInfo>
      
    </WrapperContent>
  </Container>
  )
}
export default Product;