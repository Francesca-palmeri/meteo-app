import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import MeteoNavbar from "./components/MeteoNavbar.jsx"
import CitySelect from "./components/CitySelect.jsx"

//import CitiesCards from "./components/CitiesCards.jsx"

function App() {
  return (
    <>
      <MeteoNavbar />
      <CitySelect />
    </>
  )
}

export default App
