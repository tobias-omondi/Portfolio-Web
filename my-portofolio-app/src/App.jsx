import './App.css'
import Contact from './Componets/ContactPage/Contact';
import MainComponets from './Componets/MainPage/MainComponets';
import Navbar from './Componets/Navbar'
import Services from './Componets/ServicesPage/Services';

function App() {

  return (
    <div>
      <Navbar/>
      <MainComponets/>
      <Services/>
      <Contact/>
    </div>

  )
}

export default App;