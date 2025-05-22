import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { useTableControls } from "@/hooks/useTableSearch";
import SearchBarWithActions from "../SearchBar";
import { FiSearch } from "react-icons/fi";
import { useCity } from "@/context/CityContext";

type ApiItem = {
  fileNumber: number;
  name: string;
  address: string;
  phone: string;
};

const YapiDenetim = () => {
  const [belgeNoFilter, setBelgeNoFilter] = useState("");
  const [unvanFilter, setUnvanFilter] = useState("");
  const { selectedCity } = useCity();
  const cityId = selectedCity?.id;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const [apiData, setApiData] = useState<ApiItem[]>([]);

  const { filter, setFilter, handleExportExcel } = useTableControls();

  useEffect(() => {
    if (!cityId) return;

    const fetchData = async () => {
      const body = {
        filter: ["locationId", "=", cityId],
      };

      try {
        const response = await fetch(
          "https://businessyds.csb.gov.tr/api/department/findAllYdkPublic",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );

        if (!response.ok) throw new Error("Veri alınamadı");

        const result = await response.json();

        setApiData(result.items);
        setCurrentPage(1); 
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [cityId]);

  const filteredData = apiData.filter(
    (item) =>
      item.fileNumber.toString().toLowerCase().includes(belgeNoFilter.toLowerCase()) &&
      item.name.toLowerCase().includes(unvanFilter.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Filtre değişirse sayfayı 1’e al
  useEffect(() => {
  }, [belgeNoFilter, unvanFilter, itemsPerPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-6 flex flex-col h-[600px]">
      <SearchBarWithActions
        searchValue={filter}
        onSearchChange={setFilter}
        onRefresh={() => {
        }}
        onExportExcel={handleExportExcel}
      />
      <div className="rounded-lg shadow-md w-full overflow-y-auto flex-grow max-h-[500px]">
        <table className="table-auto w-full text-left text-sm ">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr className="font-semibold py-8">
              <th className="p-4 w-24 bg-white">Belge No</th>
              <th className="p-4 w-80 bg-white">Unvan</th>
              <th className="p-4 bg-white">Adres</th>
              <th className="p-4 w-40 bg-white">Telefon</th>
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
                    placeholder="Belge No ara"
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
                    value={unvanFilter}
                    onChange={(e) => setUnvanFilter(e.target.value)}
                    placeholder="Unvan ara"
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
                <td className="p-4 align-top break-words">{item.fileNumber}</td>
                <td className="p-4 align-top break-words">{item.name}</td>
                <td className="p-4 align-top break-words">{item.address}</td>
                <td className="p-4 align-top break-words">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default YapiDenetim;










// Hard codded ile tasarlanmış YapıDenetim sayfası 
// import React, { useEffect, useState } from "react";
// import Pagination from "../Pagination";
// import { useTableControls } from "@/hooks/useTableSearch";
// import SearchBarWithActions from "../SearchBar";
// import { FiSearch } from "react-icons/fi";
// import { useCity } from "@/context/CityContext";

// const data = [
//   {
//     belgeNo: "3376",
//     unvan: "3BAY YAPI DENETİM LİMİTED ŞİRKETİ",
//     adres:
//       "KILINÇARSLAN MAH. DENİZLİ SOK. 2. GİRİŞ APT. NO: 6 G SELÇUKLU / KONYA",
//     telefon: "5071699609",
//   },
//   {
//     belgeNo: "4047",
//     unvan: "3 MİMAR YAPI DENETİM LİMİTED ŞİRKETİ",
//     adres:
//       "AKABE MAH. YENİCELER CAD. A3 GİRİŞ SİTESİ A3 GİRİŞ NO : 145a İÇ KAPI NO : 303 KARATAY / KONYA",
//     telefon: "5378798679",
//   },
//   {
//     belgeNo: "2392",
//     unvan: "420 YAPI DENETİM LİMİTED ŞİRKETİ",
//     adres: "KILINÇARSLAN MAHALLESİ SALİMDEDE SOKAK NO:2C SELÇUKLU KONYA",
//     telefon: "5414225262",
//   },
//   {
//     belgeNo: "1534",
//     unvan: "42 YAPI DENETİM LİMİTED ŞİRKETİ",
//     adres: "KILINÇARSLAN MAHALLESİ SALİMDEDE SOKAK NO:2/B SELÇUKLU",
//     telefon: "3322331243",
//   },
// ];

// const YapiDenetim = () => {
//   const [belgeNoFilter, setBelgeNoFilter] = useState("");
//   const { selectedCity } = useCity();
//   const cityId = selectedCity?.id;
//   const [unvanFilter] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(2);

//   const { filter, setFilter, handleRefresh, handleExportExcel } =
//     useTableControls();
//   const filteredData = data
//     .filter((item) =>
//       item.belgeNo.toLowerCase().includes(belgeNoFilter.toLowerCase())
//     )
//     .filter((item) =>
//       item.unvan.toLowerCase().includes(unvanFilter.toLowerCase())
//     );

//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const fetchData = async () => {
//     const body = {
//       filter: ["locationId", "=", cityId],
//       skip: (currentPage - 1) * itemsPerPage,
//       take: itemsPerPage,
//     };
//     try {
//       const response = await fetch(
//         "https://businessyds.csb.gov.tr/api/department/findAllYdkPublic",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Veri alınamadı");
//       }

//       const result = await response.json();
//       console.log("object", result);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 flex flex-col h-[600px]">
//       <SearchBarWithActions
//         searchValue={filter}
//         onSearchChange={setFilter}
//         onRefresh={handleRefresh}
//         onExportExcel={handleExportExcel}
//       />
//       <div className="rounded-lg shadow-md w-full overflow-y-auto flex-grow max-h-[500px]">
//         <table className="table-auto w-full text-left text-sm ">
//           <thead className="sticky top-0 bg-gray-100 z-10">
//             <tr className="font-semibold py-8">
//               <th className="p-4 w-24 bg-white">Belge No</th>
//               <th className="p-4 w-80 bg-white">Unvan</th>
//               <th className="p-4 bg-white">Adres</th>
//               <th className="p-4 w-40 bg-white">Telefon</th>
//             </tr>
//             <tr>
//               <th className="p-2 w-24">
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                     <FiSearch className="w-4 h-4 text-gray-400" />
//                   </span>
//                   <input
//                     type="text"
//                     className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
//                     value={belgeNoFilter}
//                     onChange={(e) => setBelgeNoFilter(e.target.value)}
//                   />
//                 </div>
//               </th>
//               <th className="p-2 w-80">
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                     <FiSearch className="w-4 h-4 text-gray-400" />
//                   </span>
//                   <input
//                     type="text"
//                     className="w-full pl-8 pr-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:border-transparent"
//                     value={belgeNoFilter}
//                     onChange={(e) => setBelgeNoFilter(e.target.value)}
//                   />
//                 </div>
//               </th>
//               <th className="p-2" />
//               <th className="p-2" />
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.map((item, idx) => (
//               <tr
//                 key={idx}
//                 className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
//               >
//                 <td className="p-4 align-top break-words">{item.belgeNo}</td>
//                 <td className="p-4 align-top break-words">{item.unvan}</td>
//                 <td className="p-4 align-top break-words">{item.adres}</td>
//                 <td className="p-4 align-top break-words">{item.telefon}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-4">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//           itemsPerPage={itemsPerPage}
//           onItemsPerPageChange={setItemsPerPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default YapiDenetim;
