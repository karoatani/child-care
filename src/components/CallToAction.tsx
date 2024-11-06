import React from 'react'
import Button from './Button'

const CallToAction = () => {
  return (
    <div className="bg-[url('/children.svg')] h-screen bg-cover bg-no-repeat flex items-center justify-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8F36FF] opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center px-4">
        <p className="text-5xl text-white leading-[70px] font-bold">
          "It goes beyond simply addressing questions or <br />
          deterring unwanted behaviors; it's about delving <br />
          into the root of those behaviors and gaining a <br />
          genuine understanding of their origins."
        </p>
        
        <Button
          btnText="Learn more"
          textColor="#FFFFFF"
          borderColor="#FFFFFF"
          paddingX="80px"
          paddingY="30px"
        />
      </div>
    </div>
  )
}

export default CallToAction
