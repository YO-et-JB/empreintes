import { useAppContext } from "./AppContext"
import { useCallback, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
//import classNames from "classnames"
import Link from "@/web/components/Link.jsx"
import Image from "next/image"
import sitLogo from "public/icons/Logo empreintes@digitale.svg"
import sitArobase from "public/icons/social networks icons/at-solid.svg"
import sitFacebook from "public/icons/social networks icons/facebook.svg"
import sitLinkedIn from "public/icons/social networks icons/linkedin.svg"
import sitPhone from "public/icons/social networks icons/phone-flip-solid.svg"
import sitCart from "public/icons/social networks icons/cart-shopping-solid.svg"
import SearchBar from "./SearchBar"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggleMenu = useCallback(() => setMenuOpen((state) => !state), [])
  const {
    setSession,
    state: { session },
  } = useAppContext()
  const logout = useCallback(() => setSession(null), [setSession])

  return (
    <header className="flex gap-5">
      <h1 className="text-8xl font-bold px-4 py-4 w-1/3 md:w-auto">
        <Image
          src={sitLogo}
          alt="Empreintes & Digitales Editions"
          width={350}
          height={350}
          object-fit="fill"
        />
      </h1>
      <div className=" ">
        <nav>
          <ul className="flex h-full items-center px-4">
            {session ? (
              <>
                <li>
                  <Link
                    href="/settings"
                    className="font-bold p-4 hover:underline cursor-pointer"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <span
                    className="font-bold p-4 hover:underline cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/sign-up"
                    className="font-bold p-4 hover:underline"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-in"
                    className="font-bold p-4 hover:underline"
                  >
                    Sign in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <nav className="w-3/4 gap-4 justify-center md:w-1/2 mb-4">
          <ul className="md:flex flex-row justify-between">
            <SearchBar />
            <div className="w-7 flex flex-raw gap-4">
              <Image
                src={sitArobase}
                alt="arobase"
                layout="responsive"
                className=""
              />
              <Image
                src={sitFacebook}
                alt="facebook"
                layout="responsive"
                className=""
              />
              <Image
                src={sitLinkedIn}
                alt="linkedIn"
                layout="responsive"
                className=""
              />
              <Image
                src={sitPhone}
                alt="phone"
                layout="responsive"
                className=""
              />
              <Image
                src={sitCart}
                alt="phone"
                layout="responsive"
                className=""
              />
            </div>
          </ul>
        </nav>

        <nav className="flex self-auto font-bold">
          <button className="text-xl md:hidden p-4" onClick={handleToggleMenu}>
            <Bars3Icon className="w-9 h-9" />
          </button>
          <ul
            className={`fixed inset-0 bg-white ${
              menuOpen ? "" : "hidden"
            } md:visible md:static md:flex md:gap-4`}
          >
            <li className="md:hidden border-b text-right">
              <button onClick={handleToggleMenu} className="p-4">
                <XMarkIcon className="w-8 h-8" />
              </button>
            </li>
            <li className="border-b hover:underline md:border-0">
              <Link className="p-2 block hover:bg-slate-100" href="/">
                Page d'accueil
              </Link>
            </li>
            <li className="border-b hover:underline md:border-0">
              <Link className="p-2 block hover:bg-slate-100" href="/publishing">
                Nouvelles publications
              </Link>
            </li>
            <li className="border-b hover:underline md:border-0">
              <Link className="p-2 block hover:bg-slate-100" href="/catalog">
                Catalogue
              </Link>
            </li>
            <li className="border-b hover:underline md:border-0">
              <Link className="p-2 block hover:bg-slate-100" href="/camus">
                Jean-Yves CAMUS
              </Link>
            </li>
            <li className="border-b hover:underline md:border-0">
              <Link className="p-2 block hover:bg-slate-100" href="/sign-in">
                Sign-in
              </Link>
            </li>
            <li className="border-b hover:underline md:border-0">
              <Link className="p-2 block hover:bg-slate-100" href="/sign-up">
                Sign-up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
