import GlobalStyles from "./assets/styles/GlobalStyles"

import Navbar from "./components/Navbar/index";
import Image from './assets/images/logo.png'
import Home from './pages/Home/index'


function App(){
  return (
    <>
    <GlobalStyles/>
    <Navbar src={Image}/>
    <Home/>
  </>
  );
}

export default App;
