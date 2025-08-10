import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 80, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPausing, setIsPausing] = useState(false);

    useEffect(() => {
        let timeout;

        if (isPausing) {
            // Pause before backspacing (500ms pause)
            timeout = setTimeout(() => {
                setIsPausing(false);
                setIsDeleting(true);
            }, 1200);
        }
        else if (!isDeleting) {
            // Typing forward
            if (displayText.length < text.length) {
                timeout = setTimeout(() => {
                    setDisplayText(text.slice(0, displayText.length + 1));
                }, speed);
            } else {
                setIsPausing(true); // Set pause before deleting
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, speed / 2); // Backspace faster
            } else {
                setIsDeleting(false);
                if (onComplete) onComplete(); // Cycle to next message
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, isPausing, text, speed, onComplete]);

    return (
        <>
            {displayText}
            <span className={`animate-pulse text-blue-300 ${isPausing ? 'opacity-100' : 'opacity-100'}`}>|</span>
        </>
    );
};

export default TypingEffect;