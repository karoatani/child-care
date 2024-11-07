interface Props {
    heading : string,
    body : string
}

const Showcase = ({heading, body} :Props) => {
    return (
        <div className='bg-[#8F36FF] text-white h-[396px] relative flex flex-col items-center justify-center gap-16'>

            <div>
                <h2 className='text-center text-5xl'>{heading}</h2>
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-center w-1/2 text-lg'>{body}</p>
            </div>
            <div className='absolute top-0 right-0'>
                <img src="/Polygonleft.svg" alt="triangle" />
            </div>
        </div>
    )
}

export default Showcase