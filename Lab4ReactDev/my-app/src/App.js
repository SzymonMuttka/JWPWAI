import HelloWithProps from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';

function App(){
  return(
    <div>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />

      <Counter />

      <InputTracker />
      
      <LoginStatus isLoggedIn={false}/>
      <LoginStatus isLoggedIn={true}/>

      <TodoList todos={['test1', 'test2', 'test3']}/>
    </div>
  );
}

export default App;
