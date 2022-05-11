import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import Mission from '../Mission/Mission';
import './MissionsList.styles.scss';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="missions-list">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              join={mission.join}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsList;
