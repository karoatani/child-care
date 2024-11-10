import  { useState } from 'react';


interface Props {
    header : string,
    body : string,
}
const CollapsableCard = ({header, body} :Props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="p-6 w-[40rem] border-2 border-[#8F36FF] rounded-xl max-w-lg mx-auto flex flex-col gap-5 shadow-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-[#8F36FF] font-semibold text-lg">{header}</h2>
                <img 
                    src={isCollapsed ? "/icons/arrow2.svg" : "/icons/arrow.svg"}
                    alt={isCollapsed ? "Collapse" : "Expand"}
                    className="cursor-pointer ml-4"
                    onClick={() => setIsCollapsed(!isCollapsed)} 
                />
            </div>

            {isCollapsed && (
                <div className="pt-2 text-gray-700 leading-relaxed">
                    <p>
                        {body}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CollapsableCard;
