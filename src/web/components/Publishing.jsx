import Image from "next/image"
import siteImage9434 from "public/Images/Livre GROZA Theo Camus H/IMG_9434.jpg"
import siteImage9449 from "public/Images/Livre Carte Postales APUTI JYC/IMG_9449.jpg"

const catalog = () => {
  return (
    <div className="px-8 py-8 grid grid-cols justify-center sm:grid-col lg:grid-cols-2 xl:grid-cols-2 gap-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          src={siteImage9434}
          alt="Groza"
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
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
      </div>
      <div className=" h-[30rem] max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          src={siteImage9449}
          alt="APUTI"
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
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
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Empreintes&Digitales. All rights reserved.
      </p>
    </div>
  )
}

catalog.isPublic = true

export default catalog
