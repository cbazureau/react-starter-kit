import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <header>
      <div className="logo" />
      <div className="secure">
        <p><span className="icon-user" /> <span className="secure-text">Steve Jobs</span></p>
      </div>
    </header>
  )
}
