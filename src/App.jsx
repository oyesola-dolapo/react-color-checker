import "./App.css";
import { useState } from "react";
import ColorCard from "./components/ColorCard";

function App() {
  const [color, setColor] = useState("#fffff");
  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <main className={`h-screen`} style={{ backgroundColor: color }}>
      <nav className="bg-white shadow p-4">
        <h1
          className={`text-xl font-bold`}
          style={{ color: color === "#ffffff" ? "#000000" : color }}>
          Color Checker
        </h1>
      </nav>

      <div className={`flex items-center justify-center pt-48`}>
        <ColorCard currentColor={color} updateColor={updateColor} />
      </div>
    </main>
  );
}

export default App;
