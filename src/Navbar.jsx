import React, { useContext } from 'react'
import './CSS/Navbar.css';
import { UserContext } from './userContext';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';

export default function Navbar() {

  const navigate = useNavigate()

  const {toggleModals} = useContext(UserContext)

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch {
      alert("Pour une raison quelconque, nous ne pouvons pas nous déconnecter, verifiez votre connexion internet et ressayer .")
    }
  }

  return (
    <nav className='navbar-primary'>
      <Link to='/' className='logo-link'>
        <h1 >Dev Forum</h1>
      </Link>
      <div className='button'>
        <Link to='/Inscription'>
        <button onClick={() => toggleModals("signUp")} className="signUp">
          Sign Up
        </button>
        </Link>
        <Link to='/'>
        <button onClick={() => toggleModals('signIn')} className="signIn">
          Sign In
        </button>
        </Link>
        <button onClick={logOut} className="logOut">
          Log Out
        </button>
      </div>
    </nav>
  )
}
