
import React, { useState } from "react";
import Pagination from "../Pagination";
import { FiSearch } from "react-icons/fi";
import SearchBarWithActions from "../SearchBar";
import { useTableControls } from "@/hooks/useTableSearch";
const data = [
  {
    adi: "ÖMER",
    soyadi: "YAYGÜMÜŞ",
    gorev: "YKE Mimar Mühendis",
    meslek: "Elektrik Mühendisi",
    sicilNo: "0",
    durumu: "Çalışıyor",
  },
  {
    adi: "YUNUS",
    soyadi: "ÇELİK",
    gorev: "YKE Mimar Mühendis",
    meslek: "Makina Mühendisi",
    sicilNo: "100127",
    durumu: "Çalışıyor",
  },
  {
    adi: "ORHAN",
    soyadi: "MUHACİR",
    gorev: "YKE Mimar Mühendis",
    meslek: "İnşaat Mühendisi",
    sicilNo: "100317",
    durumu: "Çalışmıyor",
  },
  {
    adi: "MÜCAHİT",
    soyadi: "İNCE",
    gorev: "YKE Mimar Mühendis",
    meslek: "İnşaat Mühendisi",
    sicilNo: "100380",
    durumu: "Çalışmıyor",
  },
  {
    adi: "MUSTAFA",
    soyadi: "KAHVECİ",
    gorev: "YKE Mimar Mühendis",
    meslek: "Makina Mühendisi",
    sicilNo: "100381",
    durumu: "Çalışmıyor",
  },
  {
    adi: "EZGİ",
    soyadi: "AKCAN",
    gorev: "YKE Mimar Mühendis",
    meslek: "Makina Mühendisi",
    sicilNo: "100383",
    durumu: "Çalışmıyor",
  },
];

const Yke = () => {
  const [sicilNoFilter, setSicilNoFilter] = useState("");
  const [unvanFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const { filter, setFilter, handleRefresh, handleExportExcel } =
    useTableControls();

  const filteredData = data
    .filter((item) =>
      item.sicilNo.toLowerCase().includes(sicilNoFilter.toLowerCase())
    )
    .filter((item) =>
      item.sicilNo.toLowerCase().includes(unvanFilter.toLowerCase())
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
              <th className="p-4 w-32 bg-white">Adı</th>
              <th className="p-4 w-32 bg-white">Soyadı</th>
              <th className="p-4 w-48 bg-white">Görev</th>
              <th className="p-4 w-48 bg-white">Meslek</th>
              <th className="p-4 w-24 bg-white">Sicil No</th>
              <th className="p-4 w-24 bg-white">Durumu</th>
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
                    value={sicilNoFilter}
                    onChange={(e) => setSicilNoFilter(e.target.value)}
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
                    value={sicilNoFilter}
                    onChange={(e) => setSicilNoFilter(e.target.value)}
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
                    value={sicilNoFilter}
                    onChange={(e) => setSicilNoFilter(e.target.value)}
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
                    value={sicilNoFilter}
                    onChange={(e) => setSicilNoFilter(e.target.value)}
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
                    value={sicilNoFilter}
                    onChange={(e) => setSicilNoFilter(e.target.value)}
                  />
                </div>
              </th>
              <th className="p-2" />
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-4 align-top break-words">{item.adi}</td>
                <td className="p-4 align-top break-words">{item.soyadi}</td>
                <td className="p-4 align-top break-words">{item.gorev}</td>
                <td className="p-4 align-top break-words">{item.meslek}</td>
                <td className="p-4 align-top break-words">{item.sicilNo}</td>
                <td className="p-4 align-top break-words">
                  {item.durumu === "Çalışıyor" ? (
                    <input
                      type="text"
                      value={item.durumu}
                      readOnly
                      className="bg-green-100 text-green-800 border border-green-400 rounded px-2 py-1 text-sm"
                    />
                  ) : (
                    item.durumu
                  )}
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

export default Yke;
