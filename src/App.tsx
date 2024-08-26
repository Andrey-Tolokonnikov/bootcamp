import Header from "@/components/widgets/Header/Header"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsPage from "./components/pages/ProductsPage/ui/ProductsPage"
import { Toaster } from "./components/ui/toaster"
import ProductCard from "./components/pages/ProductCard/ui/ProductCard"
import Auth from "./components/pages/Auth/ui/Auth"
import Registration from "./components/pages/Registration/Registration"
import Requests from "./components/pages/Requests/ui/Requests"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="dark:bg-[#141414] dark:text-slate-200 min-h-screen">
          <Header/>
          <Routes>
            <Route path="/" Component={ProductsPage}/>
            <Route path="/product/:id" Component={ProductCard}/>
            <Route path="/auth" Component={Auth}></Route>
            <Route path="/registration" Component={Registration}/>
            <Route path="/requests" Component={Requests}/>
          </Routes>
          <Toaster/>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
