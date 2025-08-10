import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import LoadingScreen from "./Components/LoadingScreen";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot";
import Testing from "./Components/Testing";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chatbot />} />
              <Route path="/testing" element={<Testing />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;