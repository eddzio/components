"use client"

import React from "react";

export const ButtonPrimary = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
        <div>
            <button 
            onClick={onClick}
            className="px-3 py-1.5 rounded-lg bg-stone-950 hover:bg-stone-900 text-white text-sm">
                {label}
            </button>
        </div>
    )
}