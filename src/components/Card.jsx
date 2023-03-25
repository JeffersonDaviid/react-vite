import { BsHeart, BsHeartFill, BsPin, BsFingerprint } from 'react-icons/bs';
import '../styles/card.css';

const Card = (props) => {
   return (
      <div className='container-card'>
         <div className='container-card-title'>
            <b className='card-title'>{`${props.data.name.toUpperCase()}`}</b>
            <span className='card-points'>
               points: <b>{`${props.data.id}`}</b>
            </span>
         </div>
         <img src={`${props.data.image}`} alt='' className='img-api' />
         <div className='container-card-details'>
            <BsFingerprint className={`${props.data.status === 'Alive' ? 'icon-card-available' : 'icon-card-no-available'}`} />
            <span className='card-character-location'>
               Última ubicación conocida:
               <br />
               <b>{`${props.data.location.name}`}</b>
            </span>
            <br />
            <span className='card-character-first-seen'>
               Primera aparición en:
               <br />
               <b>{`${props.data.origin.name}`}</b>
            </span>
         </div>
         <span className='card-character-specie'>{`${props.data.species}`}</span>
         {/* <BsHeart className='icon-like-no-sfill' />
         <BsHeartFill className='icon-like-fill' /> */}
      </div>
   );
};

export default Card;
