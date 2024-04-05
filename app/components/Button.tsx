import { ButtonProps } from '@/types'
import React from 'react'

export const Button = ({ type, text, className, onClick }: ButtonProps) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}