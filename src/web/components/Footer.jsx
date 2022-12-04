import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-gray-200 flex flex-col m-auto p-0 font-bold">
      <footer className="flex ">
        <ul className="flex justify-center md:w-screen">
          <li className="border-b hover:underline md:border-0">
            <Link className="p-4 block hover:bg-slate-100" href="contact">
              Contact
            </Link>
          </li>
          <li className="border-b hover:underline md:border-0">
            <Link className="p-4 block hover:bg-slate-100" href="terms">
              Mentions légales
            </Link>
          </li>
          <li className="border-b hover:underline md:border-0">
            <Link className="p-4 block hover:bg-slate-100" href="policy">
              Politique de confidentialité
            </Link>
          </li>
          <li className="border-b hover:underline md:border-0">
            <Link className="p-4 block hover:bg-slate-100" href="cookies">
              Politique des cookies (UE)
            </Link>
          </li>
          <li className="border-b hover:underline md:border-0">
            <Link className="p-4 block hover:bg-slate-100" href="prices">
              Nos prix
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
