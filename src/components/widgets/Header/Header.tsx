
import { Button } from "../../ui/button"
import Container from "../../shared/Container"
import Logo from "@/components/entities/Logo/Logo"
import Search from "../../features/Search/Search"
import { ArrowRight, Plus} from "lucide-react"
import ModalWindow from "@/components/shared/ModalWindow"

const Header = () => {

  return (
    <header className="border-y">
      <Container>
        <div className="flex justify-between py-8 items-center">
          <Logo/>
          <Search/>
          {/* <Button variant="default"><Plus className="mr-2"/> Добавить</Button> */}
          <ModalWindow 
            title="Добавление продукта"
            description="Здесь можно ввести данные о новом продукте и отправить их на проверку"
            triggerButton={
              <Button className="group relative" variant="default">
                <Plus className="absolute left-2 transition duration-200 group-hover:opacity-0" strokeWidth={2} />
                <ArrowRight className="absolute left-2 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                <span className="ml-5">Добавить</span>  
              </Button>
            }
          />
        </div>
      </Container>
    </header>
  )
}

export default Header