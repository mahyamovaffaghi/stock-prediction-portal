import  Button  from '../components/Button'
import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a className='navbar-brand text-light fw-bold'>Stock Prediction Portal</a>
            <div>
                <Button text="Login" class="btn-outline-info"/>
                &nbsp
                <Button text="Register" class="btn-info"/>
            </div>
        </nav>
    </>
  )
}

export default Header