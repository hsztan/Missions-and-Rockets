import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import Mission from '../Mission/Mission';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <ul className="missions-list">
      {missions.map((mission) => (
        <Mission
          key={mission.mission_id}
          id={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
          join={mission.join}
        />
      ))}
    </ul>
  );
};

export default MissionsList;
