import Navber from "./components/layout/Navber"  
import Product from "./components/layout/Product"
import Search from "./components/layout/Search"
import Pot from './assets/pot.png'
import Headphone from './assets/headphone.png'
import Table from './assets/table.png'
import Cap from './assets/cap.png'
import Clock3 from './assets/clock3.png'
import Bag2 from './assets/bag2.png'
import Sunglass from './assets/sunglass.png'
import Vasket from './assets/vasket.png'
import Clock1 from './assets/clock1.png'
import Footer from "./components/layout/Footer.jsx"

  

function App() {


  return (
    <>
      <Navber/>
      <Search/>
      <Product pot={Pot} headphone={Headphone} table={Table} cap={Cap} clock3={Clock3} bag2={Bag2} sunglass={Sunglass} vasket={Vasket} Clock1={Clock1} potOffer="New" headphoneOffer="-10%" clock3Offer="New" sunglassOff="-10%" tableOffer="-15%" capOffer="-10%"/>
      <Footer/>
    </>
  )
}

export default App
