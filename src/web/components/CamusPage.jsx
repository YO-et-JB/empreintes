import Image from "next/image"
import siteImage9441 from "public/Images/Livre William R regards From L/IMG_9441.jpg"
import siteImage9427 from "public/Images/Livre François Laxalt Zenbazuru/IMG_9427.jpg"
import siteImage9416 from "public/Images/Livre Fabrice Friaisse Silence de soi/IMG_9416.jpg"
import Link from "next/link"

const CamusPage = () => {
  return (
    <div className="p-8 grid grid-cols justify-center sm:grid-col lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div>
        <Link className=" overflow-hidden shadow-lg" href="#">
          <Image
            src={siteImage9441}
            width={350}
            height={350}
            alt="Regards from L"
            className="rounded-lg"
          />
          <div className="text-xl mb-2">
            Jean-Yves Camus: photographe & auteur
          </div>
        </Link>
      </div>
      <div>
        <Link className="rounded overflow-hidden shadow-lg" href="#">
          <Image
            src={siteImage9427}
            width={350}
            height={350}
            alt="Zenbazuru"
            className="rounded-lg"
          />
          <div className="text-xl">Empreintes&Digitales Editions</div>
        </Link>
      </div>

      <div>
        <Link href="#" className="rounded overflow-hidden shadow-lg">
          <Image
            src={siteImage9416}
            width={350}
            height={350}
            alt="Silence de soi"
            className="rounded-lg"
          />
          <div className="text-xl mb-2">Association LIBrE</div>
        </Link>
      </div>
    </div>
  )
}

export default CamusPage
