import Link from "next/link"
import LogoutButton from "./LogoutButton"

const Navigation = () => {

  return (
    <header className=" fixed p-10 w-screen">
        <nav className="flex justify-between">
            <ul className="flex justify-center items-center gap-4">
              <li><img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className=" w-12 h-12 rounded-full" /></li>
              <li><p>Angelina Jolie</p></li>
            </ul>
            <LogoutButton/>
        </nav>
    </header>
  )
}

export default Navigation