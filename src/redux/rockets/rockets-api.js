const rocketsEndpoint = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = async () => {
  try {
    const res = await fetch(rocketsEndpoint);
    const rockets = await res.json();
    if (res.ok) {
      return rockets;
    }
  } catch (error) {
    return console.log(error.message);
  }
};
