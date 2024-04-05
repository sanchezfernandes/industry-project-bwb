import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
