import React, { useState } from "react";
import Pagination from "../Pagination";
import { FiSearch } from "react-icons/fi";
import SearchBarWithActions from "../SearchBar";
import { useTableControls } from "@/hooks/useTableSearch";
const data = [
  {
    dagitimTarihi: "şubat 2025",
    havuzGrubu: 4,
    yiBF: 2356827,
    belgeNo: "3213",
    unvan: "OTTOMAN YAPI DENETİM LİMİTED ŞİRKETİ",
    alan: 197,
    ilAdi: "KONYA",
  },
  {
    dagitimTarihi: "şubat 2025",
    havuzGrubu: 4,
    yiBF: 2356831,
    belgeNo: "3213",
    unvan: "OTTOMAN YAPI DENETİM LİMİTED ŞİRKETİ",
    alan: 197,
    ilAdi: "KONYA",
  },
  {
    dagitimTarihi: "şubat 2025",
    havuzGrubu: 2,
    yiBF: 1935070,
    belgeNo: "2842",
    unvan: "KON YAPI DENETİM LİMİTED ŞİRKETİ",
    alan: 2451.6,
    ilAdi: "KONYA",
  },
  {
    dagitimTarihi: "şubat 2025",
    havuzGrubu: 4,
    yiBF: 2358620,
    belgeNo: "3414",
    unvan: "UTME YAPI DENETİM LİMİTED ŞİRKETİ",
    alan: 470,
    ilAdi: "KONYA",
  },
];

const DagitimListesi = () => {
  const [belgeNo, setBelgeNo] = useState("");
  const [unvanFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const { filter, setFilter, handleRefresh, handleExportExcel } =
    useTableControls();

  const filteredData = data
    .filter((item) => item.belgeNo.toLowerCase().includes(belgeNo.toLowerCase()))
    .filter((item) =>
      item.belgeNo.toLowerCase().includes(unvanFilter.toLowerCase())
    );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-6 flex flex-col h-[600px]">
      <SearchBarWithActions
        searchValue={filter}
        onSearchChange={setFilter}
        onRefresh={handleRefresh}
        onExportExcel={handleExportExcel}
      />
      <div className="rounded-lg shadow-md w-full overflow-y-auto flex-grow max-h-[500px]">
        <table className="table-auto w-full text-left text-sm ">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr className="font-semibold py-8">
              <th className="p-4 w-32 bg-white" style={{ minWidth: 120, whiteSpace: "nowrap" }}>Dağıtım Tarihi</th>
              <th className="p-4 w-16 bg-white" style={{ minWidth: 120, whiteSpace: "nowrap" }}>Havuz Grubu</th>
              <th className="p-4 w-24 bg-white" style={{ minWidth: 120, whiteSpace: "nowrap" }}>YiBF</th>
              <th className="p-4 w-24 bg-white" style={{ minWidth: 120, whiteSpace: "nowrap" }}>Belge No</th>
              <th className="p-4 w-48 bg-white" style={{ minWidth: 120, whiteSpace: "nowrap" }}>Ünvan</th>
              <th className="p-4 w-16 bg-white" style={{ minWidth: 120, whiteSpace: "nowrap" }}>Alan</th>
              <th className="p-4 w-24 bg-white" style={{ minWidth: 120, whiteSpace: "nowrap" }}>İl Adı</th>
            </tr>
            <tr>
              <th className="p-2 w-24">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FiSearch className="w-4 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
                    value={belgeNo}
                    onChange={(e) => setBelgeNo(e.target.value)}
                  />
                </div>
              </th>
              <th className="p-2 w-80">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FiSearch className="w-4 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
                    value={belgeNo}
                    onChange={(e) => setBelgeNo(e.target.value)}
                  />
                </div>
              </th>
              <th className="p-2 w-80">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FiSearch className="w-4 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
                    value={belgeNo}
                    onChange={(e) => setBelgeNo(e.target.value)}
                  />
                </div>
              </th>
              <th className="p-2 w-80">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FiSearch className="w-4 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
                    value={belgeNo}
                    onChange={(e) => setBelgeNo(e.target.value)}
                  />
                </div>
              </th>
              <th className="p-2 w-80">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FiSearch className="w-4 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
                    value={belgeNo}
                    onChange={(e) => setBelgeNo(e.target.value)}
                  />
                </div>
              </th>
              <th className="p-2 w-80">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FiSearch className="w-4 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
                    value={belgeNo}
                    onChange={(e) => setBelgeNo(e.target.value)}
                  />
                </div>
              </th>
              <th className="p-2 w-80">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FiSearch className="w-4 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
                    value={belgeNo}
                    onChange={(e) => setBelgeNo(e.target.value)}
                  />
                </div>
              </th>


            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-4 align-top break-words">
                  {item.dagitimTarihi}
                </td>
                <td className="p-4 align-top break-words">{item.havuzGrubu}</td>
                <td className="p-4 align-top break-words">{item.yiBF}</td>
                <td className="p-4 align-top break-words">{item.belgeNo}</td>
                <td className="p-4 align-top break-words">{item.unvan}</td>
                <td className="p-4 align-top break-words">{item.alan}</td>
                <td className="p-4 align-top break-words">{item.ilAdi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination: sayfa yüksekliğine bağlı değil, hep en altında */}
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </div>
  );
};

export default DagitimListesi;
