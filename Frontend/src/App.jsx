import Features from "./components/Features"
import Form from "./components/Form"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from "./routes/Auth"
import Dashboard from "./routes/Dashboard"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Hero />
              <Features />
              <Testimonials />
              <Pricing />
              <Footer />
              {/* <Form /> */}

            </>
          }
        />
        
      
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
