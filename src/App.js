import { Routes, Route, Switch } from 'react-router-dom';
import './App.scss';
import RocketsPage from './pages/RocketsPage';
import MissionsPage from './pages/MissionsPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Switch>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Switch>
      </Routes>
      <RocketsPage />
      <MissionsPage />
      <ProfilePage />
    </div>
  );
};

export default App;
