import Link from "next/link"

const Navigation = (props : any) => {
  const sections: [] = props.sections
  const profile = props.profile
  return (
    <header className=" fixed font-cina">
        <nav className="flex w-screen justify-between">
            <ul className="flex gap-5 text-xl">
              {sections.map(section => <Link href={`/${section}`}><li key={section} > {section}</li></Link>)}
            </ul>
        </nav>
    </header>
  )
}

export default Navigation