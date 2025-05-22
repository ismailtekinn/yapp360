// "use client";

// import React, { useState } from "react";
// import Tabs from "./Tabs";
// import Istatistic from "@/components/tabs/Istatistic";
// import YapiDenetim from "@/components/tabs/YapiDenetim";
// import Laboratuvar from "@/components/tabs/Laboratuvar";
// import Denetci from "@/components/tabs/Denetci";
// import Yke from "@/components/tabs/Yke";
// import YardimciControl from "@/components/tabs/YardimciControl";
// import SantiyeSefi from "@/components/tabs/SantiyeSefi";
// import DagitimListesi from "@/components/tabs/DagitimListesi";

// type CityPageProps = {
//   params: { ilKodu: string };
// };

// export default function CityPage({ params }: CityPageProps) {
//   const tabComponents: Record<string, React.FC> = {
//     istatistic: Istatistic,
//     "yapi-denetim": YapiDenetim,
//     laboratuvar: Laboratuvar,
//     denetci: Denetci,
//     yke: Yke,
//     "yardimci-kontrol": YardimciControl,
//     "santiye-sefi": SantiyeSefi,
//     "dagitim-listesi": DagitimListesi,
//   };

//   const ilKodu = params.ilKodu;
//   const [activeTab, setActiveTab] = useState("istatistic");
//   const ActiveComponent = tabComponents[activeTab];

//   return (
//     <div className="min-h-screen bg-white p-4 sm:p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 text-center">
          
//           <span className="text-blue-600">{ilKodu.toUpperCase()}</span>
//           {" "} İl Detay {" "}
//         </h1>

//         <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

//         <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 min-h-[300px]">
//           <ActiveComponent />
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";


function Content({ activeTab }: { activeTab: string }) {
  switch (activeTab) {
    case "istatistic":
      return <div>İstatistik içeriği buraya gelecek.</div>;
    case "yapi-denetim":
      return <div>Yapı Denetim içeriği buraya gelecek.</div>;
    case "laboratuvar":
      return <div>Laboratuvar içeriği buraya gelecek.</div>;
    case "denetci":
      return <div>Denetçi içeriği buraya gelecek.</div>;
    case "yke":
      return <div>YKE içeriği buraya gelecek.</div>;
    case "yardimci-kontrol":
      return <div>Yardımcı içeriği buraya gelecek.</div>;
    case "santiye-sefi":
      return <div>Şantiye içeriği buraya gelecek.</div>;
    case "dagitim-listesi":
      return <div>Dağıtım içeriği buraya gelecek.</div>;
    default:
      return <div>Bir sekme seçiniz.</div>;
  }
}

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState("istatistic");

  return (
    <div>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="p-4">
        <Content activeTab={activeTab} />
      </div>
    </div>
  );
}
