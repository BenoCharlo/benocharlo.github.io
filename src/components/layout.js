import React from "react"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div
      className="container"
      style={{ margin: `2rem auto`, maxWidth: 850, padding: `0 1rem` }}
    >
      <Header />
      {children}
    </div>
  )
}
