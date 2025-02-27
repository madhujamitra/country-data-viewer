"use client"

import { InputField } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import "../../styles/pages/Login.scss";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-page__container">
        {/* Left Section */}
        <div className="login-page__left">
          <h1>Welcome Back!</h1>
          <p>Learn all about the countries of the world</p>

          {/* Social Login Buttons */}
          <div className="login-page__social-buttons">
            <Button>Sign up with Google</Button>
            <Button>Sign up with Microsoft</Button>
          </div>

          {/* Login Form */}
          <div className="login-page__input">
            <InputField type="email" label="Email Address" />
          </div>
          <div className="login-page__input">
            <InputField type="password" label="Password" />
          </div>

          {/* Login Button */}
          <div className="login-page__button">
            <Button>Log In</Button>
          </div>

          {/* Sign Up Link */}
          <div className="login-page__signup">
            Don’t have an account? <a href="/signup">Sign in</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-page__right">
          <div className="login-page__right-container">
            <h2>The simplest way to track and manage your geographical data</h2>
            <p>Enter your credentials and access your account</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}