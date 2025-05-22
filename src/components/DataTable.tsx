// import React from "react";
// import { FaSyncAlt, FaFileExcel, FaSearch } from "react-icons/fa";
// import { DataTableProps } from "@/types/dataTableType";

// const DataTable: React.FC<DataTableProps> = ({ data }) => {
//   const columns = data.length > 0 ? Object.keys(data[0]) : [];

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl shadow-md">
//       <div className="flex justify-end items-center space-x-4 mb-4">
//         <button
//           title="Yenile"
//           className="text-gray-600 hover:text-blue-600 text-lg"
//           onClick={() => window.location.reload()}
//         >
//           <FaSyncAlt />
//         </button>
//         <button
//           title="Excel'e Aktar"
//           className="text-gray-600 hover:text-green-600 text-lg"
//         >
//           <FaFileExcel />
//         </button>
//         <div className="relative">
//           <span className="absolute left-2 top-2 text-gray-400">
//             <FaSearch />
//           </span>
//           <input
//             type="text"
//             placeholder="Arama..."
//             className="pl-8 pr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-sm"
//           />
//         </div>
//       </div>

//       {/* Tablo */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-separate border-spacing-y-2 text-sm text-gray-800">
//           <thead>
//             <tr className="bg-blue-100 text-gray-700">
//               {columns.map((col, idx) => (
//                 <th key={idx} className="px-5 py-3 text-left">
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 className="bg-white hover:bg-blue-50 transition duration-200 shadow-sm rounded-md"
//               >
//                 {columns.map((col, colIndex) => (
//                   <td
//                     key={colIndex}
//                     className="px-5 py-3 border border-blue-100"
//                   >
//                     {row[col]}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DataTable;

import React from "react";
import { FaSyncAlt, FaFileExcel, FaSearch } from "react-icons/fa";

type DataRow = Record<string, string | number>;

type DataTableProps = {
  data: DataRow[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (!data || data.length === 0) return <p>Veri bulunamadı.</p>;

  const columns = Object.keys(data[0]);

  return (
    <div className="bg-gradient-to-b  to-white w-full ">
      {/* Üst sağ araçlar */}
      <div className="flex justify-end items-center space-x-4 mb-4">
        <button
          title="Yenile"
          className="text-gray-600 hover:text-blue-600 text-lg"
          onClick={() => window.location.reload()}
        >
          <FaSyncAlt />
        </button>
        <button
          title="Excel'e Aktar"
          className="text-gray-600 hover:text-green-600 text-lg"
          onClick={() => alert("Excel aktarımı henüz uygulanmadı.")}
        >
          <FaFileExcel />
        </button>
        <div className="relative">
          <span className="absolute left-2 top-2 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Arama..."
            className="pl-8 pr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-sm"
          />
        </div>
      </div>
      {/* table */}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border-spacing-0">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:text-gray-400 ">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} scope="col" className="px-6 py-5">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr>
              {columns.map((_, idx) => (
                <th key={`filter-${idx}`} className="px-6">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-2 flex items-center pointer-events-none text-gray-400">
                    <FaSearch />
                    </span>
                    <input
                      type="text"
                      className="w-full pl-8 pr-2 py-1 border-b-2 border-transparent focus:outline-none focus:border-blue-500 text-sm bg-white"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
                {columns.map((col, idx) => (
                  <td key={idx} className="px-6 py-5 text-black font-semibold">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
