import React from 'react'
import { Link } from 'react-router-dom'

export const Mail = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto
        e.preventDefault()
      }}
    >
      {label}
    </Link>
  )
}
