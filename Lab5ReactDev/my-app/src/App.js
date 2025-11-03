import Hello from './Hello';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './Tasklist';
import UserList from './UserList';

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
    </div>
  );
}

export default App;
