import React from "react";

const Section = ({title, description, children}) => {
    return (
        
        <div className="flex sm:flex-row gap-3 flex-col">
            <div className="flex flex-col gap-1 grow place-content-center">
                <p className="label-primary">{title}</p>
                <p className="label-secondary">{description}</p>
            </div>

            <div className="
            flex items-center justify-center border border-dashed border-color 
            h-[600px] w-[600px] place-content-center rounded-[12px]
            ">
                {children}
            </div>

        </div>

    )
}

export default Section;