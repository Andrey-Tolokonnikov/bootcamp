import Header from "@/components/widgets/Header/Header"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsPage from "./components/pages/ProductsPage/ProductsPage"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" Component={ProductsPage}/>
        <Route path="/world"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
