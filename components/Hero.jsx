import Image from "next/image";
import Banana from '../assets/crop.png';
import css from '../styles/Hero.module.css'

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
            <span style={{color:"green"}}>30 minutes</span>
          </span>
        </div>
      </div> 

      {/* Right side */}

      <div className={css.rightside}>
        1
      </div>
    </div>
  )
}

export default Hero;