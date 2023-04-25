import { BsHeart, BsHeartFill, BsPin, BsFingerprint } from 'react-icons/bs';
import '../styles/card.css';

const Card = (props) => {
   return (
      <div className='container-card'>
         <div className='container-card-title'>
            <BsFingerprint
               className={`${
                  props.data.status === 'Alive'
                     ? 'icon-card-available'
                     : 'icon-card-no-available'
               }`}
            />
            <b className='card-title'>{`${props.data.name.toUpperCase()}`}</b>
            <span className='card-points'>
               points: <b>{`${props.data.id}`}</b>
            </span>
            <BsHeartFill className='icon-like-fill' />
            {/* <BsHeart className='icon-like-no-sfill' /> */}
         </div>
         <div className='container-card-main'>
            <img src={`${props.data.image}`} alt='' className='img-card' />
            <div className='container-card-details'>
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
               <span className='card-character-specie'>{`${props.data.species}`}</span>
            </div>
         </div>
      </div>
   );
};

export default Card;
