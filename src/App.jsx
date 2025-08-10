import { useState, useEffect } from "react";
import "./index.css";
import LoadingScreen from "./Components/LoadingScreen";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  // Reset loading state on page refresh
  useEffect(() => {
    // Clear any persisted state (optional)
    setIsLoaded(false);
  }, []);

  return (
    <>
      {!isLoaded && (
        <LoadingScreen
          onComplete={() => {
            setIsLoaded(true);
            sessionStorage.setItem('isLoaded', 'true');
          }}
        />
      )}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {isLoaded && (
          <>
            <Header />
            <Home />
            <Footer />
          </>
        )
        }
      </div>
    </>
  );
}

export default App;