import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import RocketsPage from './pages/RocketsPage';
import MissionsPage from './pages/MissionsPage';
import MissionDetails from './components/MissionDetails/MissionDetails';
import ProfilePage from './pages/ProfilePage';
import './App.scss';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<RocketsPage />} />
      <Route exact path="/missions/:mission_id/" element={<MissionDetails />} />
      <Route exact path="/missions/:mission_id/:color" element={<MissionDetails />} />
      <Route exact path="/missions" element={<MissionsPage />} />
      <Route exact path="/profile" element={<ProfilePage />} />
    </Routes>
  </div>
);

export default App;
