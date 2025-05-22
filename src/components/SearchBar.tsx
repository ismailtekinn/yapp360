import React from "react";
import { FiSearch, FiRefreshCw, FiDownload } from "react-icons/fi";

interface SearchBarWithActionsProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onRefresh: () => void;
  onExportExcel: () => void;
}

const SearchBarWithActions: React.FC<SearchBarWithActionsProps> = ({
  searchValue,
  onSearchChange,
  onRefresh,
  onExportExcel,
}) => {
  return (
    <div className="mb-4 w-full flex justify-end items-center space-x-3">
      {/* İkonlar */}
      <button
        onClick={onRefresh}
        className="text-gray-600 hover:text-gray-900 p-1 rounded"
        title="Yenile"
      >
        <FiRefreshCw className="w-5 h-5" />
      </button>
      <button
        onClick={onExportExcel}
        className="text-gray-600 hover:text-gray-900 p-1 rounded"
        title="Excel'e Aktar"
      >
        <FiDownload className="w-5 h-5" />
      </button>

      {/* Arama inputu */}
      <div className="relative text-gray-400 focus-within:text-gray-600 w-48">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <FiSearch className="w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Ara..."
          className="block w-full bg-white border border-gray-300 rounded-md py-1 pl-8 pr-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBarWithActions;
