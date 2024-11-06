import React from 'react'
import DropDown from './DropDown'
import Button from './Button'

const Nav = () => {
  return (
    <div className='flex  items-center justify-between'>
        <div className='ml-20'>
            <img src="ABA Home Therapy 1.svg" alt="logo" />
        </div>
        <div className='flex gap-10'>
            <DropDown menuName='Parents'/>
            <DropDown menuName='Referrals'/>
            <DropDown menuName='About'/>
            <DropDown menuName='Careers'/>
        </div>
        <div className='flex gap-10 items-center justify-center mr-20'>
            <p className='text-[#8F36FF]'>+1 700 348 1022</p>
            <Button btnText='get started' textColor='#8F36FF' borderColor='#8F36FF' paddingX="30px" paddingY="0px"/>
        </div>

    </div>
  )
}

export default Nav