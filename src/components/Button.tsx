
interface Props {
    textColor: string,
    borderColor: string,
    btnText: string,
    paddingX: string,
    paddingY: string
}

const Button = ({ textColor, borderColor, btnText, paddingX, paddingY }: Props) => {
    return (
        <button style={{
            color: textColor,
            borderColor: borderColor,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            paddingTop: paddingY,
            paddingBottom: paddingY,
            fontStyle : textColor,
        }}
            className={` border-[2px] rounded-full  text-center font-bold `}>
            {btnText}
        </button>
    )
}

export default Button