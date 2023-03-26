import Link from "next/link"

const Navigation = (props : any) => {
  const sections: [] = props.sections
  const profile = props.profile
  console.log(profile)
  return (
    <header className=" fixed p-10">
        <nav className="flex w-screen justify-between">
            
        </nav>
    </header>
  )
}

export default Navigation