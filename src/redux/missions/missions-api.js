const missionsEndpoint = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = async () => {
  try {
    const res = await fetch(missionsEndpoint);
    const rockets = await res.json();
    if (res.ok) {
      return rockets;
    }
  } catch (error) {
    return console.log(error.message);
  }
};
