import React from "react";

const CalendarNotification = () => {
    return (
        <div className="flex flex-col gap-4 card items-start w-[256px]">
            <div className="bg-emerald-900 text-emerald-200 rounded-full px-3 py-1">
                In 10m
            </div>

            <div className="flex flex-col gap-1">
            <p>All hands meeting</p>
            <p className="label-secondary">10:30 AM　→　11:30 AM</p>
            </div>

        </div>
    )
}

export default CalendarNotification;