import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const {
    id,
    name,
    description,
    join,
  } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (join) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  return (
    <li className="mission">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="mission-status">
        {join ? 'Active Member' : 'NOT A MEMBER'}
      </p>
      <button onClick={handleClick} type="button" className="mission-btn">
        {join ? 'Leave' : 'Join'}
      </button>
    </li>
  );
};

export default Mission;

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  join: PropTypes.bool.isRequired,
};
