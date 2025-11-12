// import React from "react";
// import { useLocation } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const initialState = location.pathname === "/register" ? "register" : "login";
//   const [state, setState] = React.useState(initialState);

//   const [data, setData] = React.useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (e) => {
//     setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//   e.preventDefault();

//   if (state === "register") {

//     axios
//       .post("http://localhost:3001/register", data)
//       .then((result) => {
//         console.log(result);
//         if (result.data === "Success") {
//             setState("login")
//           navigate("/login"); 
//         }
//       })
//       .catch((err) => console.log(err));
//   } else {
//     // LOGIN
//     axios
//       .post("http://localhost:3001/login", data)
//       .then((result) => {
//         console.log(result);
//         if (result.data === "Success") {
//           navigate("/dashboard"); 
//         } 
//       })
//       .catch((err) => console.log(err));
//   }
// };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
//       <form
//         id="auth"
//         onSubmit={handleSubmit}
//         className="w-full sm:w-[350px] text-center border border-zinc-800 rounded-2xl px-8 py-10 bg-zinc-900 shadow-lg"
//       >
//         <h1 className="text-white text-3xl font-medium">
//           {state === "login" ? "Login" : "Register"}
//         </h1>
//         <p className="text-zinc-400 text-sm mt-2 pb-6">
//           Please {state === "login" ? "sign in" : "sign up"} to continue
//         </p>

//         {state !== "login" && (
//           <div className="flex items-center w-full mt-4 bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-zinc-400"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 21a8 8 0 0 0-16 0" />
//               <circle cx="12" cy="7" r="4" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Name"
//               className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//               name="name"
//               value={data.name}
//               onChange={onChangeHandler}
//               required
//             />
//           </div>
//         )}

//         <div className="flex items-center w-full mt-4 bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-zinc-400"
//             viewBox="0 0 24 24"
//           >
//             <rect width="20" height="16" x="2" y="4" rx="2" />
//             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//           </svg>
//           <input
//             type="email"
//             placeholder="Email id"
//             className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//             name="email"
//             value={data.email}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <div className="flex items-center mt-4 w-full bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-zinc-400"
//             viewBox="0 0 24 24"
//           >
//             <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
//             <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//           </svg>
//           <input
//             type="password"
//             placeholder="Password"
//             className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//             name="password"
//             value={data.password}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <div className="mt-5 text-left">
//           <a className="text-sm text-indigo-400" href="#">
//             Forgot password?
//           </a>
//         </div>

//         <button
//           type="submit"
//           className="mt-4 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
//         >
//           {state === "login" ? "Login" : "Create Account"}
//         </button>

//         <p className="text-zinc-400 text-sm mt-3 mb-4">
//           {state === "login"
//             ? "Don't have an account? "
//             : "Already have an account? "}
//           <button
//             type="button"
//             className="text-indigo-400"
//             onClick={() =>
//               setState((prev) => (prev === "login" ? "register" : "login"))
//             }
//           >
//             {state === "login" ? "Register" : "Login"}
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Auth;


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Auth = () => {
//         const navigate = useNavigate();
//       const location = useLocation();
//       const initialState = location.pathname === "/register" ? "register" : "login";
//     const [state, setState] = React.useState(initialState);

//     const [data, setData] = React.useState({
//       name: "",
//       email: "",
//       password: "",
//     });

//     const onChangeHandler = (e) => {
//       setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleSubmit = (e) => {
//     e.preventDefault();

//     if (state === "register") {

//       axios
//         .post("http://localhost:3001/register", data)
//         .then((result) => {
//           console.log(result);
//           if (result.data === "Success") {
//               setState("login")
//             navigate("/login"); 
//           }
//         })
//         .catch((err) => console.log(err));
//     } else {
//       // LOGIN
//       axios
//         .post("http://localhost:3001/login", data)
//         .then((result) => {
//           console.log(result);
//           if (result.data === "Success") {
//             navigate("/dashboard"); 
//           } else {
//             alert(result.data);
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
//       <form
//         id="auth"
//         onSubmit={handleSubmit}
//         className="w-full sm:w-[350px] text-center border border-zinc-800 rounded-2xl px-8 py-10 bg-zinc-900 shadow-lg"
//       >
//         <h1 className="text-white text-3xl font-medium">
//           {state === "login" ? "Login" : "Register"}
//         </h1>
//         <p className="text-zinc-400 text-sm mt-2 pb-6">
//           Please {state === "login" ? "sign in" : "sign up"} to continue
//         </p>

//         {state !== "login" && (
//           <div className="flex items-center w-full mt-4 bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-zinc-400"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 21a8 8 0 0 0-16 0" />
//               <circle cx="12" cy="7" r="4" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Name"
//               className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//               name="name"
//               value={data.name}
//               onChange={onChangeHandler}
//               required
//             />
//           </div>
//         )}

//         <div className="flex items-center w-full mt-4 bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-zinc-400"
//             viewBox="0 0 24 24"
//           >
//             <rect width="20" height="16" x="2" y="4" rx="2" />
//             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//           </svg>
//           <input
//             type="email"
//             placeholder="Email id"
//             className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//             name="email"
//             value={data.email}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <div className="flex items-center mt-4 w-full bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-zinc-400"
//             viewBox="0 0 24 24"
//           >
//             <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
//             <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//           </svg>
//           <input
//             type="password"
//             placeholder="Password"
//             className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//             name="password"
//             value={data.password}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <div className="mt-5 text-left">
//           <a className="text-sm text-indigo-400" href="#">
//             Forgot password?
//           </a>
//         </div>

//         <button
//           type="submit"
//           className="mt-4 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
//         >
//           {state === "login" ? "Login" : "Create Account"}
//         </button>

//         <p className="text-zinc-400 text-sm mt-3 mb-4">
//           {state === "login"
//             ? "Don't have an account? "
//             : "Already have an account? "}
//           <button
//             type="button"
//             className="text-indigo-400"
//             onClick={() =>
//               setState((prev) => (prev === "login" ? "register" : "login"))
//             }
//           >
//             {state === "login" ? "Register" : "Login"}
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Auth;

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Auth = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialState = location.pathname === "/register" ? "register" : "login";
//   const [state, setState] = React.useState(initialState);

//   const [data, setData] = React.useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (e) => {
//     setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (state === "register") {
//         const result = await axios.post("http://localhost:3001/register", data);

//         if (result.data.message === "Success") {
//           alert("Registration successful! Please log in.");
//           setState("login");
//           navigate("/login");
//         } else {
//           alert(result.data.message);
//         }
//       } else {
//         const result = await axios.post("http://localhost:3001/login", data);

//         if (result.data.message === "Success") {
//           navigate("/dashboard");
//         } else {
//           alert(result.data.message);
//         }
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
//       <form
//         id="auth"
//         onSubmit={handleSubmit}
//         className="w-full sm:w-[350px] text-center border border-zinc-800 rounded-2xl px-8 py-10 bg-zinc-900 shadow-lg"
//       >
//         <h1 className="text-white text-3xl font-medium">
//           {state === "login" ? "Login" : "Register"}
//         </h1>
//         <p className="text-zinc-400 text-sm mt-2 pb-6">
//           Please {state === "login" ? "sign in" : "sign up"} to continue
//         </p>

//         {state !== "login" && (
//           <div className="flex items-center w-full mt-4 bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//             <input
//               type="text"
//               placeholder="Name"
//               className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//               name="name"
//               value={data.name}
//               onChange={onChangeHandler}
//               required
//             />
//           </div>
//         )}

//         <div className="flex items-center w-full mt-4 bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <input
//             type="email"
//             placeholder="Email"
//             className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//             name="email"
//             value={data.email}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <div className="flex items-center mt-4 w-full bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <input
//             type="password"
//             placeholder="Password"
//             className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
//             name="password"
//             value={data.password}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="mt-6 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
//         >
//           {state === "login" ? "Login" : "Create Account"}
//         </button>

//         <p className="text-zinc-400 text-sm mt-4">
//           {state === "login"
//             ? "Don't have an account? "
//             : "Already have an account? "}
//           <button
//             type="button"
//             className="text-indigo-400"
//             onClick={() =>
//               setState((prev) => (prev === "login" ? "register" : "login"))
//             }
//           >
//             {state === "login" ? "Register" : "Login"}
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Auth;



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = location.pathname === "/register" ? "register" : "login";
  const [state, setState] = React.useState(initialState);

  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url =
        state === "register"
          ? `${import.meta.env.VITE_BASE_URL}/register`
          : `${import.meta.env.VITE_BASE_URL}/login`;

      const result = await axios.post(url, data);

      if (result.data.message === "Success") {
        if (state === "register") {
          alert("Registration successful! Please log in.");
          setState("login");
          navigate("/login");
        } else {
          alert("Login successful!");
          navigate("/dashboard");
        }
      } else {
        alert(result.data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <form
        id="auth"
        onSubmit={handleSubmit}
        className="w-full sm:w-[350px] text-center border border-zinc-800 rounded-2xl px-8 py-10 bg-zinc-900 shadow-lg"
      >
        <h1 className="text-white text-3xl font-medium">
          {state === "login" ? "Login" : "Register"}
        </h1>
        <p className="text-zinc-400 text-sm mt-2 pb-6">
          Please {state === "login" ? "sign in" : "sign up"} to continue
        </p>

        {state !== "login" && (
          <div className="flex items-center w-full mt-4 bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-zinc-800 border border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-white placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
        >
          {state === "login" ? "Login" : "Create Account"}
        </button>

        <p className="text-zinc-400 text-sm mt-4">
          {state === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            type="button"
            className="text-indigo-400"
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
          >
            {state === "login" ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Auth;
