import Page from "@/web/components/Page.jsx"
import CamusPage from "@/web/components/CamusPage.jsx"

const camus = () => {
  return (
    <Page>
      <CamusPage />
    </Page>
  )
}

camus.isPublic = true

export default camus
