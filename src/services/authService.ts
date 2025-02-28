// src/services/authService.ts

// The localStorage key for our mock “auth” state
const AUTH_KEY = "isAuthenticated"

export function login(username: string, password: string): boolean {
  // This is the mock check – in a real app, you'd call your backend
  if (username === "admin@example.com" && password === "password123") {
    localStorage.setItem(AUTH_KEY, "true")
    return true
  }
  return false
}

export function logout() {
  localStorage.removeItem(AUTH_KEY)
}

export function isLoggedIn(): boolean {
  return localStorage.getItem(AUTH_KEY) === "true"
}
