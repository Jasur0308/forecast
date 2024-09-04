import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import './App.css'
import Map from './components/map/Map'
import Indicators from './components/indicators/Indicators'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div data-theme={theme} className={theme === "dark" ? "bg-gray-900" : "bg-gray-200"}>
      <Header/>
      <Banner/>
      <Map/>
      <Indicators/>
    </div>
  )
}

export default App