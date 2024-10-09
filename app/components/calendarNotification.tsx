import React from "react";

const CalendarNotification = () => {
    return (
        <div className="flex flex-col gap-4 card items-start w-[256px] cursor-pointer">
            <div className="
            bg-emerald-200 text-emerald-800
            dark:bg-emerald-900 dark:text-emerald-200
            rounded-full px-3 py-1 font-semibold tracking-tight">
                In 10m
            </div>

            <div className="flex flex-col gap-1">
            <p className="font-semibold">All hands meeting</p>
            <p className="label-secondary">10:30 AM　→　11:30 AM</p>
            </div>

        </div>
    )
}

export default CalendarNotification;