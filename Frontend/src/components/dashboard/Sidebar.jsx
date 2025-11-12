import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Zap, User, LayoutDashboard, Menu, X } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigation = [
    {
      href: "/dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      
      <div className="sm:hidden flex items-center justify-between px-4 py-3 bg-black border-b border-gray-800 fixed top-0 left-0 w-full z-50">
        <div
          onClick={() => navigate("/dashboard")}
          className="flex items-center cursor-pointer"
        >
          <Zap className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold ml-2 text-white">ScaleApp</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      
      <nav
        className={`fixed top-0 left-0 h-full w-72 border-r border-gray-900 bg-black text-white transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          
          <div
            onClick={() => navigate("/dashboard")}
            className="h-20 flex items-center px-8 border-b border-gray-900 cursor-pointer hover:bg-gray-900 xs:hidden"
          >
            <Zap className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold ml-2">ScaleApp</span>
          </div>

          
          <div className="flex-1 flex flex-col overflow-auto">
            <ul className="mt-5 px-5 text-lg font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-x-2 text-gray-300 p-2 rounded-lg hover:bg-gray-800 hover:text-white active:bg-gray-700 duration-150"
                  >
                    <div className="text-gray-400">{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            
            <div className="py-4 px-4 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <User className="w-12 h-12 rounded-full border border-gray-800 p-2" />
                  <div>
                    <span className="block text-gray-200 text-sm font-semibold">
                      {user?.name || "Guest User"}
                    </span>
                    <button
                      onClick={() => console.log("View Profile")}
                      className="block mt-px text-gray-400 hover:text-purple-400 text-xs"
                    >
                      View profile
                    </button>
                  </div>
                </div>

                
                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-red-500 p-2"
                  title="Logout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 sm:hidden z-30"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
