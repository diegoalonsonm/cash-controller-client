import { InputProps } from '@/types'
import React from 'react'

export const Input = ({ type, className, id, ariaDescribedby, onChange }: InputProps) => {
    return (
        <input type={type} className={className} id={id} aria-describedby={ariaDescribedby}
                onChange={onChange} />
    )
}
