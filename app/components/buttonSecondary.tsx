"use client"

import React from "react";

export const ButtonSecondary = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
        <div>
            <button 
            onClick={onClick}
            className="
            px-3 py-1.5 rounded-lg 
            label-button
            color: var(--label-primary);
            bg-stone-200 dark:bg-stone-700
            hover:bg-stone-100 dark:hover:bg-stone-600 
            transition-colors duration-150">
                {label}
            </button>
        </div>
    )
}