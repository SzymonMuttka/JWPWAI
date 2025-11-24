import Hello from './Hello';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './Tasklist';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import HandleClick from './HandleClick';
import HandleMouseOver from './HandleMouseOver';
import ShowImage from './ShowImage';
import LoadDataFromJson from './LoadDataFromJson';
import UploadFile from './UploadFile';
import ChangeStyle from './ChangeStyle';

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

      <HandleClick />

      <HandleMouseOver />

      <ShowImage />

      <LoadDataFromJson />

      <UploadFile />

      <ChangeStyle />
    </div>
  );
}

export default App;
