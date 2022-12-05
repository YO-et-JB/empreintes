import Link from "@/web/components/Link.jsx"
import Image from "next/image"
import siteFbLogo from "../../../public/icons/square-facebook.svg"
import siteInstaLogo from "../../../public/icons/instagram.svg"
import siteLiLogo from "../../../public/icons/linkedin.svg"

const Footer = () => {
  const navigation = {
    main: [
      { name: "À propos", href: "/about" },
      { name: "Nous contacter", href: "/contact-us" },
      { name: "Mentions légals", href: "/legal-notice" },
      { name: "Politique de confidentialité", href: "/privacy-policy" },
      { name: "Politique de cookies (UE)", href: "/cookies-policy" },
    ],
    social: [
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
    ],
  }

  return (
    <footer className="border-t border-slate-700 bg-white">
      <div className="mx-auto flex max-w-7xl justify-center overflow-hidden py-4">
        <nav className="-mx-5 -my-2 flex flex-wrap" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="flex items-center space-x-6">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="sr-only">{item.name}</span>
                <Image
                  src={item.icon}
                  alt="SocialAppsIcons"
                  className="mx-auto h-5 w-auto"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
