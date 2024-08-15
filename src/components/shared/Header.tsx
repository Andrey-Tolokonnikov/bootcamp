
import { Button } from "../ui/button"
import Container from "./Container"
import Logo from "./Logo"
import Search from "./Search"

const Header = () => {
  return (
    <header className="border-y">
      <Container>
        <div className="flex justify-between gap-8 py-8">
          <Logo/>
          <Search/>
          <Button variant="default">Войти</Button>
        </div>
      </Container>
    </header>
  )
}

export default Header