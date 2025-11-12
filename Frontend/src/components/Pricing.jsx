export default function Pricing() {
    return (
        <section id="pricing" className="scroll-mt-16 bg-black text-white py-16">
            <p class="text-center text-xl font-medium text-purple-400 px-10 py-1.5 rounded-full bg-purple-950 border border-purple-800 w-max mx-auto">Pricing</p>
            <h3 class="text-3xl font-semibold text-center mx-auto mt-6">Our Pricing Plans</h3>
            <p class="text-sm text-slate-500 text-center mt-4 max-w-lg mx-auto">Flexible pricing options designed to meet your needs — whether you're just getting started or scaling up.</p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
    
                <div className="w-72 bg-gray-900 border border-gray-700 rounded-2xl text-center p-6 pb-10 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-indigo-500/10">
                    <p className="text-indigo-400 font-semibold mb-2">Starter</p>
                    <h1 className="text-3xl font-semibold text-white">
                        $19<span className="text-gray-400 text-sm font-normal">/month</span>
                    </h1>
                    <ul className="list-none text-gray-400 text-sm mt-6 space-y-2 text-left">
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            Access to core features
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            10GB secure storage
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            Email support
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            Community access
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="bg-indigo-500 w-full py-2 mt-8 rounded-md text-white font-medium hover:bg-indigo-600 transition-all"
                    >
                        Get Started
                    </button>
                </div>

                
                <div className="w-72 bg-linear-to-b from-indigo-600 to-indigo-800 relative rounded-2xl text-center p-6 pb-12 shadow-xl shadow-indigo-500/30 hover:-translate-y-2 transition-all duration-300">
                    <p className="absolute px-3 py-1 border border-white-400 bg-indigo-400 text-xs rounded-full -top-3 left-1/3">
                        Most Popular
                    </p>
                    <p className="font-semibold mb-2">Pro</p>
                    <h1 className="text-3xl font-semibold text-white">
                        $59<span className="text-indigo-200 text-sm font-normal">/month</span>
                    </h1>
                    <ul className="list-none text-indigo-100 text-sm mt-6 space-y-2 text-left">
                        <li className="flex items-center gap-2">
                            <span className="text-white">✔</span> 
                            All Starter features
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-white">✔</span> 
                            1TB secure cloud storage
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-white">✔</span> 
                            Priority support
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-white">✔</span> 
                            Team collaboration tools
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-white">✔</span> 
                            Analytics dashboard
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="bg-white w-full py-2 mt-8 rounded-md text-indigo-600 font-semibold hover:bg-gray-100 transition-all"
                    >
                        Upgrade Now
                    </button>
                </div>

                
                <div className="w-72 bg-gray-900 border border-gray-700 rounded-2xl text-center p-6 pb-10 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-indigo-500/10">
                    <p className="text-indigo-400 font-semibold mb-2">Enterprise</p>
                    <h1 className="text-3xl font-semibold text-white">
                        $129<span className="text-gray-400 text-sm font-normal">/month</span>
                    </h1>
                    <ul className="list-none text-gray-400 text-sm mt-6 space-y-2 text-left">
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            Unlimited cloud storage
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            Dedicated support engineer
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            API integration & automation
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            Advanced security & reports
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span> 
                            Onboarding & training
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="bg-indigo-500 w-full py-2 mt-8 rounded-md text-white font-medium hover:bg-indigo-600 transition-all"
                    >
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}
