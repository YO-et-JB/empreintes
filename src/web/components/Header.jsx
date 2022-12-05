import Link from "@/web/components/Link.jsx"
import Image from "next/image"
import { useAppContext } from "@/web/components/AppContext.jsx"
import { Fragment, useCallback } from "react"
import ActiveLink from "./ActiveLink.jsx"
import siteLogo from "../../../public/icons/logo.svg"
import siteFbLogo from "../../../public/icons/square-facebook.svg"
import siteInstaLogo from "../../../public/icons/instagram.svg"
import siteLiLogo from "../../../public/icons/linkedin.svg"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import {
  MagnifyingGlassIcon,
  Bars4Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid"

const Header = () => {
  const {
    setSession,
    state: { session },
  } = useAppContext()
  const logout = useCallback(() => setSession(null), [setSession])

  const user = {
    name: "Placeholder",
    email: "example@example.com",
  }
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Nouvelle publication", href: "/newly-published" },
    { name: "Catalogue", href: "/catalog" },
    { name: "Collaboration", href: "/collabs" },
    { name: "WIP", href: "/formtest" },
    { name: "WIP2", href: "/formtesttwo" },
  ]
  const userNavigation = [
    { name: "Paramètres", href: "/settings" },
    { name: "Sécurité", href: "/404" },
    { name: "Informations de paiement", href: "/404" },
    { name: "Centre de messagerie", href: "/404" },
  ]

  const social = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: siteLiLogo,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: siteInstaLogo,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: siteFbLogo,
    },
  ]

  return (
    <header className="sticky z-50 overflow-visible">
      <Disclosure
        as="div"
        className="relative justify-between  overflow-visible bg-white"
      >
        {({ open }) => (
          <>
            <nav
              className={classNames(
                open ? "bg-white" : "bg-transparent",
                "relative z-10 border-b border-gray-500 border-opacity-25 lg:border-none lg:bg-transparent"
              )}
            >
              <div>
                <div className=" relative mx-auto flex items-center justify-between px-2 sm:px-4 lg:border-b lg:border-slate-800 lg:px-8">
                  <Link href="/">
                    <Image
                      className="mx-auto h-20 w-auto"
                      src={siteLogo}
                      alt="Empreintes & Digitales Editions"
                    />
                  </Link>
                  <div className="flex grow justify-evenly px-2 lg:px-0">
                    <div className="hidden lg:ml-6 lg:block lg:space-x-4">
                      <div className="nav flex space-x-4">
                        {navigation.map((item) => (
                          <ActiveLink
                            activeClassName="active link-underline-active"
                            key={item.name}
                            href={item.href}
                          >
                            <p className="nav-link link link-underline link-underline-black h-full cursor-pointer items-center bg-gradient-to-r from-white to-slate-500 font-medium hover:font-bold active:font-extrabold">
                              {item.name}
                            </p>
                          </ActiveLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-self-end  px-2 lg:ml-6 lg:justify-end">
                    <div className="w-full max-w-lg lg:max-w-xs">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-slate-100  focus-within:text-gray-400">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 flex-shrink-0"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md  border border-slate-600 bg-slate-600  py-2 pl-10 pr-3 leading-5 placeholder-slate-100 duration-500 focus:border-black focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 justify-self-end px-2 lg:ml-6 lg:justify-end">
                      {social.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <span className="sr-only">{item.name}</span>
                          <Image
                            src={item.icon}
                            alt="SocialAppsIcons"
                            className="mx-auto h-10 w-auto"
                            aria-hidden="true"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  {session ? (
                    <>
                      <div className="flex lg:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6 flex-shrink-0"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars4Icon
                              className="block h-6 w-6 flex-shrink-0"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="hidden lg:ml-4 lg:block">
                        <div className="flex items-center">
                          {/* Profile dropdown */}
                          <Menu
                            as="div"
                            className="relative ml-4 flex-shrink-0"
                          >
                            <div>
                              <Menu.Button className="flex rounded-full text-sm text-white focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
                                <span className="sr-only">Open user menu</span>
                                <UserCircleIcon
                                  className="h-8 w-8 rounded-full bg-black"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block py-2 px-4 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                                {
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block cursor-pointer py-2 px-4 text-sm text-gray-700"
                                        )}
                                        onClick={logout}
                                      >
                                        Se déconnecter
                                      </a>
                                    )}
                                  </Menu.Item>
                                }
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <nav>
                        <ul className="nav flex h-full items-center space-x-4">
                          <li className="link link-underline link-underline-black cursor-pointer bg-gradient-to-r from-white to-slate-500 font-medium hover:font-bold active:font-extrabold">
                            <ActiveLink
                              href="/sign-up"
                              activeClassName="active link-underline-active"
                            >
                              <p className="nav-link">S'inscire</p>
                            </ActiveLink>
                          </li>
                          <li className="link link-underline link-underline-black cursor-pointer bg-gradient-to-r from-white to-slate-500 font-medium hover:font-bold active:font-extrabold">
                            <ActiveLink
                              href="/sign-in"
                              activeClassName="active link-underline-active"
                            >
                              <p className="nav-link">Se connecter</p>
                            </ActiveLink>
                          </li>
                        </ul>
                      </nav>
                    </>
                  )}
                </div>
              </div>
              <Disclosure.Panel className="bg-white lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black bg-opacity-25"
                          : "hover:bg-slate-800",
                        "block rounded-md py-2 px-3 text-base font-medium text-black hover:text-white"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-slate-800 pt-4 pb-3">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <UserCircleIcon
                        className="h-10 w-10 rounded-full"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-black">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-slate-500">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-black hover:bg-slate-800 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </nav>
          </>
        )}
      </Disclosure>
    </header>
  )
}

export default Header
