import CardContainer from "@/components/shared/CardContainer"
import RegForm from "@/components/widgets/RegForm/ui/RegForm"

const Registration = () => {
  return (
    <CardContainer 
      title="Регистрация"
      content={<RegForm/>}
    />
  )
}

export default Registration