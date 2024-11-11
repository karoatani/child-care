import { useState, useRef } from 'react';

interface Props {
    header: string;
    body: string;
}

const CollapsableCard = ({ header, body }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="p-6 w-[40rem] border-2 border-[#8F36FF] rounded-xl max-w-lg mx-auto flex flex-col gap-5 shadow-lg ">
            <div className="flex justify-between items-center">
                <h2 className="text-[#8F36FF] font-semibold text-lg">{header}</h2>
                <img 
                    src={isCollapsed ? "/icons/arrow2.svg" : "/icons/arrow.svg"}
                    alt={isCollapsed ? "Collapse" : "Expand"}
                    className="cursor-pointer ml-4"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                />
            </div>

            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isCollapsed ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{
                    maxHeight: isCollapsed ? contentRef.current?.scrollHeight : 0
                }}
            >
                <div className="pt-2 text-gray-700 leading-relaxed">
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default CollapsableCard;
