import Image from "next/legacy/image";
import Banana from '../assets/crop.png';
import HeroImage from '../assets/Her.png'
import css from '../styles/Hero.module.css'
import { IoIosCall } from "react-icons/io";


const Hero = () => {
  return (
    <div className={css.container}>

      {/* Left side */}
      <div className={css.left}>
          <div className={css.vegieDiv}>
            <span>Super fast delivery</span>
            <Image src={Banana}  alt="" width={35} height={35}/>
          </div>
      
        <div className={css.HeroText}>
          <span>We provide</span>
          <span>Delivery within</span>
          <span>
            <span style={{color:"green"}}>30 min</span>
          </span>
        </div>
        <span className={css.minitext}>
        Shop at our grocery store for the best quality produce. Enjoy same-day delivery straight to your doorstep
        </span>
        <button className={`btn ${css.btn}`}>
          Shop now
        </button>
      </div> 

      {/* Right side */}

      <div className={css.rightside}>
        <div className={css.Imagecontainer}>
          <Image src={HeroImage} alt="" layout="fill" />
        </div>
        <div className={css.contactUs}>
          <span>Call us</span>
          <div>
          <IoIosCall />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;