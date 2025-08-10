import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaArrowLeft, FaPaperPlane, FaUser, FaPlus, FaCog, FaLightbulb, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
    const [chatMessage, setChatMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { sender: 'ai', text: "Igake vuroothu,inchi no omugariria wao owa AI. N'kuthurie igake rero? (Hello! I am AI tutor. How can i help you today?)" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const navigate = useNavigate();
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);

    useEffect(() => {
        if (messagesContainerRef.current) {
            // Only scroll if we're near the bottom (within 100px) or if it's a new message from the AI
            const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
            const isNearBottom = scrollHeight - (scrollTop + clientHeight) < 100;

            if (isNearBottom || chatHistory[chatHistory.length - 1]?.sender === 'ai') {
                messagesContainerRef.current.scrollTo({
                    top: messagesContainerRef.current.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }, [chatHistory]);

    const handleSendMessage = () => {
        if (chatMessage.trim()) {
            const newUserMessage = { sender: 'user', text: chatMessage };
            setChatHistory([...chatHistory, newUserMessage]);
            setChatMessage('');

            setIsTyping(true);

            setTimeout(() => {
                const aiResponse = {
                    sender: 'ai',
                    text: 'Igaao! ichi na AI  yao. Kane oraagara kugie embere? (Thank you! am your AI. Would you like to continue?)'
                };
                setChatHistory(prev => [...prev, aiResponse]);
                setIsTyping(false);
            }, 1000);
        }
    };

    const quickPhrases = [
        "Erina riane ni Sheldon (My name is Sheldon)",
        "Erina riao ni iuwe (What is your name?)",
        "Igaao(Thank you)",
        "Kane wogonchiri okugia embere(Would you like to continue?)"
    ];

    return (
        <div className="flex h-[80vh]"> {/* Changed from h-screen to h-[80vh] */}

            {/* Left Sidebar */}
            <div className="w-64 bg-gradient-to-br from-blue-900 to to-blue-600 flex flex-col">
                {/* New Chat Button */}
                <button className="flex items-center justify-center space-x-2 m-4 p-3 bg-gradient-to-r from-blue-300 via-blue-500 to to-blue-300 text-white rounded-lg hover:from-blue-500  hover:via-blue-300 hover:to-blue-500 border border-white transition hover:cursor-pointer">
                    <FaPlus className="text-sm" />
                    <span>New Chat</span>
                </button>

                {/* Quick Actions */}
                <div className="px-4 py-2 border-b text-white  border-gray-200">
                    <h3 className="text-sm font-semibold  uppercase tracking-wider mb-2">Quick Actions</h3>
                    <button className="flex items-center space-x-2 w-full p-2 text-left hover:text-gray-700 hover:bg-blue-50 rounded hover:cursor-pointer">
                        <FaComments className="text-blue-300" />
                        <span>Common Phrases</span>
                    </button>
                    <button className="flex items-center space-x-2 w-full p-2 text-left hover:text-gray-700 hover:bg-blue-50 hover:cursor-pointer rounded">
                        <FaLightbulb className="text-blue-300" />
                        <span>Brainstorm</span>
                    </button>
                </div>

                {/* Quick Sentences */}
                <div className="px-4 py-2 border-b border-gray-200 flex-1">
                    <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">Quick Sentences</h3>
                    <div className="space-y-2">
                        {quickPhrases.map((phrase, index) => (
                            <button
                                key={index}
                                onClick={() => setChatMessage(phrase.split(' ')[0])}
                                className="w-full p-2 text-left text-sm text-blue-200  rounded-xl bg-gradient-to-r from-blue-800 to-blue-400 border border-gray-200"
                            >
                                {phrase}
                            </button>
                        ))}
                    </div>
                </div>

                {/* User Profile */}
                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <FaUser className="text-blue-600 text-sm" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-white">User Profile</p>
                            <p className="text-xs text-[#00ff00]">Free Plan</p>
                        </div>
                        <button className="text-white">
                            <FaCog />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800 border-b border-gray-200 p-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center text-white hover:text-[#b6ff77] transition hover:underline"
                    >
                        <FaArrowLeft className="mr-2" />
                        <span>Back to Home</span>
                    </button>
                    <div className="flex items-center">
                        <FaRobot className="text-white text-2xl mr-2" />
                        <h2 className="text-xl font-bold">Ekisuba AI Tutor</h2>
                    </div>
                    <div className="w-6"></div> {/* Spacer for balance */}
                </div>

                {/* Messages Container */}
                <div
                    ref={messagesContainerRef}
                    className="flex-1 overflow-y-auto p-4 bg-gray-100"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    <div className="max-w-3xl mx-auto space-y-4">
                        {chatHistory.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex max-w-xs md:max-w-md lg:max-w-lg ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-blue-600 ml-3' : 'bg-blue-100 mr-3'} border border-gray-200`}>
                                        {msg.sender === 'user' ? (
                                            <FaUser className="text-white text-sm" />
                                        ) : (
                                            <FaRobot className="text-blue-600 text-sm bg-blue-200" />
                                        )}
                                    </div>
                                    <div
                                        className={`px-4 py-3 rounded-xl ${msg.sender === 'user' ?
                                            'bg-blue-500 text-white border-blue-700 rounded-tr-none' :
                                            'bg-white border-gray-300 rounded-tl-none'}`}
                                    >
                                        <p className="text-sm md:text-base">{msg.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="flex max-w-xs md:max-w-md lg:max-w-lg">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full mr-3 flex items-center justify-center border border-black">
                                        <FaRobot className="text-blue-600 text-sm" />
                                    </div>
                                    <div className="px-4 py-3 rounded-xl bg-white border border-gray-300 rounded-tl-none">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input Area */}
                <div className="bg-white border-t border-gray-300 p-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={chatMessage}
                                onChange={(e) => setChatMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="flex-1 border border-gray-500 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!chatMessage.trim()}
                                className={`absolute right-2 w-10 h-10 rounded-full flex items-center justify-center ${chatMessage.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-500 text-gray-400 cursor-not-allowed'} transition-colors border border-gray-300`}
                            >
                                <FaPaperPlane className=" text-white" />
                            </button>
                        </div>
                        <div className="mt-2 text-xs text-gray-500 text-center">
                            <p>Try saying: "Amachi" (Hello) or "Orio" (Goodbye)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;