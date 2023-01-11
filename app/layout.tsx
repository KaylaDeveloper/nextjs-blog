import Image from "next/image"
import Link from "next/link"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image src="/logo.png" alt="" width={40} height={40} className="mx-auto"/>
        <Link href="/">
           <h1 className="text-3xl text-white text-bold">Kayla's Blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to my tech blog.</p>
        <br />
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
        <br />
        <h3>Developed by Kayla.</h3>
      </div>
    </footer>
  )
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
        {header}
        {children}
        {footer}
        </div>
      </body>
    </html>
  )
}
