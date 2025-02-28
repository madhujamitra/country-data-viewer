"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

import { login } from "@/services/authService" // <-- your mock login function
import { InputField } from "@/components/ui/Input/Input"
import { Button } from "@/components/ui/Button/Button"
import Image from "next/image"
import "../../styles/pages/Login.scss"

export default function Login() {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const success = login(username, password)
    if (success) {
      router.push("/countries")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="login-page">
      <div className="login-page__container">
        {/* Left Section */}
        <div className="login-page__left">
          <h1>Welcome Back!</h1>
          <p>Learn all about the countries of the world</p>

          {/* Social Login Buttons */}
          <div className="login-page__social-buttons">
            <Button
              variant="social"
              icon={
                <Image
                  src="/icons/googleSSO.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
              }
              fullWidth
            >
              Sign up with Google
            </Button>
            <Button
              variant="social"
              icon={
                <Image
                  src="/icons/MicrosoftSSO.svg"
                  alt="Microsoft"
                  width={20}
                  height={20}
                />
              }
              fullWidth
            >
              Sign up with Microsoft
            </Button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="login-page__input">
              <InputField
                type="email"
                label="Email Address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-page__input">
              <InputField
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <div className="login-page__button">
              <Button type="submit">Log In</Button>
            </div>

            {/* Error Message */}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>

          {/* Sign Up Link */}
          <div className="login-page__signup">
            Don’t have an account? <a href="/signup">Sign in</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-page__right">
          {/* Gradient background */}
          <div className="login-page__gradient">
            {/* Text content */}
            <div className="login-page__content">
              <h2 className="login-page__title">
                The simplest way to track and manage your geographical data
              </h2>
              <p className="login-page__description">
                Enter your credentials and access your account
              </p>
            </div>

            {/* Floating UI screenshots */}
            <div className="login-page__image login-page__image--first">
              <Image
                src="/Countries-List.png"
                alt="Countries List"
                fill
                style={{ objectFit: "contain" }}
                className="login-page__image-el"
              />
            </div>

            <div className="login-page__image login-page__image--second">
              <Image
                src="/Countries-List-1.png"
                alt="Countries List"
                fill
                style={{ objectFit: "contain" }}
                className="login-page__image-el"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
