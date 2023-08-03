import './App.css';
import PokeTeam from './PokeTeam'
import PokeEnemyTeam from './PokeEnemyTeam';
import tachyons from 'tachyons';

function App() {
  return (
    <div className="App">
      <PokeTeam />
      <button>Randomizer</button>
      <PokeEnemyTeam />
    </div>
  );
}

export default App;
