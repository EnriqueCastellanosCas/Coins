import { Layout } from "./components/Layout"
import { BrowserRouter } from "react-router"
import { AutorProvider } from "./context/AutorProvider"
import { FavoritesProvider } from '../context/FavoritesProvider';

function App() {
  return (
    <>
      <AutorProvider>
        <BrowserRouter>
          <Layout></Layout> 
        </BrowserRouter>
      </AutorProvider>
    </>
  )
}

export default App
