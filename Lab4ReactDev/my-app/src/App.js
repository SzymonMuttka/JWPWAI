import HelloWithProps from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';

function App(){
  return(
    <div>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />

      <Counter />

      <InputTracker />
    </div>
  );
}

export default App;
