// "use client";

// import React from "react";

// const tabs = [
//   { label: "İstatistik", path: "istatistic" },
//   { label: "Yapı Denetim", path: "yapi-denetim" },
//   { label: "Laboratuvar", path: "laboratuvar" },
//   { label: "Denetçi", path: "denetci" },
//   { label: "YKE", path: "yke" }, 
//   { label: "Yardımcı", path: "yardimci-kontrol" },
//   { label: "Şantiye", path: "santiye-sefi" }, 
//   { label: "Dağıtım", path: "dagitim-listesi" }, 
// ];

// type TabsProps = {
//   activeTab: string;
//   onTabChange: (tab: string) => void;
// };

// export default function Tabs({ activeTab, onTabChange }: TabsProps) {
//   return (
//     <div className="overflow-x-auto pb-2">
//       <nav className="flex w-max min-w-full px-2 sm:px-0 sm:justify-center gap-2 sm:gap-4 md:gap-18 border-b mb-4 text-sm sm:text-base">
//         {tabs.map((tab, index) => {
//           const isActive = activeTab === tab.path;
//           return (
//             <button
//               key={tab.path}
//               onClick={() => onTabChange(tab.path)}
//               className={`pb-2 px-2 whitespace-nowrap border-none bg-transparent cursor-pointer ${
//                 isActive
//                   ? "border-b-2 border-blue-600 font-semibold text-blue-700"
//                   : "text-gray-600 hover:text-gray-800"
//               } ${
//                 index !== tabs.length - 1 ? "border-r border-gray-200 pr-4" : ""
//               }`}
//             >
//               {tab.label}
//             </button>
//           );
//         })}
//       </nav>
//     </div>
//   );
// }


"use client";

type Tab = {
  key: string;
  label: string;
  icon: React.ReactNode; // SVG veya icon
  disabled?: boolean;
};

type TabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const tabs: Tab[] = [
  {
    key: "istatistic",
    label: "İstatistik",
    icon: (
      <svg
        className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
    ),
  },
  {
    key: "yapi-denetim",
    label: "Yapı Denetim",
    icon: (
      <svg
        className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 18"
      >
        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
      </svg>
    ),
  },
  {
    key: "laboratuvar",
    label: "Laboratuvar",
    icon: <></>, // İstersen buraya SVG ekleyebilirsin
  },
  {
    key: "denetci",
    label: "Denetçi",
    icon: <></>,
  },
  {
    key: "yke",
    label: "YKE",
    icon: <></>,
  },
  {
    key: "yardimci-kontrol",
    label: "Yardımcı",
    icon: <></>,
  },
  {
    key: "santiye-sefi",
    label: "Şantiye",
    icon: <></>,
  },
  {
    key: "dagitim-listesi",
    label: "Dağıtım",
    icon: <></>,
  },
];

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map(({ key, label, icon, disabled }) => {
          const isActive = activeTab === key;

          return (
            <li key={key} className="me-2">
              <button
                onClick={() => !disabled && onTabChange(key)}
                disabled={disabled}
                aria-current={isActive ? "page" : undefined}
                className={`
                  inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group
                  ${
                    isActive
                      ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                  ${disabled ? "cursor-not-allowed text-gray-400 dark:text-gray-500" : ""}
                `}
              >
                {icon}
                {label}
              </button>
            </li>
          );
        })}
  
      </ul>
    </div>
  );
}