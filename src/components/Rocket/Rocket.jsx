import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, removeRocket } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const { id, name, image, reserve, description } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (reserve) {
      dispatch(removeRocket(id));
    } else {
      dispatch(reserveRocket(id));
    }
  }
  return (
    <li className="mission">
      <img src={image} />
      <h2>{name}</h2>
      <span className="mission-status">{reserve ? 'RESERVED' : ''}</span>
      <p>{description}</p>
      <button onClick={handleClick}>{reserve ? 'Reserve Rocket' : 'Cancel Reservetaion'}</button>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserve: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
