const missionsEndpoint = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = async () => {
  try {
    const res = await fetch(missionsEndpoint);
    const missions = await res.json();
    if (res.ok) {
      return missions;
    }
  } catch (error) {
    return error;
  }
  return false;
};

export default fetchMissions;
