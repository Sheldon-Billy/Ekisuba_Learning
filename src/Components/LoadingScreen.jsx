import { useState, useEffect } from 'react';
import TypingEffect from './TypingEffect';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [messagesCompleted, setMessagesCompleted] = useState(0);

    const messages = [
        "Let's Speak Ekisuba",
        "Thugambe Ekisuba"
    ];

    // Progress bar animation
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + (1 + Math.random() * 3);
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Handle completion when both conditions are met
    useEffect(() => {
        if (progress >= 100 && messagesCompleted >= 2) {
            const timeout = setTimeout(onComplete, 1000); // Additional 1s delay after both messages
            return () => clearTimeout(timeout);
        }
    }, [progress, messagesCompleted, onComplete]);

    // Cycle through messages
    const handleMessageComplete = () => {
        setMessagesCompleted(prev => prev + 1);
        setMessageIndex(prev => (prev + 1) % messages.length);
        setExpanded(false);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 p-4">
            {/* Glass-morphism container */}
            <div className={`
                relative
                flex flex-col gap-6 items-center justify-center
                p-8 rounded-2xl
                bg-white/5 backdrop-blur-lg border border-[#a6a6a6]
                transition-all duration-300
                ${expanded ? 'w-full max-w-2xl' : 'w-full max-w-[700px]'}
                shadow-xl
            `}>
                {/* Animated logo */}
                <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/30 border border-blue-300 animate-ping absolute"></div>
                        <span className="text-3xl font-bold text-white animate-bounce">S</span>
                    </div>
                </div>

                {/* Typing effect section */}
                <div className="text-center w-full">
                    <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ffffff] to-[#00ff00] text-transparent bg-clip-text ">
                        <TypingEffect
                            text={messages[messageIndex]}
                            speed={80}
                            onComplete={handleMessageComplete}
                        />
                    </div>
                    <p className="text-white mt-10 text-sm ">
                        {progress < 30 ? "Initializing systems..." :
                            progress < 70 ? "Loading components..." :
                                "Finalizing experience..."}
                    </p>
                </div>

                {/* Progress bar with shine effect */}
                <div className="w-full max-w-md">
                    <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        >

                        </div>
                    </div>
                    <div className="flex justify-between text-xs text-blue-200 mt-2">
                        <span>{Math.min(progress, 100).toFixed(0)}%</span>
                        <span className="font-medium">Almost ready...</span>
                    </div>
                </div>


            </div>

            {/* Subtle footer */}
            <div className="absolute bottom-4 text-blue-300 text-xs">
                Crafted with ❤️ for Suba
            </div>
        </div>
    );
};

export default LoadingScreen;