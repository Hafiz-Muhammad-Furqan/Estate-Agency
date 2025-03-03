// import React from "react";
// import { X, ChevronLeft, ChevronRight, TrendingUp, Apple } from "lucide-react";
// import { Link } from "react-router-dom";

// const Signin = () => {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
//       {/* Background yellow shapes */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full border-[1px] border-yellow-300 -translate-x-1/4 -translate-y-1/4"></div>
//         <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#f9fbbd] rounded-full"></div>
//         <div className="absolute top-1/3 right-10 w-10 h-10 bg-[#f9fbbd] rounded-full"></div>
//         <div className="absolute bottom-1/3 left-0 w-32 h-32 bg-[#f9fbbd] rounded-full"></div>
//       </div>

//       {/* Main content */}
//       <div className="flex w-full max-w-6xl z-10">
//         {/* Left side with image and stats */}
//         <div className="hidden md:block md:w-1/2 p-4 relative">
//           {/* User card */}
//           {/* <div className="absolute top-20 right-10 bg-white rounded-lg shadow-md p-2 flex items-center gap-2 z-20">
//             <div className="w-8 h-8 rounded-full overflow-hidden">
//               <img
//                 src="/signup.png"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <p className="text-sm font-medium">AI bot Called Jerry</p>
//               <p className="text-xs text-gray-400">Class - 9:22 AM</p>
//             </div>
//           </div> */}

//           {/* Main image card */}
//           <div className="mt-32 relative">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="/signup.png"
//                 alt="People discussing over blueprints"
//                 className="w-full  object-cover"
//               />

//               {/* Calendar overlay */}
//               {/* <div className="absolute bottom-0 left-0 bg-white rounded-tr-lg shadow-lg">
//                 <div className="p-2">
//                   <div className="flex items-center justify-between mb-2">
//                     <p className="text-xs font-medium">June 2021</p>
//                     <div className="flex">
//                       <button className="p-1">
//                         <ChevronLeft size={14} />
//                       </button>
//                       <button className="p-1">
//                         <ChevronRight size={14} />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-7 gap-1 text-xs">
//                     <div className="text-center text-gray-400">SUN</div>
//                     <div className="text-center text-gray-400">MON</div>
//                     <div className="text-center text-gray-400">TUE</div>
//                     <div className="text-center text-gray-400">WED</div>
//                     <div className="text-center text-gray-400">THU</div>
//                     <div className="text-center text-gray-400">FRI</div>
//                     <div className="text-center text-gray-400">SAT</div>

//                     <div className="text-center py-1"></div>
//                     <div className="text-center py-1"></div>
//                     <div className="text-center py-1">1</div>
//                     <div className="text-center py-1">2</div>
//                     <div className="text-center py-1">3</div>
//                     <div className="text-center py-1">4</div>
//                     <div className="text-center py-1">5</div>

//                     <div className="text-center py-1">6</div>
//                     <div className="text-center py-1 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">
//                       7
//                     </div>
//                     <div className="text-center py-1">8</div>
//                     <div className="text-center py-1">9</div>
//                     <div className="text-center py-1">10</div>
//                     <div className="text-center py-1">11</div>
//                     <div className="text-center py-1">12</div>

//                     <div className="text-center py-1">13</div>
//                     <div className="text-center py-1">14</div>
//                     <div className="text-center py-1">15</div>
//                     <div className="text-center py-1">16</div>
//                     <div className="text-center py-1">17</div>
//                     <div className="text-center py-1">18</div>
//                     <div className="text-center py-1">19</div>
//                   </div>

//                   <div className="mt-2">
//                     <p className="text-xs">Time</p>
//                     <div className="flex items-center gap-1 mt-1">
//                       <div className="text-sm font-medium">09 : 41</div>
//                       <div className="flex text-xs">
//                         <button className="px-1 bg-gray-100 rounded">AM</button>
//                         <button className="px-1">PM</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}

//               {/* Stats overlay */}
//               {/* <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3">
//                 <p className="text-xs text-gray-500">Net Sales</p>
//                 <p className="text-xl font-bold">$19,7650</p>
//                 <div className="flex items-center justify-between mt-1">
//                   <div className="flex items-end h-16 gap-[2px]">
//                     {[1, 2, 3, 4, 5, 6, 7, 8].map((h, i) => (
//                       <div
//                         key={i}
//                         className="bg-blue-900 w-3 rounded-sm"
//                         style={{ height: `${h * 12.5}%` }}
//                       ></div>
//                     ))}
//                   </div>
//                   <div className="flex items-center text-green-600 font-medium text-sm">
//                     <span>32%</span>
//                     <TrendingUp size={16} />
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </div>

//           {/* Black dot */}
//           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full"></div>
//         </div>

//         {/* Right side with signup form */}
//         <div className="w-full md:w-1/2 p-4">
//           <div className="bg-white rounded-lg shadow-lg md:p-8 p-3 max-w-md mx-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-2xl font-bold">Sign in</h1>
//               <button className="text-gray-400">
//                 <X size={20} />
//               </button>
//             </div>

//             <form>
//               <div className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="Enter Email Address"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 />

//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 />

//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="staySignedIn"
//                       className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
//                     />
//                     <label
//                       htmlFor="staySignedIn"
//                       className="ml-2 text-sm text-gray-700"
//                     >
//                       Stay signed in
//                     </label>
//                   </div>

//                   <a href="#" className="text-sm text-gray-700">
//                     Forgot your password?
//                   </a>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
//                 >
//                   Sign in
//                 </button>

//                 <div className="text-center text-sm">
//                   <p>
//                     Don't have an account?{" "}
//                     <Link to="/signup" className="text-blue-600 font-medium">
//                       Sign Up
//                     </Link>
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-center">
//                   <div className="flex-1 h-px bg-gray-200"></div>
//                   <span className="px-4 text-sm text-gray-500">OR</span>
//                   <div className="flex-1 h-px bg-gray-200"></div>
//                 </div>

//                 <button
//                   type="button"
//                   className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     width="20"
//                     height="20"
//                   >
//                     <path
//                       fill="#4285F4"
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     />
//                     <path
//                       fill="#34A853"
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                     />
//                     <path
//                       fill="#FBBC05"
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     />
//                     <path
//                       fill="#EA4335"
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     />
//                   </svg>
//                   Continue with Google
//                 </button>

//                 <button
//                   type="button"
//                   className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     width="20"
//                     height="20"
//                     fill="#1877F2"
//                   >
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                   </svg>
//                   Continue with Facebook
//                 </button>

//                 <button
//                   type="button"
//                   className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
//                 >
//                   <Apple size={20} />
//                   Continue with Apple
//                 </button>
//               </div>
//             </form>

//             <div className="mt-6 text-center text-xs text-gray-500">
//               <p>
//                 By clicking Sign in, Continue with Google, Facebook, or Apple,
//                 you agree to Spectra{" "}
//                 <a href="#" className="underline">
//                   Terms of Use
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="underline">
//                   Privacy Policy
//                 </a>
//                 .
//               </p>
//               <p className="mt-2">
//                 Spectra may send you communications; you may change your
//                 preferences in your account settings.
//                 <br />
//                 We'll never post without your permission.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;

import React, { useState } from "react";
import { X, Apple } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Signin failed");

      // ✅ Save token in localStorage
      localStorage.setItem("token", data.token);

      // ✅ Redirect to dashboard after signin
      navigate("/leads");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full border-[1px] border-yellow-300 -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#f9fbbd] rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-10 h-10 bg-[#f9fbbd] rounded-full"></div>
        <div className="absolute bottom-1/3 left-0 w-32 h-32 bg-[#f9fbbd] rounded-full"></div>
      </div>

      <div className="flex w-full max-w-6xl z-10">
        <div className="hidden md:block md:w-1/2 p-4 relative">
          <div className="mt-32 relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/signup.png"
                alt="People discussing over blueprints"
                className="w-full  object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full"></div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg md:p-8 p-3 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Sign in</h1>
              <button className="text-gray-400">
                <X size={20} />
              </button>
            </div>

            {error && (
              <div className="mb-4 text-red-500 text-sm font-medium">
                {error}
              </div>
            )}
            <form onSubmit={handleSignin}>
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                />

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="staySignedIn"
                      className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                    />
                    <label
                      htmlFor="staySignedIn"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Stay signed in
                    </label>
                  </div>

                  <a href="#" className="text-sm text-gray-700">
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>

                <div className="text-center text-sm">
                  <p>
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 font-medium">
                      Sign Up
                    </Link>
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="px-4 text-sm text-gray-500">OR</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <button
                  type="button"
                  className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>

                <button
                  type="button"
                  className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Continue with Facebook
                </button>

                <button
                  type="button"
                  className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <Apple size={20} />
                  Continue with Apple
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-xs text-gray-500">
              <p>
                By clicking Sign in, Continue with Google, Facebook, or Apple,
                you agree to Spectra{" "}
                <a href="#" className="underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
              <p className="mt-2">
                Spectra may send you communications; you may change your
                preferences in your account settings.
                <br />
                We'll never post without your permission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
