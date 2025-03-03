"use client"


import Link from "next/link"
import React, { useState } from "react"
import "./SideBar.scss"
import { logout } from "@/services/authService"
import Image from "next/image";
import { useRouter } from "next/navigation"; 



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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) 

  const router = useRouter()   // from next/navigation

  function handleLogout() {
    logout()
    router.push("/login")
  }

  return (

    <>

<button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰ Menu
      </button>

    <div className={`sidebar ${className || ""} ${isSidebarOpen ? "sidebar--active" : ""}`}>


      {/* User profile section */}


{user && (
  <>
    <div className="sidebar__divider" /> {/* Divider at the top */}
    <div className="sidebar__profile">
      {/* Profile Image */}
      <div className="sidebar__profile-image">
        <Image
          src="/userImage.png"
          alt="User Profile"
          width={50}
          height={50}
          className="sidebar__profile-img"
        />
      </div>

      {/* Profile Info */}
      <div className="sidebar__profile-info">
        <span className="sidebar__profile-name">{user.name}</span>
       
         < span  className="sidebar__profile-edit">Edit Profile</span>

      </div>
    </div>
    <div className="sidebar__divider" /> {/* Divider at the bottom */}
  </>
)}

      {/* Navigation items */}
      <div className="sidebar__nav">
        {items.map((item, index) => {
         
          return (
            <Link key={index} href={item.href} className="sidebar__nav-item">
            <div className="sidebar__nav-item-icon">
              <Image src="/icons/map.svg"   alt="Map Icon" width={24} height={24} />
            </div>
            <span className="sidebar__nav-item-title">{item.title}</span>
          </Link>
          )
        })}
      </div>

      {/* Logout section */}
      <div className="sidebar__logout">
  <div className="sidebar__divider" />
  <div onClick={handleLogout} className="sidebar__logout-link">
    <div className="sidebar__logout-link-icon">
      <Image
        src="/icons/logout.svg"
        alt="Logout Icon"
        width={24}
        height={24}
        className="sidebar__logout-img"
      />
    </div>
    <span className="sidebar__logout-link-text">Logout</span>
  </div>
</div>
    </div>
    </>
  )
}
