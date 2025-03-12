import './App.css'
import Navbar from './Componets/Navbar'

function App() {

  return (
    <div>
      <Navbar/>

      <section id="questions" style={{ height: '100vh', padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h2>Questions Section</h2>
      </section>
      
      <section id="contact" style={{ height: '100vh', padding: '50px', backgroundColor: '#ddd' }}>
        <h2>Contact Section</h2>
      </section>

      <section id="pricing" style={{ height: '100vh', padding: '50px', backgroundColor: '#ccc' }}>
        <h2>Pricing Section</h2>
      </section>
    </div>

  )
}

export default App;