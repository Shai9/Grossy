import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png';
import { BiCartAlt } from 'react-icons/bi'

export default (Header) => {
  return(
    <div className="css.header">

      {/* Logo side */}

      <div className='css.logo'>
        <Image src={Logo} alt='' width={50} height={50} />
        <span>GrocerGo</span>
      </div>

      {/* Menu */}

      <div className='css.menu'>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Cart side */}
      
      <div className='css.cartside'>
        <div className='css.cart'>
          <BiCartAlt />
        </div>
      </div>
    </div>
  )
}