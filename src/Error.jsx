import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
    <div className='error-404'>
      <h2>Cette page est Introuvable</h2>
      <h1><span>404</span></h1>
      <br /><br />
      <Link to='/'>Cliquez ici pour vous rendre a la page d'acceuil</Link>
    </div>
    
    </>
  )
}
