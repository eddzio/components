"use client"

import React from "react";

export const ButtonPrimary = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
        <div>
            <button 
            onClick={onClick}
            className="px-3 py-1.5 rounded-md 
            bg-orange-700
            hover:bg-orange-600
            label-button
            transition-colors duration-150
            ">
                {label}
            </button>
        </div>
    )
}