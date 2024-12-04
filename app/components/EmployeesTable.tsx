import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown, Check, ChevronRight, Minus, ArrowUp } from 'lucide-react';

type Employee = {
  name: string;
  email: string;
  status: string;
  age: number;
  department: string;
  defaultContact: boolean;
};

type SortDirection = 'asc' | 'desc' | null;

const EmployeesTable: React.FC = () => {
  const cellStyle = "px-4 py-3 text-left label-secondary";
  const checkboxStyle = "w-6 h-6 rounded-md border-color appearance-none bg-card border-2 cursor-pointer checked:bg-accent checked:border-accent";
  const [selectedRows, setSelectedRows] = React.useState<boolean[]>([false, false]);

  const headerCheckboxRef = useRef<HTMLInputElement>(null);

  const [sortColumn, setSortColumn] = useState<keyof Employee>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const [employees] = useState<Employee[]>([
    { name: 'Sarah Chen', email: 'sarah.chen@acme.co', status: 'Active', age: 34, department: 'Engineering', defaultContact: true },
    { name: 'Marcus Rodriguez', email: 'm.rodriguez@acme.co', status: 'On Leave', age: 29, department: 'Product', defaultContact: false },
  ]);

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

  const handleSort = (column: keyof Employee) => {
    if (sortColumn === column) {
      setSortDirection(current => (current === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortedEmployees = () => {
    if (!sortDirection) return employees;

    return [...employees].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });
  };

  const sortedEmployees = getSortedEmployees();

  const headerTextStyle = "label-secondary hover:text-[var(--label-primary)] font-medium";

  return (
    <div className="bg-card rounded-2xl border border-color pb-0.5">

      

      {/* Page Header */}
      <div className="p-4 border-b border-color">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold label-primary tracking-tight">Employees</h1>
          <p className="label-secondary">Add or remove employees and modify the data of existing ones.</p>
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
              <th className={`${cellStyle} min-w-[160px]`}>
                <button 
                  onClick={() => handleSort('name')}
                  className="flex items-center space-x-1 group hover:text-foreground"
                >
                  <span className="label-secondary hover:text-[var(--label-primary)] font-medium">Name</span>
                  {sortColumn === 'name' ? 
                    (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : 
                    <ArrowDown size={14} className="opacity-0" />}
                </button>
              </th>
              <th className={`${cellStyle} min-w-[200px]`}>
                <button 
                  onClick={() => handleSort('email')}
                  className="flex items-center space-x-1 group hover:text-foreground"
                >
                  <span className={headerTextStyle}>Email</span>
                  {sortColumn === 'email' ? 
                    (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : 
                    <ArrowDown size={14} className="opacity-0" />}
                </button>
              </th>
              <th className={`${cellStyle} min-w-[120px]`}>
                <button 
                  onClick={() => handleSort('status')}
                  className="flex items-center space-x-1 group hover:text-foreground"
                >
                  <span className={headerTextStyle}>Status</span>
                  {sortColumn === 'status' ? 
                    (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : 
                    <ArrowDown size={14} className="opacity-0" />}
                </button>
              </th>
              <th className={`${cellStyle} min-w-[100px]`}>
                <button 
                  onClick={() => handleSort('age')}
                  className="flex items-center space-x-1 group hover:text-foreground"
                >
                  <span className={headerTextStyle}>Age</span>
                  {sortColumn === 'age' ? 
                    (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : 
                    <ArrowDown size={14} className="opacity-0" />}
                </button>
              </th>
              <th className={`${cellStyle} min-w-[140px]`}>
                <button 
                  onClick={() => handleSort('department')}
                  className="flex items-center space-x-1 group hover:text-foreground"
                >
                  <span className={headerTextStyle}>Department</span>
                  {sortColumn === 'department' ? 
                    (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : 
                    <ArrowDown size={14} className="opacity-0" />}
                </button>
              </th>
              <th className={`${cellStyle} min-w-[160px]`}>
                <button 
                  onClick={() => handleSort('defaultContact')}
                  className="flex items-center space-x-1 group hover:text-foreground"
                >
                  <span className={headerTextStyle}>Default contact</span>
                  {sortColumn === 'defaultContact' ? 
                    (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : 
                    <ArrowDown size={14} className="opacity-0" />}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedEmployees.map((employee, index) => (
              <tr key={employee.email} className={index === sortedEmployees.length - 1 ? "" : "border-b border-color"}>
                <td className="p-4">
                  <input 
                    type="checkbox" 
                    className={checkboxStyle}
                    checked={selectedRows[index]}
                    onChange={(e) => handleSelectRow(index, e.target.checked)}
                  />
                </td>
                <td className={cellStyle}>{employee.name}</td>
                <td className={cellStyle}>{employee.email}</td>
                <td className={cellStyle}>{employee.status}</td>
                <td className={cellStyle}>{employee.age}</td>
                <td className={cellStyle}>{employee.department}</td>
                <td className={cellStyle}>{employee.defaultContact ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default EmployeesTable; 