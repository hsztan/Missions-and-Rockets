import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, removeRocket } from '../../redux/rockets/rockets';
import './Rocket.css';

const Rocket = (props) => {
  const {
    id,
    name,
    image,
    reserve,
    description,
  } = props;
  const dispatch = useDispatch();
  const reserveSpan = document.getElementById(id);
  const rocketButton = document.getElementById(id);

  const handleClick = () => {
    if (reserve) {
      dispatch(removeRocket(id));
      reserveSpan.classList.toggle('reserved');
    } else {
      dispatch(reserveRocket(id));
      reserveSpan.classList.toggle('reserved');
    }
  };

  return (
    <>
      <ul className="container">
        <li className="rocket">
          <img className="thumbnail" src={image} alt={name} />
          <div className="infoContainer">
            <h2 className="rocketName">{name}</h2>
            <span className="" id={id}>{reserve ? 'RESERVED' : ''}</span>
            <span className="rocketInfo">{description}</span>
            <div>
              <button type="button" className={reserve ? 'rocketButton-active' : 'rocketButton'} onClick={handleClick}>{reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserve: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
