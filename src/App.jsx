import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(color) {
    setColors([{ ...color, id: uid() }, ...colors]);
  }

  function handleDeleteColor(id) {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} onDeleteColor={handleDeleteColor} />
      ))}
    </>
  );
}

export default App;
