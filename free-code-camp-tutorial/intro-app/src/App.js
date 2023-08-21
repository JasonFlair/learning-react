import './App.css'
import logo from './logo192.png'

export function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <img className='nav-logo' src={logo} alt='react logo'/>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export function List () {
  return(
    <>
    <h1>reasons to learn react</h1>
    <ol>
      <li>It is a popular and amazing library</li>
      <li>It makes development of your frontend more efficient</li>
    </ol>
    </>

  )
}

export function Footer () {
  return (
    <footer className='footer'>
      <small>Jason Flair. All rights reserved</small>
    </footer>
  )
}


