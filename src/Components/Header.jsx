import { FaLanguage } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-blue-800 text-white p-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <FaLanguage className="text-2xl" />
                    <h1 className="text-2xl font-bold">Suba Language Learning</h1>
                </div>
                <nav className="flex space-x-4">
                    <button className="px-4 py-2 hover:bg-blue-700 rounded-md transition">Home</button>
                    <button className="px-4 py-2 hover:bg-blue-700 rounded-md transition">Courses</button>
                    <button className="px-4 py-2 hover:bg-blue-700 rounded-md transition">About</button>
                    <button className="bg-white text-blue-800 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                        Sign In
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;