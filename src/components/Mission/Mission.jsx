import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    <tr className="mission">
      <td className="name"><Link to={`/missions/${id}/green`}>{name}</Link></td>
      <td className="description">{description}</td>
      <td className="status">
        <p className={join ? 'active' : ''}>
          {join ? 'Active Member' : 'NOT A MEMBER'}
        </p>
      </td>
      <td className="action">
        <button
          type="button"
          className={join ? 'btn active' : 'btn'}
          onClick={handleClick}
        >
          {join ? 'Leave Mission' : 'Join   Mission'}
        </button>
      </td>
    </tr>
  );
};

export default Mission;

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  join: PropTypes.bool.isRequired,
};
