import {WrapperProducts, WrapperSearch} from './style';
import Product from '../../components/Product'
import Search from '../../components/Search';

function Home():JSX.Element{

  return(
    <main >
      <WrapperSearch>
        <Search></Search>
      </WrapperSearch>
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