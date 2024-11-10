import React from "react"

interface Props {
    header : string
    body?: string,
    position : string,
    direction : "left" | "right",
    offsetX : string,
    offsetY : string,
    backgroundColor : string,
    shapeImage : string,
    cardImage : string,
    children?: React.ReactNode;

}


const Showcaseoffer = ({ header, body, position, offsetX, offsetY, direction, backgroundColor, shapeImage, cardImage, children}: Props) => {
    const [yAxis, xAxis] = position.split("-");
  
    return (
      <div className="flex items-center justify-center p-[200px] gap-[100px]" style={{backgroundColor: backgroundColor}}>
        {direction === "right" ? (
          <>
            <div className="flex flex-col gap-11 w-2/5">
              <h2 className="text-[#8F36FF] text-5xl">{header}</h2>
              <p className="text-lg">{body ? body : children}</p>
            </div>
            <div className="relative ">
              <img
                src={shapeImage}
                alt=""
                className="absolute"
                style={{
                  [yAxis]: offsetY,
                  [xAxis]: offsetX,
                }}
              />
              <img
                src={cardImage}
                alt=""
                className="relative z-50"
              />
            </div>
          </>
        ) : (
          <>
          
          <div className="relative mr-16">
              <img
                src={shapeImage} 
                alt=""
                className="absolute"
                style={{
                  [yAxis]: offsetY,
                  [xAxis]: offsetX,
                }}
              />
              <img
                src={cardImage}
                alt=""
                className="relative z-50"
              />
            </div>
            <div className="flex flex-col gap-11 w-2/5">
              <h2 className="text-[#8F36FF] text-5xl">{header}</h2>
              <p className="text-lg">{body ? body : children}</p>
            </div>
          </>
        )}
      </div>
    );
  };
  

export default Showcaseoffer