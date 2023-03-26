import Navigation from "../../components/Navigation"

const homeLayout = ({children} : {
  children: React.ReactNode
}) => {
  return (
    <>
    <Navigation/>
    <main className=" p-32">
        {children}
    </main>
    </>
  )
}

export default homeLayout