import PropTypes from 'prop-types';

const Mission = (props) => {
  const { name, description } = props;
  return (
    <li className="mission">
      <h2>{name}</h2>
      <p>{description}</p>
    </li>
  );
};

export default Mission;

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
