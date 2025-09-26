// pages/LoginSection.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Validation
  const validate = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email address";

    // Password validation (strong)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.trim()) newErrors.password = "Password is required";
    else if (!passwordRegex.test(password))
      newErrors.password =
        "Password must be min 8 chars, include uppercase, lowercase, number & special char";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token & role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);

        // Redirect based on role
        if (data.role === "reader") navigate("/dashboard/reader");
        else if (data.role === "reporter") navigate("/dashboard/reporter");
        else if (data.role === "media") navigate("/dashboard/media");
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      setMessage("Server error, please try again later.");
    }
  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24 mx-auto">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column image */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              alt="Phone illustration"
              className="w-full"
            />
          </div>

          {/* Right column form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer block w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-transparent focus:border-indigo-600 focus:ring focus:ring-indigo-300 focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-indigo-600 peer-focus:text-sm"
                >
                  Email address
                </label>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer block w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-transparent focus:border-indigo-600 focus:ring focus:ring-indigo-300 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-indigo-600 peer-focus:text-sm"
                >
                  Password
                </label>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember me + forgot password */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  to="#"
                  className="text-indigo-600 text-sm hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Server message */}
              {message && (
                <p className="mb-4 text-red-600 font-semibold">{message}</p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transition"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-400 text-sm">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Signup link */}
              <p className="text-sm text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-red-600 hover:text-red-700">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
