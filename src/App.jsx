import { useState } from "react";
import "./index.css";
import LoadingScreen from "./Components/LoadingScreen";
import Home from "./Components/Home";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}>
        <Home />

      </div>
    </>
  );
}

export default App;
