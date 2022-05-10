import PropTypes from 'prop-types'; 

const Rocket = (props) => {
  const { image, name, description } = props;
  return (
    <li className="mission">
      <img src={image} />
      <h2>{name}</h2>
      <p>{description}</p>
    </li>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
