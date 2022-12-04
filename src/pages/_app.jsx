import "@/web/styles/globals.css"
import { AppContextProvider } from "@/web/components/AppContext.jsx"

const App = ({ Component: PageComponent, pageProps, ...otherProps }) => {
  return (
    <AppContextProvider isPublicPage={PageComponent.isPublic}>
      <PageComponent {...pageProps} {...otherProps} />
    </AppContextProvider>
  )
}

export default App
