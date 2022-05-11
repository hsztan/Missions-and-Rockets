const rocketsEndpoint = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  try {
    const res = await fetch(rocketsEndpoint);
    const rockets = await res.json();
    if (res.ok) {
      return rockets;
    }
  } catch (error) {
    return error;
  }
  return false;
};

export default fetchRockets;
