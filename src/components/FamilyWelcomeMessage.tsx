import Card from './Card'
import Button from './Button'

const FamilyWelcomeMessage = () => {
    return (
        <div className='mb-[-210px] flex flex-col gap-11 items-center justify-center h-screen relative'>

            <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='text-5xl text-[#8F36FF]'>The Right Choice For Your Family</h2>
                <p className='text-[#8F36FF] text-lg font-light'>Ignite your child's development to new heights!</p>
            </div>
            <div className='flex justify-center items-center text-center'>
                <p className='leading-[26px]'>
                    We firmly believe that autism therapy should never be a source of stress, fear, or <br />
                    punishment. Our approach centers around building positive relationships and meeting <br />
                    our clients exactly where they are in their unique journeys. By creating a welcoming <br />
                    environment where therapy is fun and exciting, we open up the space for meaningful <br />
                    growth to occur. We understand that when therapy is enjoyable, it becomes a catalyst <br />
                    for progress, allowing each child to thrive and reach their full potential.
                </p>
            </div>
            <div className='flex flex-col gap-20'>
            <div className='flex gap-10'>
                <Card cardImage='/Screen Shot 2023-05-31 at 8.36 2.svg' cardBodyTextColor='#3D9FFA' cardBody='Connect'/>
                <Card cardImage='/Screen Shot 2023-05-31 at 8.36 2.svg' cardBodyTextColor='#FF9A02' cardBody='Play'/>
                <Card cardImage='/Screen Shot 2023-05-31 at 8.36 3.svg' cardBodyTextColor='#00D87D' cardBody='Grow'/>
            </div>
            <div className='flex items-center justify-center'>
            <Button btnText='get more details' textColor='#8F36FF' borderColor='#8F36FF' paddingX="30px" paddingY="10px"/>
            </div>
            </div>
            <div className='absolute bottom-0 left-0'>
                <img src="/Rectangle 40.svg" alt="A rectangle" />
            </div>
        </div>
    )
}

export default FamilyWelcomeMessage