import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
  itemsPerPageOptions?: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  itemsPerPageOptions = [2, 5, 10, 20],
}) => {
  return (
    <div className="flex justify-end  items-center gap-4 mt-6">
      {/* Sayfa geçiş butonları */}
      <div className="flex items-center space-x-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Sayfa başına gösterim (Dropdown yerine buton grubu) */}
      <div className="flex items-center space-x-2 flex-wrap justify-center">
        <span className="text-sm font-medium text-gray-700">Sayfa başına:</span>
        {itemsPerPageOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => onItemsPerPageChange(opt)}
            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
              itemsPerPage === opt
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {opt}
          </button>
        ))}
        <span className="text-sm text-gray-500">adet</span>
      </div>
    </div>
  );
};

export default Pagination;


