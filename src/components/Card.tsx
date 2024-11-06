import React from 'react'


interface Props {
    cardImage : string,
    cardBody : string,
    cardBodyTextColor : string
}

const Card = ({cardImage, cardBody,cardBodyTextColor } : Props) => {
  return (
    <div className='border-2 border-[#F6F6F6] w-[303px] h-[270px] mt-[50px] rounded-3xl relative flex flex-col items-center'>
        <div className='absolute top-[-40px]'>
          <img src={cardImage} alt="" />
        </div>

      <div className='absolute bottom-[20px] justify-self-center self-center'>
        <p style={{
            color: cardBodyTextColor,
        }} 
        className='text-[#3D9FFA] font-semibold text-lg '>{cardBody}</p>
      </div>
    </div>
  )
}

export default Card