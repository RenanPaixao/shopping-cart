import {WrapperProducts} from './style';
import Product from '../../components/Product'

function Home():JSX.Element{

  return(
    <main >
      <h1>Shopping</h1>
      <WrapperProducts>
      <Product name='teste' image='https://i.imgur.com/coy0XRU.jpeg' qtt={1} price={100}/>
      <Product name='teste' image='https://i.imgur.com/coy0XRU.jpeg' qtt={1} price={100}/>
      <Product name='teste' image='https://i.imgur.com/coy0XRU.jpeg' qtt={1} price={100}/>
      <Product name='teste' image='https://i.imgur.com/coy0XRU.jpeg' qtt={1} price={100}/>
      </WrapperProducts>
    </main>
  )
}

export default Home;