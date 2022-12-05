import Image from "next/image"
import { Carousel } from "flowbite-react"
import sliderImageOne from "public/images/La Grave Tunnel.jpg"
import sliderImageTwo from "public/images/Mont Blanc.jpg"
import sliderImageThree from "public/images/Touffes Lautaret.jpg"
import sliderImageFour from "public/images/Virages neiges Brouillard NB.jpg"

const FlowbiteCarousel = () => {
  return (
    <div className="flex h-full flex-col">
      <Carousel
        slideInterval={5000}
        indicators={false}
        leftControl=" "
        rightControl=" "
      >
        <Image src={sliderImageOne} alt="La Grave Tunnel" placeholder="blur" />
        <Image src={sliderImageTwo} alt="Mont Blanc" placeholder="blur" />
        <Image
          src={sliderImageThree}
          alt="Touffes Lautaret"
          placeholder="blur"
        />
        <Image
          src={sliderImageFour}
          alt="Virages neiges Brouillard NB"
          placeholder="blur"
        />
      </Carousel>
    </div>
  )
}

export default FlowbiteCarousel
