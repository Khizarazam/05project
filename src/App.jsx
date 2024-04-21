import Header from "./Components/Header"
import { BrowserRouter } from "react-router-dom"
import Midsection from "./Components/Midsection"

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />
      <Midsection />
    </BrowserRouter>
    </>
  )
}

export default App
