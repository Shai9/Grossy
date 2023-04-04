import css from '../styles/Menu.module.css';
import { urlFor } from '../lib/client';
import Link from 'next/link';
import Image from "next/legacy/image";


const Menu = ({vegies}) => {
  
  return (
  
      <div className={css.container}>
        <div className={css.heading}>
          <span>OUR VEGGIES</span>
          <span>Veggies That Elevate Your</span>
          <span>Meals With Goodness Of Nature</span>
        </div>

      <div className={css.menu}>
        {vegies.map((vegie,id)=>  {

          const src = urlFor(vegie.image).url()
          return(
            <div className={css.vegie}>
              
              <Link href={`./pizza/${vegie.slug.current}`}>
              <div className={css.Image}>
                
                <Image loader = {() => src } src={src} alt="" objectFit="cover" layout="fill" />
              </div>
              </Link>
              <span>{vegie.name}</span>
              <span><span style={{color: 'green'}}>Ksh</span> {vegie.price[1]}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Menu;