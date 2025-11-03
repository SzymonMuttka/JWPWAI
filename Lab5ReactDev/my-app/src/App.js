import Hello from './Hello';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';

function App(){
  return(
    <div>
      <Hello />
      
      <ToggleDetails />

      <ScoreDisplay score={0}/>
      <ScoreDisplay score={60}/>
      <ScoreDisplay score={120}/>
    </div>
  );
}

export default App;
