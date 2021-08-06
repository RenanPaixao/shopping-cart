import GlobalStyles from "./assets/styles/GlobalStyles"
import Navbar from "./components/Navbar/index";
import Image from './assets/images/logo.png'



function App(){
  return (
    <>
    <GlobalStyles/>
    <Navbar src={Image}/>
    <main >
      <h1>Shopping</h1>
    </main>
  </>
  );
}

export default App;
