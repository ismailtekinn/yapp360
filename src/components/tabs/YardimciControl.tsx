// import React from "react";
// import DataTable from "../DataTable";

// const YardimciControl = () => {
// const data = [
//   { kategori: "Aktif Yardımcı Eleman Sayısı", deger: "4.520 Adet" },
//   { kategori: "Ortalama Çalışma Süresi (ay)", deger: "18 Ay" },
//   { kategori: "Eleman Başına Ortalama Denetim", deger: "8 Proje" },
//   { kategori: "Teknik Eğitim Oranı", deger: "%87" },
// ];

//  return <DataTable data={data}/>
// };

// export default YardimciControl;

import React, { useState } from "react";
import Pagination from "../Pagination";
import { FiSearch } from "react-icons/fi";
import SearchBarWithActions from "../SearchBar";
import { useTableControls } from "@/hooks/useTableSearch";
const data = [
  {
    adi: "ABDÜLAZİZ",
    soyadi: "SALMAN",
    gorev: "İnşaat",
    alan: "Tekniker",
    durumu: "Çalışmıyor",
  },
  {
    adi: "ABDULKADİR",
    soyadi: "ÖZKAN",
    gorev: "İnşaat",
    alan: "Tekniker",
    durumu: "Çalışıyor",
  },
  {
    adi: "ABDULLAH",
    soyadi: "KALAY",
    gorev: "İnşaat",
    alan: "Tekniker",
    durumu: "Çalışmıyor",
  },
  {
    adi: "ABDULLAH",
    soyadi: "SAYLIK",
    gorev: "İnşaat",
    alan: "Tekniker",
    durumu: "Çalışmıyor",
  },
  {
    adi: "ABDULLAH",
    soyadi: "YÜKSEL",
    gorev: "İnşaat",
    alan: "Tekniker",
    durumu: "Çalışmıyor",
  },
  {
    adi: "ABDULLAH OLCAY",
    soyadi: "MORKAVUK",
    gorev: "İnşaat",
    alan: "Tekniker",
    durumu: "Çalışmıyor",
  },
];

const YardimciControl = () => {
  const [ad, setAd] = useState("");
  const [unvanFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const { filter, setFilter, handleRefresh, handleExportExcel } =
    useTableControls();

  const filteredData = data
    .filter((item) =>
      item.adi.toLowerCase().includes(ad.toLowerCase())
    )
    .filter((item) =>
      item.adi.toLowerCase().includes(unvanFilter.toLowerCase())
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
              <th className="p-4 w-48 bg-white">Alan</th>
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
                    value={ad}
                    onChange={(e) => setAd(e.target.value)}
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
                    value={ad}
                    onChange={(e) => setAd(e.target.value)}
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
                    value={ad}
                    onChange={(e) => setAd(e.target.value)}
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
                    value={ad}
                    onChange={(e) => setAd(e.target.value)}
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
                <td className="p-4 align-top break-words">{item.adi}</td>
                <td className="p-4 align-top break-words">{item.soyadi}</td>
                <td className="p-4 align-top break-words">{item.gorev}</td>
                <td className="p-4 align-top break-words">{item.alan}</td>
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

export default YardimciControl;
