import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from '../Rocket/Rocket';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <ul className="rockets-list">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.flickr_images[0]}
          name={rocket.rocket_name}
          description={rocket.description}
          reserve={rocket.reserve}
        />
      ))}
    </ul>
  );
};

export default RocketsList;
