import Page from "./pages/Page"
import { ThemeContextProvider } from "./context/ThemeContext"

function App() {


  return (
    <>
    <ThemeContextProvider>
        <Page/>
    </ThemeContextProvider>
    </>
  )
}

export default App
