
interface Props {
    image: string,
    header: string,
    body: string
}


const SolutionCard = ({ image, header, body }: Props) => {
    return (
        <div className="max-w-md mx-auto bg-white ">
            <div className="flex flex-col gap-5 p-5">
                <div className="w-full">
                    <img src={image} alt="" className="w-full h-auto rounded-lg object-cover" />
                </div>
                <div>
                    <h2 className="text-[#8F36FF] font-semibold text-lg">{header}</h2>
                </div>
                <div>
                    <p className="text-gray-700">{body}</p>
                </div>
            </div>
        </div>

    )
}

export default SolutionCard
