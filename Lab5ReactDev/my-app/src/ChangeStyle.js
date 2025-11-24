import { useState, useEffect } from "react";

function ChangeStyle(){
  const [theme, setTheme] = useState({
    darkMode: false,
    light: { background: "white", color: "black" },
    dark: { background: "black", color: "white" }
  });

  useEffect(() => {
    const mode = theme.darkMode ? theme.dark : theme.light;
    document.body.style.backgroundColor = mode.background;
    document.body.style.color = mode.color;
  }, [theme]);

  return(
    <button onClick={() => setTheme(prev => ({ ...prev, darkMode: !prev.darkMode }))}>
      {theme.darkMode ? "Tryb jasny" : "Tryb ciemny"}
    </button>
  );
}

export default ChangeStyle;