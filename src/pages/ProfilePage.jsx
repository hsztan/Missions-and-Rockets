import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  const activeRockets = rockets.filter((rocket) => rocket.reserve);
  const activeMissions = missions.filter((mission) => mission.join);

  return (
    <div>
      <div className="missions">
        <h1>Missions</h1>
        <ul>
          {activeMissions.map((mission) => (
            <li key={mission.id}>
              <h2>{mission.mission_name}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets">
        <h1>Rockets</h1>
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

export default ProfilePage;
