import Container from "../../shared/Container"
import Logo from "@/components/entities/Logo/Logo"
import Search from "../../features/Search/Search"
import { Link } from "react-router-dom"
import AddProduct from "@/components/features/AddProduct/AddProduct"

const Header = () => {
  return (
    <header className="border-y">
      <Container>
        <div className="flex justify-between py-8 items-center flex-wrap gap-3">
          <Link to="/">
            <Logo/>
          </Link>
          <Search/>
          <AddProduct/>
        </div>
      </Container>
    </header>
  )
}

export default Header