import './App.css'
import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='register/' element={<Register/>}/>
          <Route path='login/' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
