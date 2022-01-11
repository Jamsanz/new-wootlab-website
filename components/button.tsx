import React, { ButtonHTMLAttributes } from 'react'


const Button = (props: ButtonHTMLAttributes<any>) => {
  return (
    <button {...props} className='btn-primary'>
      {props.children}
    </button>
  )
}

export default Button
