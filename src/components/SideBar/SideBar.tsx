"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"
import "./sidebar.scss" // <-- Import the SCSS file

type SidebarProps = {
  className?: string
  user?: {
    name: string
    image?: string
    initials?: string
  }
  items?: {
    title: string
    href: string
    icon: React.ReactNode
  }[]
}

export function Sidebar({ className, user, items = [] }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={`sidebar ${className || ""}`}>
      {/* User profile section */}
      {user && (
        <>
          <div className="sidebar__profile">
            {/* If you need an avatar, place it here, e.g.:
                <img src={user.image} alt={user.name} className="sidebar__avatar" /> */}
            <div className="sidebar__profile-info">
              <span className="sidebar__profile-name">{user.name}</span>
              <Link href="/profile/edit" className="sidebar__profile-edit">
                Edit Profile
              </Link>
            </div>
          </div>
          <div className="sidebar__divider" />
        </>
      )}

      {/* Navigation items */}
      <div className="sidebar__nav">
        {items.map((item, index) => {
          const isActive = pathname === item.href ? "sidebar__nav-item--active" : ""
          return (
            <Link
              key={index}
              href={item.href}
              className={`sidebar__nav-item ${isActive}`}
            >
              <div className="sidebar__nav-item-icon">
                {item.icon}
              </div>
              <span className="sidebar__nav-item-title">
                {item.title}
              </span>
            </Link>
          )
        })}
      </div>

      {/* Logout section */}
      <div className="sidebar__logout">
        <div className="sidebar__divider" />
        <Link href="/logout" className="sidebar__logout-link">
          <div className="sidebar__logout-link-icon">
            <LogOut className="lucide-logout-icon" />
          </div>
          <span className="sidebar__logout-link-text">Logout</span>
        </Link>
      </div>
    </div>
  )
}
