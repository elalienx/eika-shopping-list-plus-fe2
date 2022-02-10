// NPM packages
import { useState } from "react";

// Project files
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  // Local state
  const [list, setList] = useState([]);

  return (
    <div className="App">
      {list.length === 0 && <WelcomeScreen />}
      {list.length > 0 && <ShoppingScreen />}
    </div>
  );
}
