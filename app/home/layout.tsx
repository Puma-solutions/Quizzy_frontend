import Navigation from "../../components/Navigation"

const homeLayout = ({children} : {
  children: React.ReactNode
}) => {
  return (
    <>
    <Navigation/>
    <>
        {children}
    </>
    </>
  )
}

export default homeLayout