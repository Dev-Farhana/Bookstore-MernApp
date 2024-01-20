import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/addbooks' element= {<AddBooks/> } />
        <Route  path='/books' element= {<Books/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
