import Page from "@/web/components/Page.jsx"
//import { useState } from "react"
import SlidingImages from "@/web/components/SlidingImages.jsx"
//import api from "@/web/services/api"

const index = () => {
  //const [SlidingImages, setSlidingImages] = useState([])

  /* useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await api.get("/slidingImages")

      setSlidingImages(result)
    })()
  }, [])*/

  return (
    <Page>
      <SlidingImages />
    </Page>
  )
}

index.isPublic = true

export default index
