import { Zap } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact us" className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-200">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <a href="#" className="text-2xl font-bold flex items-center gap-2">
                        <Zap className="h-8 w-8 text-purple-600" />
                        ScaleApp
                    </a>
                    <p className="mt-6 text-sm">
                        ScaleApp built with secure authentication and an interactive dashboard, powered by a robust backend for smooth API handling.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-500">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-500">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright {new Date().getFullYear()} &copy; Manjunadh Ganta @ScaleApp. All Right Reserved.
            </p>
        </footer>
    );
};