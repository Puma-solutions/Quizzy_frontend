export const metadata = {
  title: 'Quizzy',
  description: 'A web to study loading your own data',
}
import Navigation from "./components/Navigation"
import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const sections = ["Home", "My subjects"]
  return (
    <html lang="es">
      <body className=" bg-slate-800 font-cina">
        <Navigation sections={sections}/>
        {children}
        </body>
    </html>
  )
}
