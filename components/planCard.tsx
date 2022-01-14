import React from 'react'
import Button from './button'

const PlanCard = ({ title, option }: { title: string, option?: Array<String> }) => {
  return (
    <div className='bg-[#C6EAFA] inline-flex flex-col space-y-5 p-10 rounded-md flex-1'>
      <h1 className="text-3xl font-semibold text-center">{title}</h1>
      <ul className='inline-flex flex-col space-y-5'>
        {option?.map((option, index) => (
          <li className="inline-flex" key={index}><i className=' text-green-600 fas fa-check-circle mr-3'/> <span>{option}</span></li>
        ))}
      </ul>
      <Button>Select</Button>
    </div>
  )
}

export default PlanCard
