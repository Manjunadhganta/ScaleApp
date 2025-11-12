import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import Auth from "../routes/Auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="z-50 fixed flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-white">

        <a href="#" className="text-2xl font-bold flex items-center gap-2">
          <Zap className="h-8 w-8 text-purple-600" />
          ScaleApp
        </a>


        <div className="hidden md:flex items-center gap-8 transition duration-500">
          {["Features", "Testimonials", "Pricing", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-slate-300 transition"
            >
              {item}
            </a>
          ))}
        </div>


        <div className="hidden md:block space-x-3">
          <button 
            className="px-6 py-2 bg-purple-600 hover:bg-indigo-700 transition text-white rounded-md"
            onClick={()=>navigate("/register")}
            >
            Get started
          </button>
          <button className="hover:bg-slate-300/20 transition px-6 py-2 border border-slate-400 rounded-md"
              onClick={()=>navigate("/login")}
          >
            Login
          </button>
        </div>


        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/*For Smaller Screen*/}
      <div
        className={`fixed inset-0 z-100 bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 text-white ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {["Products", "Resources", "Pricing"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
        <button
          onClick={() => setMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
        >
          <X size={24} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
