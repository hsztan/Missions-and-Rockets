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

export default Rocket;