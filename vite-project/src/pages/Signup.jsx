import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });

    // Real-time validation
    setErrors((prev) => ({ ...prev, [id]: "" }));
    setMessage("");
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required.";

    if (!formData.email) newErrors.email = "Email is required.";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email address.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";
    else if (!/[A-Z]/.test(formData.password))
      newErrors.password = "Password must contain 1 uppercase letter.";
    else if (!/[a-z]/.test(formData.password))
      newErrors.password = "Password must contain 1 lowercase letter.";
    else if (!/[0-9]/.test(formData.password))
      newErrors.password = "Password must contain 1 number.";
    else if (!/[!@#$%^&*]/.test(formData.password))
      newErrors.password =
        "Password must contain 1 special character (!@#$%^&*).";

    if (!formData.role) newErrors.role = "Role is required.";
    if (!formData.terms) newErrors.terms = "You must agree to the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Signup successful!");
        setErrors({}); // clear previous errors

        // Save token + role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);

        // Optional: redirect after 1-2s
        setTimeout(() => {
          if (data.role === "reader") navigate("/dashboard/reader");
          else if (data.role === "reporter") navigate("/dashboard/reporter");
          else if (data.role === "media") navigate("/dashboard/media");
        }, 1500);
      } else {
        setErrors({ server: data.message || "Something went wrong" });
      }
    } catch (err) {
      setErrors({ server: "Server error, please try again later." });
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left Side Image */}
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample"
            />
          </div>

          {/* Right Side Form */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="relative mb-6">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="peer block w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-transparent focus:border-indigo-600 focus:ring focus:ring-indigo-300 focus:outline-none"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-indigo-600 peer-focus:text-sm"
                >
                  Full Name
                </label>
                {errors.name && (
                  <p className="mt-1 text-red-600 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative mb-6">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="peer block w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-transparent focus:border-indigo-600 focus:ring focus:ring-indigo-300 focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-indigo-600 peer-focus:text-sm"
                >
                  Email address
                </label>
                {errors.email && (
                  <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative mb-6">
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="peer block w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-transparent focus:border-indigo-600 focus:ring focus:ring-indigo-300 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-indigo-600 peer-focus:text-sm"
                >
                  Password
                </label>
                {errors.password && (
                  <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
                )}
              </div>

              {/* Role */}
              <div className="relative mb-6">
                <select
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-300 focus:outline-none"
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="reader">Reader</option>
                  <option value="reporter">Reporter</option>
                  <option value="media">Media House</option>
                </select>
                {errors.role && (
                  <p className="mt-1 text-red-600 text-sm">{errors.role}</p>
                )}
              </div>

              {/* Terms */}
              <div className="mb-6 flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#!" className="text-indigo-600 hover:underline">
                  Terms and conditions
                </a>
              </div>
              {errors.terms && (
                <p className="mb-4 text-red-600 font-semibold">{errors.terms}</p>
              )}

              {/* Success / Server Messages */}
              {message && (
                <p className="mb-4 text-green-600 font-semibold">{message}</p>
              )}
              {errors.server && (
                <p className="mb-4 text-red-600 font-semibold">{errors.server}</p>
              )}

              {/* Register Button */}
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-indigo-600 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700"
                >
                  Register
                </button>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Have an account?{" "}
                  <Link to="/login" className="text-red-600 hover:text-red-700">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
