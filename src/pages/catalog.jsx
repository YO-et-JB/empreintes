import Page from "@/web/components/Page.jsx"
import Catalog from "@/web/components/Catalog.jsx"

const catalog = () => {
  return (
    <Page>
      <Catalog />
    </Page>
  )
}

catalog.isPublic = true

export default catalog
