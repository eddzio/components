import React from "react";

const Section = ({title, description, children}) => {
    return (
        
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 place-content-center">
                <p className="label-primary">{title}</p>
                <p className="label-secondary">{description}</p>
            </div>

            <div className="
            flex items-center justify-center border border-dashed border-color 
            h-[512px] w-full place-content-center rounded-[12px]
            bg-stone-100 dark:bg-stone-950
            ">
                {children}
            </div>

        </div>

    )
}

export default Section;