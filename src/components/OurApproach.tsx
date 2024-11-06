import React from 'react'
import Card from './Card'

import Button from './Button'

const OurApproach = () => {
    return (
        <div className='flex flex-col gap-11 items-center justify-center'>

            <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='text-5xl text-[#8F36FF]'>Putting Your Child First</h2>
                <p className='text-[#8F36FF] text-lg font-light'>Ready for a new approach?</p>
            </div>
            <div className='flex justify-center items-center text-center'>
                <p className='leading-[26px]'>
                    We’re proud to offer a comprehensive Developmental Relationship-Based Intervention <br />
                    (DRBI) model that treats the whole person, accepts most major insurance providers, <br />
                    and provides all necessary therapeutic services under one roof. With a focus on building <br />
                    meaningful relationships and addressing individual needs, our program brings together <br />
                    a range of services like never before, offering families a unique and transformative <br />
                    approach to help their child achieve their fullest potential.
                </p>
            </div>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10'>
                    <img src="/family.png" alt="" className='bg-cover h-[200px]' />
                    <Button btnText='in-home' textColor='#8F36FF' borderColor='#8F36FF' paddingX="80px" paddingY="30px" />
                </div>
                <div className='flex flex-col gap-10'>
                    <img src="/singlefamily.png" alt="" className='bg-cover h-[200px]' />
                    <Button btnText='in-school' textColor='#8F36FF' borderColor='#8F36FF' paddingX="80px" paddingY="30px" />
                </div>
            </div>
        </div>
    )
}

export default OurApproach