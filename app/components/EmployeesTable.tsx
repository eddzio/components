import React from 'react';
import { ArrowDown, Check, ChevronRight, Minus } from 'lucide-react';

const EmployeesTable: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl border border-border-color pb-0.5">

      


      {/* Page Header */}
      <div className="p-4 border-b border-border-color">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-[#1E293B] tracking-tight">Employees</h1>
          <p className="text-[#64748B]">Add or remove employees and modify the data of existing ones.</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          
{/* toolbar 
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <select className="h-10 px-3 border border-border-color rounded-lg bg-white text-[#64748B]">
                <option>Default contact</option>
              </select>
              <select className="h-10 px-3 border border-border-color rounded-lg bg-white text-[#64748B]">
                <option>Segments</option>
              </select>
            </div>

            <div className="h-10 w-px bg-[#E2E8F0]" />

            <div className="flex items-center space-x-2">
              <button className="h-10 px-4 border border-border-color rounded-lg bg-white text-[#1E293B] font-medium">
                Cancel
              </button>
              <button className="h-10 px-4 bg-[#1E293B] text-white rounded-lg font-medium">
                Apply change
              </button>
            </div>
          </div>

*/}

        </div>
      </div>

      {/* Table */}
      <div className="border border-border-color rounded-xl m-6 overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-border-color">
              <th className="w-14 p-4">
                <div className="w-6 h-6 bg-[#1E293B] rounded-md flex items-center justify-center">
                  <Minus size={14} className="text-white" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center space-x-1">
                  <span className="text-[#64748B] font-medium">Name</span>
                  <ArrowDown size={14} className="text-[#475569]" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-[#64748B] font-medium">Email</span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-[#64748B] font-medium">Status</span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-[#64748B] font-medium">Age</span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-[#64748B] font-medium">Department</span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-[#64748B] font-medium">Default contact</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-color">
              <td className="p-4">
                <input type="checkbox" className="w-6 h-6 rounded-md border-border-color" />
              </td>
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">john.doe@example.com</td>
              <td className="px-4 py-3">Active</td>
              <td className="px-4 py-3">32</td>
              <td className="px-4 py-3">Engineering</td>
              <td className="px-4 py-3">Yes</td>
            </tr>
            <tr className="b">
              <td className="p-4">
                <input type="checkbox" className="w-6 h-6 rounded-md border-border-color" />
              </td>
              <td className="px-4 py-3">Jane Smith</td>
              <td className="px-4 py-3">jane.smith@example.com</td>
              <td className="px-4 py-3">Active</td>
              <td className="px-4 py-3">28</td>
              <td className="px-4 py-3">Design</td>
              <td className="px-4 py-3">No</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default EmployeesTable; 