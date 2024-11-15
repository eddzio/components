


export default function Datepicker() {
    return (
        <div className="flex flex-col text-sm gap-1 text-">
            <label htmlFor="date">Time range</label>
            <input 
            className="border border-gray-300 rounded-lg p-2"
            type="date" id="date" value={new Date().toISOString().split('T')[0]} />
        </div>
    );
}
