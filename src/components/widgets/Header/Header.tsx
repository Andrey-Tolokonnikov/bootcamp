import Container from "../../shared/Container"
import Logo from "@/components/entities/Logo/Logo"
import Search from "../../features/Search/Search"
import { Link } from "react-router-dom"
import AddProduct from "@/components/features/AddProduct/ui/AddProduct"
import { ModeToggle } from "@/components/features/ToggleTheme/ToggleTheme"

const Header = () => {
  return (
    <header className="border-y dark:border-y-gray-600 dark:bg-[#222222]">
      <Container>
        <div className="flex justify-between py-8  items-center flex-wrap gap-3">
          <Link to="/">
            <Logo/>
          </Link>
          <Search/>
          <div className="flex items-center gap-2">
            <AddProduct/>
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header