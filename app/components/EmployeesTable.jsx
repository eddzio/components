import React from 'react';
import { ArrowDown, Check, ChevronRight, Minus } from 'lucide-react';

export default function EmployeesTable() {
  return (
    <div className="bg-[#F8FAFC] rounded-2xl shadow-lg shadow-black/[0.08]">
      <div className="h-[853px] w-[234px] bg-[#333] absolute left-0 top-[64px]" />
      
      {/* Safari Header */}
      <div className="h-[52px] bg-[#F8F4F2] shadow-sm flex items-center px-4 py-2 space-x-2">
        <div className="flex items-center space-x-10 pr-16">
          <div className="flex space-x-2.5">
            <div className="w-3 h-3 rounded-full bg-[#EA5808] border border-black/10" />
            <div className="w-3 h-3 rounded-full bg-[#FDBA74] border border-black/10" />
            <div className="w-3 h-3 rounded-full bg-[#349999] border border-black/10" />
          </div>
          
          <div className="flex space-x-6">
            <div className="flex items-center space-x-1 text-[#3B82F6]">
              <ArrowDown size={14} />
            </div>
            <div className="flex items-center space-x-1 text-[#94A3B8]">
              <ChevronRight size={14} />
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <span className="text-base">app.zoios.io/comments/jisadfgUklabdfgC3k4bX</span>
        </div>

        <div className="flex items-center space-x-6 pl-16">
          <div className="text-[#6C7A89]">
            <Check size={14} />
          </div>
          <div className="text-[#6C7A89]">
            <Minus size={14} />
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="p-6 border-b border-[#E2E8F0]">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-[#1E293B] tracking-tight">Employees</h1>
          <p className="text-[#64748B]">Add or remove employees and modify the data of existing ones.</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-4">
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] bg-white">
                <ChevronRight size={14} className="text-[#64748B]" />
              </button>
              <span className="text-sm">Page 1/4</span>
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] bg-white">
                <ChevronRight size={14} className="text-[#64748B] rotate-180" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <select className="h-10 px-3 border border-[#E2E8F0] rounded-lg bg-white text-[#64748B]">
                <option>Default contact</option>
              </select>
              <select className="h-10 px-3 border border-[#E2E8F0] rounded-lg bg-white text-[#64748B]">
                <option>Segments</option>
              </select>
            </div>

            <div className="h-10 w-px bg-[#E2E8F0]" />

            <div className="flex items-center space-x-2">
              <button className="h-10 px-4 border border-[#E2E8F0] rounded-lg bg-white text-[#1E293B] font-medium">
                Cancel
              </button>
              <button className="h-10 px-4 bg-[#1E293B] text-white rounded-lg font-medium">
                Apply change
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border border-[#E2E8F0] rounded-xl m-6">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
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
            {/* Table rows would go here */}
          </tbody>
        </table>
      </div>

      {/* Scrollbar */}
      <div className="px-6 pb-6">
        <div className="w-full h-2 bg-[#F1F5F9] rounded-full">
          <div className="w-[30%] h-full bg-[#1E293B] rounded-full" />
        </div>
      </div>
    </div>
  );
}