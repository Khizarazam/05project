import Header from "./Components/Header"
import { BrowserRouter } from "react-router-dom"
import Midsection from "./Components/Midsection"
import Midsection2 from "./Components/Midsection2"

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />
      <Midsection />
      <Midsection2 />
    </BrowserRouter>
    </>
  )
}

export default App
