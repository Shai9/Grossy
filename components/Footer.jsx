import { IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp, IoLogoTwitter} from 'react-icons/io5';
import css from '../styles/Footer.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';


const Footer = (Footer) => {
  return(
    <div className={css.container}>
      <span>ALL RIGHTS RESERVED</span>
      <div className={css.socials}>
        <IoLogoInstagram size={45}/>
        <IoLogoFacebook size={45}/>
        <IoLogoWhatsapp size={45}/>
        <IoLogoTwitter size={45}/>
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt='' width={80} height={80} />
        <span>GrocerGo</span>
      </div>
    </div>
  )
}

export default Footer;