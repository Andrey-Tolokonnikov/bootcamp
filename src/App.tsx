import Header from "@/components/widgets/Header/Header"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsPage from "./components/pages/ProductsPage/ui/ProductsPage"
import { Toaster } from "./components/ui/toaster"
import ProductCard from "./components/pages/ProductCard/ui/ProductCard"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="dark:bg-[#141414] dark:text-slate-200 min-h-screen">
          <Header/>
          <Routes>
            <Route path="/" Component={ProductsPage}/>
            <Route path="/product/:id" Component={ProductCard}/>
          </Routes>
          <Toaster/>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
