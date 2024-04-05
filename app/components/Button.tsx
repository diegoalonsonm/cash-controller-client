import { ButtonProps } from '@/types'
import React from 'react'

export const Button = ({ type, text, className, onClick, icon }: ButtonProps) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {text} {icon}
    </button>
  )
}