import Image from "next/image"
import { Carousel } from "flowbite-react"
import sliderImageOne from "public/Images/images page d'accueil/La Grave Tunnel.jpg"
import sliderImageTwo from "public/Images/images page d'accueil/Mont Blanc.jpg"
import sliderImageThree from "public/Images/images page d'accueil/Touffes Lautaret.jpg"
import sliderImageFour from "public/Images/images page d'accueil/Virages neiges Brouillard NB.jpg"

const SlidingImages = () => {
  return (
    <div className="h-[30rem] p-0 m-auto md:px-4">
      <Carousel slideInterval={5000} indicators={false} className="p-0 m-auto">
        <Image
          src={sliderImageOne}
          alt="La Grave Tunnel"
          placeholder="blur"
          layout="responsive"
          width={500}
          height={500}
        />
        <Image
          src={sliderImageTwo}
          alt="Mont Blanc"
          placeholder="blur"
          layout="responsive"
          width={500}
          height={500}
        />
        <Image
          src={sliderImageThree}
          alt="Touffes Lautaret"
          placeholder="blur"
          layout="responsive"
          width={500}
          height={500}
        />
        <Image
          src={sliderImageFour}
          alt="Virages neiges Brouillard NB"
          placeholder="blur"
          layout="responsive"
          width={500}
          height={500}
        />
      </Carousel>
    </div>
  )
}

export default SlidingImages
