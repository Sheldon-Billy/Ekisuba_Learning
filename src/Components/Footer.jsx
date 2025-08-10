import { FaLanguage } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <FaLanguage className="mr-2" /> Suba Learning
                        </h3>
                        <p className="text-blue-200">
                            Dedicated to preserving and teaching the Suba language through innovative technology.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Learn</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-blue-200 hover:text-white transition">Courses</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition">Vocabulary</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition">Grammar</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">About</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-blue-200 hover:text-white transition">Our Mission</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition">The Suba Language</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition">Team</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-blue-200 hover:text-white transition">Contact Us</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition">Community</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition">Donate</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-blue-800 pt-8 text-center text-blue-300">
                    <p>© {new Date().getFullYear()} Suba Language Learning Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;