import React, { ChangeEvent, useState } from 'react'
import IOptions from '../interfaces/IOptions';
import PlanCard from './planCard'
import { plans } from '../utils/contants';
import Banner from './banner';
import router from 'next/router';
const PlanSection = () => {
  const [chosenPlan, setChosenPlan] = useState<IOptions>({ value: 'Website Bundle' });

  const handleChange = (e: any): void => {
    const { value }: IOptions = e.target;
    setChosenPlan({ value });
    router.push('/bundle');
  }

  const Website_bundle = <>
    {Object.keys(plans['Website Bundle']).map((plan, i) => (
      <PlanCard
        title={Object.keys(plans['Website Bundle'])[i]}
        option={
          plans['Website Bundle'][plan as 'LAUNCH' | 'LEAD' | 'LEVEL-UP']
        }
      />
    ))}
  </>
  const Mobile_app_bundle = <>
    {Object.keys(plans['Mobile App Bundle']).map((plan, i) => (
      <PlanCard
        title={Object.keys(plans['Mobile App Bundle'])[i]}
        option={
          plans['Mobile App Bundle'][plan as 'BASIC' | 'STANDARD' | 'PLUS']
        }
      />
    ))}
  </>
  const Digital_virtual_training = <>
    {Object.keys(plans['Digital Virtual Training']).map((plan, i) => (
      <PlanCard
        title={Object.keys(plans['Digital Virtual Training'])[i]}
        option={
          plans['Digital Virtual Training'][plan as 'BASIC DIGITAL SKILLS' | 'INTERMEDIATE SKILLS' | 'ADVANCED SKILLS']
        }
      />
    ))}
  </>
  const Enterprise_bundle = <>
    {Object.keys(plans['Enterprise Bundle']).map((plan, i) => (
      <PlanCard
        title={Object.keys(plans['Enterprise Bundle'])[i]}
        option={
          plans['Enterprise Bundle'][plan as 'ENTERPRISE APPLICATIONS']
        }
      />
    ))}
  </>

  return (
    <>
      <Banner
        title={''}
        description={''}
      />
      <div className='flex flex-col z-10 p-10 lg:space-y-10 bg-[#F0F8FC]'>
        <h2 className='m-auto h2'>Choose your plan</h2>
        <select
          className='md:w-96 md:h-12 text-black m-auto rounded-xl focus:outline-blue-400 focus:ring-offset-2 focus:ring-blue-400'
          name=""
          onChange={handleChange}
        >
          <option value="Website Bundle">Website Bundle</option>
          <option value="Enterprise Bundle">Enterprise Bundle</option>
          <option value="Digital Virtual Training">Digital Virtual Training</option>
          <option value="Mobile App Bundle">Mobile App Bundle</option>
        </select>
        <div className='md:flex hidden flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10'>
          {
            chosenPlan.value === 'Website Bundle' ? Website_bundle :
            chosenPlan.value === 'Mobile App Bundle' ? Mobile_app_bundle :
            chosenPlan.value === 'Digital Virtual Training' ? Digital_virtual_training :
            chosenPlan.value === 'Enterprise Bundle' && Enterprise_bundle
          }
        </div>
      </div>
    </>
  )
}

export default PlanSection

// Object.keys(plans[chosenPlan.value]).map((plan, i) => {
//   return <PlanCard
//     title={Object.keys(plans[chosenPlan.value])[i]}
//     option={
//       plans[chosenPlan.value][plan as IBundleOptions["options"]]
//     }
//     key={i}
//   />
// })