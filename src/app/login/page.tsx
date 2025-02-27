"use client"

import { InputField } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";
import "../../styles/pages/Login.scss";
import Image from "next/image"


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
          <Button variant="social" icon={<Image src="/icons/googleSSO.svg" alt="Google" width={20} height={20} />} fullWidth>
                Sign up with Google
              </Button>
              <Button
                variant="social"
                icon={<Image src="/icons/MicrosoftSSO.svg" alt="Microsoft" width={20} height={20} />}
                fullWidth
              >
                Sign up with Microsoft
              </Button>
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
  );
}