import React from 'react'
import logo from '../images/littlelemon_footer_logo.svg'
import facebook from '../images/facebook-white.png'
import instagram from '../images/instagram-white.png'
import twitter from '../images/twitter-white.png'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt='little lemon' />
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div>
          <h3>Import Links</h3>
          <ul>
            <li><a href=''></a>Home</li>
            <li><a href=''></a>About</li>
            <li><a href=''></a>Menu</li>
            <li><a href=''></a>Reservation</li>
            <li><a href=''></a>Order Online</li>
            <li><a href=''></a>Login</li>
          </ul>
        </div>

        <div>
          <h3>Contacts</h3>
          <ul>
            <li>Adress: <br/> 123 Towncity, USA</li>
            <li>Phone: <br/> ++ 0123 456 789</li>
            <li>Email: <br/> little@lemon.com</li>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul className='social-icons'>
            <li><a href=''><img src={facebook} alt='facebook'/></a></li>
            <li><a href=''><img src={instagram} alt='instagram'/></a></li>
            <li><a href=''><img src={twitter} alt='twitter'/></a></li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer