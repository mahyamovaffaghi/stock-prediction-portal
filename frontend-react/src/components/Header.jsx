import { Link , useNavigate } from 'react-router-dom'
import  Button  from '../components/Button'
import {useContext} from 'react'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggedIn ,setLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setLoggedIn(false)
    navigate('/login')
    
  }
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light fw-bold' to="/">Stock Prediction Portal</Link>
            <div>
                {isLoggedIn ? (
                  <>
                  <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                  <button className='btn btn-info' url="/dashboard">Dashboard</button>

                  </>
                ):(
                  <>
                    <Button text="Login" class="btn-outline-info" url="/login"/>
                  &nbsp
                  <Button text="Register" class="btn-info" url="/register"/>
                  </>
                )}
            </div>
        </nav>
    </>
  )
}

export default Header