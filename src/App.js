import './App.scss';
import { RocketsPage } from './pages/Rockets>';
import { fetchMissions } from './redux/missions/missions-api';

function App() {
  const printMissions = async () => {
    const missions = await fetchMissions();
    console.log(missions);
  };
  printMissions();
  return (
    <div className="App">
      <h1>Hola</h1>
      <RocketsPage />
    </div>
  );
}

export default App;
