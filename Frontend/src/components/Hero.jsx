import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-white text-sm">
      
      <div className="flex items-center mt-35 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2">
        <div className="size-2.5 bg-green-500 rounded-full" />
        <span>Book a live demo today</span>
      </div>

      
      <h1 className="text-center text-5xl leading-[68px] md:text-7xl md:leading-[70px] tracking-tight mt-4 font-bold max-w-2xl">
        Build & Scale Your <span className="text-purple-600"> Digital Presence</span>
      </h1>

      
      <p className="text-center text-base max-w-2xl mt-5">
        The complete platform for modern teams to create, manage, and scale their web applications with built-in authentication and powerful analytics.
      </p>

    
      <div className="flex items-center gap-4 mt-8">
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-indigo-700 text-white active:scale-95 rounded-lg px-7 h-11">
          Get started
          <ArrowRight size={20} />
        </button>
        <button className="border border-slate-400 active:scale-95 hover:bg-white/10 transition rounded-lg px-8 h-11">
          Book a demo
        </button>
      </div>

      <img
        src="hero-section.png"
        className="w-full rounded-[15px] max-w-7xl mt-16"
        alt="hero section showcase"
      />
    </section>
  );
};

export default Hero;
