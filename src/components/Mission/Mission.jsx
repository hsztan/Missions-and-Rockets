import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/user/user';

const Mission = (props) => {
  const { name, description, id } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const isBooked = user.missions.includes(id);
  console.log('is Booked?', isBooked);

  const handleClick = () => {
    if (isBooked) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  return (
    <li className="mission">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="mission-status">NOT A MEMBER</p>
      <button onClick={handleClick} type="button" className="mission-btn">
        {isBooked ? 'Leave' : 'Join'}
      </button>
    </li>
  );
};

export default Mission;

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
