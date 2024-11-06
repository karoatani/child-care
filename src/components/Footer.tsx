const Footer = () => {
    return (

        <div className='bg-[#3F00AF] relative w-full h-[300px]  text-white py-10 flex flex-col gap-5 '>
            <div className=' w-full h-[250px] flex text-white items-center justify-center'>
                <div className='flex'>
                    <img src="/Mask group.png" alt="" className=' h-[100px]' />
                </div>
                <div className='flex justify-around gap-10'>
                    <div className='flex items-start gap-2'>
                        <img src="/icons/Group.svg" alt="" />
                        <p>1234 Veron Road.<br />
                            Fort Lauderdale, FL 33312</p>

                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <img src="/icons/Vector.svg" alt="" />
                        <p>920-248-3021</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <img src="/icons/message.svg" alt="" />
                        <p>info@portochild.com</p>
                    </div>
                </div>
            </div>
            <hr className="border-1 border-[#D9D9D9] w-1/2 mx-auto" />

            <div className='flex flex-col justify-center items-center gap-5'>
                <div className='flex gap-5 items-center justify-center'>

                    <img src="/icons/teenyicons_facebook-outline.svg" alt="" />
                    <img src="/icons/et_twitter.svg" alt="" />
                    <img src="/icons/et_linkedin.svg" alt="" />
                    <img src="/icons/openmoji_instagram.svg" alt="" />
                </div>
                <div >
                    <p className='text-sm'>Copyrights @2023 | PavanK</p>
                </div>

            </div>
            <div className='absolute top-[-70px]'>
                <img src="/Rectangle 39.svg" alt="" />
            </div>
        </div>

    )
}

export default Footer