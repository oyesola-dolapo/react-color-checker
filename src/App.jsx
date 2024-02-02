import "./App.css";
import { useState } from "react";
import ColorCard from "./components/ColorCard";

function App() {
  const [color, setColor] = useState("#fffff");
  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <main className={`h-screen relative`} style={{ backgroundColor: color }}>
      <nav className="bg-white w-full shadow-lg p-4 fixed top-0 left-0">
        <h1
          className={`text-xl font-bold`}
          style={{ color: color === "#ffffff" ? "#000000" : color }}>
          Color Checker
        </h1>
      </nav>

      <div className={`flex items-center justify-center h-full`}>
        <ColorCard currentColor={color} updateColor={updateColor} />
      </div>
    </main>
  );
}

export default App;
