import React, { useState } from "react";
import Pagination from "../Pagination";
import { FiSearch } from "react-icons/fi";
import SearchBarWithActions from "../SearchBar";
import { useTableControls } from "@/hooks/useTableSearch";
const data = [
  {
    belgeNo: "681",
    unvan: "ALTUN LABORATUVAR SONDAJ MÜHENDİSLİK TİCARET LTD.ŞTİ.",
    adres: "KONYA",
    laboratuvarTipi: "Zemin Laboratuvarı",
    telefon: "3323200366",
    kapsamListesi: "...",
  },
  {
    belgeNo: "175",
    unvan: "ALYANSHA YAPI MÜH. GIDA VE ELEKTRONİK SAN. Tic. LTD. ŞTİ.",
    adres: "KONYA",
    laboratuvarTipi: "Yapı Malzemeleri ve Zemin Laboratuvarı",
    telefon: "3323422677",
    kapsamListesi: "...",
  },
  {
    belgeNo: "681",
    unvan: "ALTUN LABORATUVAR SONDAJ MÜHENDİSLİK TİCARET LTD.ŞTİ.",
    adres: "KONYA",
    laboratuvarTipi: "Zemin Laboratuvarı",
    telefon: "3323200366",
    kapsamListesi: "...",
  },
  {
    belgeNo: "175",
    unvan: "ALYANSHA YAPI MÜH. GIDA VE ELEKTRONİK SAN. Tic. LTD. ŞTİ.",
    adres: "KONYA",
    laboratuvarTipi: "Yapı Malzemeleri ve Zemin Laboratuvarı",
    telefon: "3323422677",
    kapsamListesi: "...",
  },
];

const Laboratuvar = () => {
  const [belgeNoFilter, setBelgeNoFilter] = useState("");
  const [unvanFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const { filter, setFilter, handleRefresh, handleExportExcel } =
    useTableControls();
    
  const filteredData = data
    .filter((item) =>
      item.belgeNo.toLowerCase().includes(belgeNoFilter.toLowerCase())
    )
    .filter((item) =>
      item.unvan.toLowerCase().includes(unvanFilter.toLowerCase())
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
      {/* Scrollable content */}
      <div className="rounded-lg shadow-md w-full overflow-y-auto flex-grow max-h-[500px]">
        <table className="table-auto w-full text-left text-sm ">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr className="font-semibold py-8">
              <th className="p-4 w-24 bg-white">Belge No</th>
              <th className="p-4 w-80 bg-white">Unvan</th>
              <th className="p-4 bg-white">Adres</th>
              <th className="p-4 w-40 bg-white">Laboratuvar Tipi</th>
              <th className="p-4 w-40 bg-white">Telefon</th>
              <th className="p-4 w-40 bg-white">Kapsam Listesi</th>
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
                    value={belgeNoFilter}
                    onChange={(e) => setBelgeNoFilter(e.target.value)}
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
                    value={belgeNoFilter}
                    onChange={(e) => setBelgeNoFilter(e.target.value)}
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
                    value={belgeNoFilter}
                    onChange={(e) => setBelgeNoFilter(e.target.value)}
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
                    value={belgeNoFilter}
                    onChange={(e) => setBelgeNoFilter(e.target.value)}
                  />
                </div>
              </th>
              <th className="p-2" />
              <th className="p-2" />
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-4 align-top break-words">{item.belgeNo}</td>
                <td className="p-4 align-top break-words">{item.unvan}</td>
                <td className="p-4 align-top break-words">{item.adres}</td>
                <td className="p-4 align-top break-words">
                  {item.laboratuvarTipi}
                </td>
                <td className="p-4 align-top break-words">{item.telefon}</td>
                <td className="p-4 align-top break-words">
                  {item.kapsamListesi}
                </td>
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

export default Laboratuvar;
