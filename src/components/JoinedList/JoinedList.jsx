import { useSelector } from 'react-redux';
import './JoinedList.styles.scss';

const JoinedList = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  const activeRockets = rockets.filter((rocket) => rocket.reserve);
  const activeMissions = missions.filter((mission) => mission.join);

  return (
    <div className="joined">
      <div className="missions">
        <h1>My Missions</h1>
        <ul>
          {activeMissions.map((mission) => (
            <li key={mission.mission_id}>
              <h2>{mission.mission_name}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        <ul>
          {activeRockets.map((rocket) => (
            <li key={rocket.id}>
              <h2>{rocket.rocket_name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JoinedList;
