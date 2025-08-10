import { useState } from 'react';
import { FaPlay, FaUserGraduate, FaRobot, FaVolumeUp, FaBook, FaLanguage, FaHeadphones, FaComments, FaChartLine } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const [playingAudio, setPlayingAudio] = useState(null);
    const navigate = useNavigate();

    // Sample data
    const courseLevels = [
        { level: 'Beginner', description: 'Basic greetings, numbers, and common phrases', progress: 0 },
        { level: 'Intermediate', description: 'Conversational Suba, grammar structures', progress: 0 },
        { level: 'Advanced', description: 'Complex sentences, cultural context', progress: 0 },
    ];

    const sampleWords = [
        { id: 1, suba: "igake/egake", english: "Hello", phonetic: "i-gaa-keh", audio: "hello.mp3" },
        { id: 2, suba: "Igaao", english: "Thank you", phonetic: "i-ga-aa-o", audio: "thanks.mp3" },
        { id: 3, suba: "Kurinde", english: "Goodbye", phonetic: "khu-ri-nde", audio: "goodbye.mp3" },
    ];

    const features = [
        { icon: <FaRobot size={24} />, title: "AI Conversations", description: "Practice real dialogues with our AI tutor that understands and responds in Suba" },
        { icon: <FaVolumeUp size={24} />, title: "Native Pronunciations", description: "Learn from authentic recordings by Suba language speakers" },
        { icon: <FaLanguage size={24} />, title: "Grammar Lessons", description: "Detailed explanations of Suba grammar rules and structures" },
        { icon: <FaHeadphones size={24} />, title: "Listening Exercises", description: "Improve comprehension with targeted listening practice" },
        { icon: <FaComments size={24} />, title: "Speaking Practice", description: "Record and compare your pronunciation to native speakers" },
        { icon: <FaChartLine size={24} />, title: "Progress Tracking", description: "Monitor your improvement with detailed analytics" },
    ];

    const playAudio = (audioFile) => {
        console.log("Playing audio:", audioFile);
        setPlayingAudio(audioFile);
        setTimeout(() => setPlayingAudio(null), 2000);
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">Preserve and Learn the Suba Language</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        An interactive platform combining AI technology with authentic Suba language recordings
                        to teach pronunciation, grammar, and conversation skills.
                    </p>

                    {/* ekisuba ai button */}
                    <div className="flex items-center justify-center m-3">
                        <NavLink to="/chat">
                            <button

                                className="relative bg-gradient-to-r border border-white from-blue-300 via-blue-800 to-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 ease-out shadow-md hover:shadow-lg flex items-center group hover:cursor-pointer"
                            >
                                <FaRobot className="mr-3 text-white size-6 group-hover:text-white group-hover:animate-bounce transition-colors duration-200" />
                                <span>Chat with Ekisuba AI</span>
                                <span className="absolute -inset-1 rounded-lg bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300 pointer-events-none"></span>
                            </button>
                        </NavLink>
                    </div>

                    <div className="flex justify-center gap-6">
                        <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-bold transition flex items-center hover:cursor-pointer hover:scale-110">
                            <FaUserGraduate className="mr-2" /> Start Learning
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-blue-800 transition flex items-center hover:cursor-pointer hover:scale-110">
                            <FaPlay className="mr-2" /> Watch Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Platform Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">How Our Platform Works</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                <div className="text-blue-700 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Experience Suba Learning</h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Pronunciation Demo */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                                <FaVolumeUp className="mr-3" /> Pronunciation Practice
                            </h3>

                            <div className="space-y-4">
                                {sampleWords.map((word) => (
                                    <div key={word.id} className="border border-blue-200 rounded-lg p-4 hover:bg-blue-50 transition">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-bold text-blue-900 text-lg">{word.suba}</p>
                                                <p className="text-gray-600 mb-1">{word.english}</p>
                                                <p className="text-sm text-gray-500 italic">{word.phonetic}</p>
                                            </div>
                                            <button
                                                onClick={() => playAudio(word.audio)}
                                                className={`p-3 rounded-full ${playingAudio === word.audio ?
                                                    'bg-blue-700 text-white animate-pulse' :
                                                    'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                                            >
                                                <FaPlay className="text-sm" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-800 mb-2">Pronunciation Tips</h4>
                                <p className="text-gray-700">
                                    Listen carefully to the native speaker recordings. Try to mimic the tone and rhythm.
                                    Our system will eventually allow you to record and compare your pronunciation.
                                </p>
                            </div>
                        </div>

                        {/* Video Demo Section */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                                <FaPlay className="mr-3" /> Ekisuba AI Demo
                            </h3>

                            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                                {/* Replace this div with your actual video component */}
                                <div className="text-white text-center p-4">
                                    <p className="text-lg mb-4">Video demonstration of Ekisuba AI in action</p>
                                    <p className="text-sm text-gray-300">(Replace with actual video component)</p>
                                </div>
                            </div>

                            <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-800 mb-2">How It Works</h4>
                                <p className="text-gray-700">
                                    Watch our AI tutor engage in natural Suba conversations, providing real-time feedback
                                    and culturally appropriate responses to help you learn effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Structure */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Learning Pathways</h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {courseLevels.map((course, index) => (
                            <div key={index} className="border border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                                <div className={`h-2 ${index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">{course.level}</h3>
                                    <p className="text-gray-700 mb-4">{course.description}</p>
                                    <button className="text-blue-700 font-medium hover:underline">
                                        View Curriculum →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-800 text-white">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Suba Language Journey?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join our community of learners and help preserve this important cultural heritage.
                    </p>
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-bold hover:bg-blue-100 transition">
                        Create Free Account
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;