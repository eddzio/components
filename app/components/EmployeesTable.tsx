import React, { useRef, useEffect } from 'react';
import { ArrowDown, Check, ChevronRight, Minus } from 'lucide-react';

const EmployeesTable: React.FC = () => {
  const cellStyle = "px-4 py-3 text-left label-secondary";
  const checkboxStyle = "w-6 h-6 rounded-md border-color appearance-none bg-card border-2 cursor-pointer checked:bg-accent checked:border-accent";
  const [selectedRows, setSelectedRows] = React.useState<boolean[]>([false, false]);

  const headerCheckboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (headerCheckboxRef.current) {
      const allSelected = selectedRows.every(Boolean);
      const noneSelected = selectedRows.every((selected) => !selected);
      headerCheckboxRef.current.indeterminate = !allSelected && !noneSelected;
    }
  }, [selectedRows]);

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(selectedRows.map(() => checked));
  };

  const handleSelectRow = (index: number, checked: boolean) => {
    setSelectedRows(selectedRows.map((isSelected, i) => 
      i === index ? checked : isSelected
    ));
  };

  return (
    <div className="bg-card rounded-2xl border border-color pb-0.5">

      

      {/* Page Header */}
      <div className="p-4 border-b border-color">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold label-primary tracking-tight">Employees</h1>
          <p className="label-secondary">Add or remove employees and modify the data of existing ones.</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          
          {/* toolbar */}
          {/* <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <select className="h-10 px-2 border border-color rounded-lg bg-white label-secondary">
                <option>Default contact</option>
              </select>
              <select className="h-10 px-2 border border-color rounded-lg bg-white label-secondary">
                <option>Segments</option>
              </select>
            </div>

            <div className="h-10 w-px bg-[#E2E8F0]" />

            <div className="flex items-center space-x-2">
              <button className="h-10 px-4 border border-color rounded-lg bg-white text-[#1E293B] font-medium">
                Cancel
              </button>
              <button className="h-10 px-4 bg-[#1E293B] text-white rounded-lg font-medium">
                Apply change
              </button>
            </div>
          </div> */}



        </div>
      </div>

      {/* Table */}
      <div className="border border-color rounded-xl m-4 overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-card border-b border-color">
              <th className="w-14 p-4">
                <input 
                  type="checkbox" 
                  ref={headerCheckboxRef}
                  className={checkboxStyle}
                  checked={selectedRows.every(Boolean)}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th className={cellStyle}>
                <div className="flex items-center space-x-1">
                  <span className="label-secondary font-medium">Name</span>
                  <ArrowDown size={14} className="label-secondary" />
                </div>
              </th>
              <th className={cellStyle}>
                <span className="label-secondary font-medium">Email</span>
              </th>
              <th className={cellStyle}>
                <span className="label-secondary font-medium">Status</span>
              </th>
              <th className={cellStyle}>
                <span className="label-secondary font-medium">Age</span>
              </th>
              <th className={cellStyle}>
                <span className="label-secondary font-medium">Department</span>
              </th>
              <th className={cellStyle}>
                <span className="label-secondary font-medium">Default contact</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-color">
              <td className="p-4">
                <input 
                  type="checkbox" 
                  className={checkboxStyle}
                  checked={selectedRows[0]}
                  onChange={(e) => handleSelectRow(0, e.target.checked)}
                />
              </td>
              <td className={cellStyle}>John Doe</td>
              <td className={cellStyle}>john.doe@example.com</td>
              <td className={cellStyle}>Active</td>
              <td className={cellStyle}>32</td>
              <td className={cellStyle}>Engineering</td>
              <td className={cellStyle}>Yes</td>
            </tr>
            <tr className="">
              <td className="p-4">
                <input 
                  type="checkbox" 
                  className={checkboxStyle}
                  checked={selectedRows[1]}
                  onChange={(e) => handleSelectRow(1, e.target.checked)}
                />
              </td>
              <td className={cellStyle}>Jane Smith</td>
              <td className={cellStyle}>jane.smith@example.com</td>
              <td className={cellStyle}>Active</td>
              <td className={cellStyle}>28</td>
              <td className={cellStyle}>Design</td>
              <td className={cellStyle}>No</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default EmployeesTable; 