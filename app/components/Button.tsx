import { ButtonProps } from '@/types'
import React from 'react'

export const Button = ({ type, text, className }: ButtonProps) => {
  return (
    <button type={type} className={`btn ${className}`}>{text}</button>
  )
}