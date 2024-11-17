import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/src/assets/css/styles.css'
import Home from './components/Home'
import ContactUs from './components/ContactUs'


function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
