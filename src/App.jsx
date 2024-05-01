import Header from "./Components/Header"
import { BrowserRouter } from "react-router-dom"
import Midsection from "./Components/Midsection"
import Midsection2 from "./Components/Midsection2"
import Footer from "./Components/Footer"

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />
      <Midsection />
      <Midsection2 />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
