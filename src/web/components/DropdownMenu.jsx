import { Fragment } from "react"
import { Menu } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/20/solid"

const links = [
  { href: "../@pages/publishingPage.jsx", label: "Nouvelles publications" },
  { href: "../@pages/catalogPage.jsx", label: "Catalogue" },
  { href: "../@pages/camusPage.jsx", label: "Jean-Yves CAMUS" },
]

const DropdownMenu = () => {
  return (
    <Menu>
      <Menu.Button>
        <Bars3Icon className="w-8 h-8" />
      </Menu.Button>
      <Menu.Items>
        {links.map((link) => (
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
export default DropdownMenu
