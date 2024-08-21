type Props = {
    title: string,
    text: string
}

const Error = (props: Props) => {
  return (
    <div className="text-center">
      <p className="text-9xl text-primary">404</p>
      <h1 className="text-3xl mb-5">{props.title}</h1> 
      <h3>{props.text}</h3>
    </div>
  )
}

export default Error