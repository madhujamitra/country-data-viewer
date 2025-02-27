"use client"

import type React from "react"
import "../ListItem/ListItem.scss"

interface ListItemProps {
  id: string
  title: string
  subtitle: string
  iconUrl?: string
}

export function ListItem({ id, title, subtitle, iconUrl }: ListItemProps) {
  return (
    <div key={id} className="list-item">
      {/* Icon (optional) */}
      <div className="list-item__icon">
        {iconUrl ? (
          <img src={iconUrl} alt={`${title} icon`} />
        ) : (
          <div className="placeholder"></div>
        )}
      </div>

      {/* Title */}
      <div className="list-item__title">{title}</div>

      {/* Subtitle */}
      <div className="list-item__subtitle">{subtitle}</div>
    </div>
  )
}
