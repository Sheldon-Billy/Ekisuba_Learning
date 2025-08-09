import { useState, useEffect } from "react";
import TypingEffect from "./TypingEffect";

const LoadingScreen = ({ onComplete }) => {
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        if (typingComplete) {
            const timeout = setTimeout(() => {
                onComplete(); // Call the onComplete function to hide the loading screen
            }, 2000); // 2-second delay

            return () => clearTimeout(timeout); // Cleanup
        }
    }, [typingComplete, onComplete]);

    return (
        // Container

        <div className="flex flex-col gap-4 items-center justify-center h-screen">

            {/* loading text */}
            <div className="sm:text-[20px] md:text-[30px] font-extrabold bg-gradient-to-r from-[#2a78e4] via-white to-[blue] text-transparent bg-clip-text">
                <TypingEffect
                    text="Hi, Happy to visit my portfolio..."
                    onTypingComplete={() => setTypingComplete(true)} // Notify when typing is done
                />

                <span className="animate-blink text-blue-500 ">|</span>
            </div>
            {/* progress bar */}
            <div className="w-[350px] h-[2px] bg-gray-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-500 shadow-[0_0_15px_blue] h-full w-[30%] animate-loading-bar "></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
