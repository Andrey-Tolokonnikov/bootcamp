import Container from "../../shared/Container"
import Logo from "@/components/entities/Logo/Logo"
import Search from "../../features/Search/ui/Search"
import { Link } from "react-router-dom"
import { ModeToggle } from "@/components/features/ToggleTheme/ToggleTheme"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import useUserState from "@/store/UserSlice"

const Header = () => {
  const user = useUserState()
  return (
    <header className="border-y dark:border-y-gray-600 dark:bg-[#222222]">
      <Container>
        <div className="flex justify-between py-8  items-center flex-wrap gap-3">
          <Link to="/">
            <Logo/>
          </Link>
          <Search/>
          <div className="flex items-center gap-2">
            <Link to="/auth">
              <Button><User className="mr-2"/>
                {
                  user.name?(
                    <div> 
                      <p className="">{user.name}</p>
                      <p className="text-xs">Выйти</p>
                    </div>):"Войти"
                }
              </Button>
            </Link>
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header