import './App.css'
import MainComponets from './Componets/MainPage/MainComponets';
import Navbar from './Componets/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <MainComponets/>
      <section id="services" style={{ height: '100vh', padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h2>Services Section</h2>
      </section>
      
      <section id="contact" style={{ height: '100vh', padding: '50px', backgroundColor: '#ddd' }}>
        <h2>Contact Section</h2>
      </section>
    </div>

  )
}

export default App;