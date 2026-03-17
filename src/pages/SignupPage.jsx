import { useState } from "react";

function SignUp() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,password);
  }

  return (

    <div className="signup-page min-h-screen flex items-center justify-center bg-neutral-950 px-4">

      <div className="signup-card w-full max-w-md bg-white rounded-lg shadow-lg p-8">

        {/* Heading */}
        <div className="signup-header text-center mb-7">

          <h2 className="text-3xl font-semibold text-gray-900">
            Create Account
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Sign up to start using the platform
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="signup-form space-y-5">

          {/* Name */}
          <div className="signup-field">
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="signup-input w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="signup-field">
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="signup-input w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="signup-field">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="signup-input w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="signup-button w-full bg-red-600 text-white py-2.5 rounded-md font-medium hover:bg-red-700 transition"
          >
            Sign Up
          </button>

        </form>

        {/* Footer */}
        <p className="signup-footer text-center text-sm text-gray-600 mt-6">

          Already have an account?

          <a
            href="/signin"
            className="ml-1 text-red-600 font-semibold hover:underline"
          >
            Sign In
          </a>

        </p>

      </div>

    </div>

  );
}

export default SignUp;