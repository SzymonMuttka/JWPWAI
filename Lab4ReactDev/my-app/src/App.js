import HelloWithProps from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';

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
    </div>
  );
}

export default App;
