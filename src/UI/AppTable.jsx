"use client";

import { useState } from "react";
import { ChevronDown, ChevronsDown, ChevronUp } from "react-feather";

const AppTable = ({ data, columns, itemsPerPage = 10, search = "" }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (column) => {
    setCurrentPage(1);
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const getSortIcon = (column) => {
    if (sortColumn !== column) return <ChevronsDown className="w-4 h-4" />;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="w-full max-h-[80vh] h-[80vh] overflow-x-auto">
      <table className="w-full border-collapse table-auto rounded-md">
        <thead>
          <tr className="bg-brand-light font-semibold text-border-dark">
            {columns.map((column) => (
              <th
                key={column.key}
                className="p-2 text-left border cursor-pointer"
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center justify-between">
                  <span>{column.label}</span>
                  {getSortIcon(column.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 text-border-dark font-semibold">
              {columns.map((column) => (
                <td key={column.key} className="p-2 border">
                  {item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppTable;
