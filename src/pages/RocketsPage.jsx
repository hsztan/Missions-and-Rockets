import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rockets/rockets';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>{rocket.rocket_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsPage;
