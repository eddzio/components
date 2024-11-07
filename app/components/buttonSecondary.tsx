"use client"

import React from "react";

export const ButtonSecondary = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
        <div>
            <button 
            onClick={onClick}
            className="
            px-3 py-1.5 rounded-lg 
            text-label-primary text-sm
            bg-stone-50 dark:bg-stone-700
            hover:bg-stone-100 dark:hover:bg-stone-600 
            transition-colors duration-150">
                {label}
            </button>
        </div>
    )
}