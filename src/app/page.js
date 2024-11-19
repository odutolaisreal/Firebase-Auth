"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase"; // Import Firebase auth and Google provider

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In forms
  const router = useRouter(); // useRouter for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Basic validation
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in both fields.");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      if (isSignUp) {
        // Sign Up logic
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");

        // Redirect to dashboard after successful sign-up
        router.push("/dashboard");
        setEmail("");
        setPassword("");
        setConfirmPassword(""); // Clear confirm password field
      } else {
        // Sign In logic
        await signInWithEmailAndPassword(auth, email, password);
        alert("Signed in successfully!");

        // Redirect to dashboard after successful sign-in
        router.push("/dashboard");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(err.message);

      // Redirect to Not Found page if sign-in fails
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        router.push("/not-found");
      }
    }
  };

  // Google Sign-In (Sign In and Sign Up)
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);

      // Redirect to the dashboard after Google login
      router.push("/dashboard");
    } catch (err) {
      setError("Failed to sign in with Google.");
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {isSignUp ? "Sign Up" : "Sign In"} to Your Account
        </h2>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-blue-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200 mb-4"
        >
          Sign {isSignUp ? "Up" : "In"} with Google
        </button>

        {/* Form for email and password */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Email Input */}
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password Input (Only shown on Sign Up) */}
          {isSignUp && (
            <div>
              <label className="block text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle between Sign Up and Sign In */}
        <p className="mt-4 text-center text-sm text-gray-500">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <a
            href="#"
            onClick={() => setIsSignUp((prev) => !prev)}
            className="text-blue-500 hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
