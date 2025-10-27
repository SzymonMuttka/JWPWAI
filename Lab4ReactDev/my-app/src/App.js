import HelloWithProps from './Hello';
import Counter from './Counter';

function App(){
  return(
    <div>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />

      <Counter />
    </div>
  );
}

export default App;
