"use client"

import React from "react";

export const ButtonPrimary = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
        <div>
            <button 
            onClick={onClick}
            style={{ boxShadow: "inset 0px 3px 4px -2px rgba(255, 255, 255, 0.3), 0px 1px 2px 0px rgba(0,0,0,0.4)" }}
            className="px-3 py-1.5 rounded-md 
            bg-stone-950
            hover:bg-stone-900 text-white text-sm transition-colors duration-150
            ">
                {label}
            </button>
        </div>
    )
}