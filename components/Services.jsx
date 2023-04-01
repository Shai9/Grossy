import css from '../styles/Services.module.css'
import Image from 'next/legacy/image';
import Se1 from '../assets/se1.png'
import Se2 from '../assets/se2.png'
import Se3 from '../assets/se3.png'



const Services = () => {
  return (
    <>
    <div className={css.heading}>
      <span>WHAT WE OFFER</span>
      <span>Your favorite veggie</span>
      <span>Delivery partner</span>
    </div>
    {/* services */}
    <div className={css.services}>
      <div className={css.feature}>
        <div className={css.imagewrapper}>
          <Image src={Se1} alt="" objectFit='cover' layout='intrinsic'/>
        </div>
        <span>Easy to Order</span>
        <span>Only a few steps to place an order</span>
      </div>
      <div className={css.feature}>
        <div className={css.imagewrapper}>
          <Image src={Se2} alt="" objectFit='cover' layout='intrinsic'/>
        </div>
        <span>Hassle-free Delivery</span>
        <span>From our door to yours</span>
      </div>
      <div className={css.feature}>
        <div className={css.imagewrapper}>
          <Image src={Se3} alt="" objectFit='cover' layout='intrinsic'/>
        </div>
        <span>Farm-to-table Goodies</span>
        <span>We don't compromise on quality, and neither should you</span>
      </div>
      
    </div>
    </>
  )
}

export default Services;