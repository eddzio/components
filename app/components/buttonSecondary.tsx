"use client"

import React from "react";

export const ButtonSecondary = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
        <div>
            <button 
            onClick={onClick}
            className="px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 text-label-primary text-sm">
                {label}
            </button>
        </div>
    )
}