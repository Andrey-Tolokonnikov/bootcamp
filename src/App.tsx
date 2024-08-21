import Header from "@/components/widgets/Header/Header"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsPage from "./components/pages/ProductsPage/ProductsPage"
import { Toaster } from "./components/ui/toaster"
import ProductCard from "./components/pages/ProductCard/ProductCard"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" Component={ProductsPage}/>
        <Route path="/product/:id" Component={ProductCard}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
