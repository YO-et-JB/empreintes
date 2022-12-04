import Image from "next/image"
import siteImage9455 from "public/Images/Livre Carte Postale Daniel Denise Sold Out/IMG_9455.jpg"

const catalog = () => {
  return (
    <div className="p-10 grid grid-cols sm:grid-col lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <Image
        src={siteImage9455}
        alt="La carte postale contemporaine"
        placeholder="blur"
        layout="responsive"
        width={100}
        height={100}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          La carte postale contemporaine
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Auteur
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Prix
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Acheter
        </span>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Empreintes&Digitales. All rights reserved.
      </p>
    </div>
  )
}

catalog.isPublic = true

export default catalog
