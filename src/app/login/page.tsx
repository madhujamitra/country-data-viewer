"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/services/authService" 
import { InputField } from "@/components/ui/Input/Input"
import { Button } from "@/components/ui/Button/Button"
import Image from "next/image"
import "../../styles/pages/Login.scss"
import { LOGIN_TEXT, IMAGES } from "@/constants/constants"

export default function Login() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(username, password)
      if (success) {
        router.push("/countries")
      } else {
        setError(LOGIN_TEXT.errorInvalid)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-page__container">
        {/* Left Section */}
        <div className="login-page__left">
          <div className="login-page__left-container">
            <h1>{LOGIN_TEXT.welcome}</h1>
            <span>{LOGIN_TEXT.subtext}</span>

            {/* Social Login Buttons */}
            <div className="login-page__social-buttons">
              <Button
                variant="social"
                icon={
                  <Image
                    src={IMAGES.googleIcon}
                    alt="Google"
                    width={20}
                    height={20}
                  />
                }
                fullWidth
              >
                {LOGIN_TEXT.social.google}
              </Button>
              <Button
                variant="social"
                icon={
                  <Image
                    src={IMAGES.microsoftIcon}
                    alt="Microsoft"
                    width={20}
                    height={20}
                  />
                }
                fullWidth
              >
                {LOGIN_TEXT.social.microsoft}
              </Button>
            </div>

            <div className="login-page__divider"></div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="login-page__form">
              <div className="login-page__input">
                <InputField
                  type="email"
                  label={LOGIN_TEXT.form.emailLabel}
                  required
                  value={username}
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="login-page__input">
                <InputField
                  type="password"
                  label={LOGIN_TEXT.form.passwordLabel}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Login Button */}
              <div className="login-page__button">
                <Button type="submit" fullWidth disabled={isLoading}>
                  {isLoading ? LOGIN_TEXT.form.loggingIn : LOGIN_TEXT.form.loginButton}
                </Button>
              </div>

              {/* Error Message */}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>

            {/* Sign Up Link */}
            <div className="login-page__signup">
              {LOGIN_TEXT.signup}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-page__right">
          <div className="login-page__gradient">
            <div className="login-page__content">
              <h2 className="login-page__title">
                {LOGIN_TEXT.gradient.title}
              </h2>
              <p className="login-page__description">
                {LOGIN_TEXT.gradient.description}
              </p>
            </div>

            <div className="login-page__image-container">
              <div className="login-page__image login-page__image--first">
                <Image
                  src={IMAGES.countryList}
                  alt="Countries List"
                  fill
                  style={{ objectFit: "contain" }}
                  className="login-page__image-el"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="login-page__image login-page__image--second">
                <Image
                  src={IMAGES.countryList1}
                  alt="Countries List"
                  fill
                  style={{ objectFit: "contain" }}
                  className="login-page__image-el"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}