import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className='bg-[#8F36FF] flex relative h-screen'>

            <div className='flex flex-col'>
                <div className='absolute top-0 left-0'>
                    <img src="/Polygon 6.svg" alt="triangle polygon design" />
                </div>
                <div className='flex flex-col gap-32 my-[70px] mx-[300px] items-start '>
                <div className='flex flex-col gap-2 mt-20'>
                    <p className='text-white font-light text-lg'>A Revolutionary Approach to Autism Care</p>
                    <h1 className='text-white text-5xl leading-[60px]'>Joining Forces to Support <br /> Your Child's Journey<br />  Towards Growth,<br /> Independence, and Joy.</h1>
                </div>
                <div>
                    <Button btnText='learn more' textColor='#FFFFFF' borderColor='#FFFFFF' paddingX="80px" paddingY="30px" />
                </div>
            </div>
            <div className='absolute right-0 bottom-0'>
                <img src="0_Superhero Dad and son_esrgan-v1-x2plus-fotor-bg-remover-20230531183452 1.svg" alt="" className=''/>
            </div>
            <div className='absolute right-0 bottom-[-80px]'>
                <img src="Rectangle 38.svg" alt="rectangle" />
            </div>
            </div>
        </div>
    )
}

export default Hero