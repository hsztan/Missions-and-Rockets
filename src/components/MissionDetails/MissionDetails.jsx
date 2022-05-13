import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MissionDetails = () => {
  // const url = document.URL;
  // const missionId = url.split('/')[4];
  // missions/:mission_id
  // "/missions/:mission_id/:color"
  const { mission_id: missionId, color } = useParams();
  // console.log(useParams());
  // ya tenemos el id del misssion en la url
  // ahora tenemos que traer los datos del mission
  const mission = useSelector((state) => state.missions
    .find((mission) => mission.mission_id === missionId));

  return (
    <div className="mission-details">
      <h1>Mission Details</h1>
      <h2>{mission.mission_name}</h2>
      <h3>{color}</h3>
    </div>
  );
};

export default MissionDetails;
