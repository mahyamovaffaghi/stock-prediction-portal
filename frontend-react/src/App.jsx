import './App.css'
import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/dashboard/dashboard'
import Register from './components/Register'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import AuthProvider from './AuthProvider'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='register/' element={<PublicRoute><Register/></PublicRoute>}/>
            <Route path='login/' element={<PublicRoute><Login/></PublicRoute>}/>
            <Route path='dashboard/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
