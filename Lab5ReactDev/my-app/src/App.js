import Hello from './Hello';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './Tasklist';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App(){
  return(
    <div>
      <Hello />
      
      <ToggleDetails />

      <ScoreDisplay score={0}/>
      <ScoreDisplay score={60}/>
      <ScoreDisplay score={120}/>
    
      <TaskList />

      <UserList />

      <TimerCounter />
    </div>
  );
}

export default App;
