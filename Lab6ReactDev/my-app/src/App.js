import Hello from './Hello';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import { useTheme, ThemeProvider } from './ThemeContext';
import LayoutEffectExample from './LayoutEffectExample';

function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme()
  return (
    <div style={{ background: dark ? "#333" : "#fff", color: dark ? "#fff" : "#000" }}>
      <button onClick={toggleTheme}>Przełącz motyw</button>
  </div>
  )
}

function App() {
  return (
    <div>
      <Hello />

      <ClickCounter />

      <PrimeCalculator />

      <FormReducer />

      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>

      <LayoutEffectExample />
    </div>
  );
}

export default App;
