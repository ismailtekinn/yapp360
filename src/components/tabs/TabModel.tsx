"use client";
import DagitimListesi from "@/components/tabs/DagitimListesi";
import Denetci from "@/components/tabs/Denetci";
import Istatistic from "@/components/tabs/Istatistic";
import Laboratuvar from "@/components/tabs/Laboratuvar";
import SantiyeSefi from "@/components/tabs/SantiyeSefi";
import YapiDenetim from "@/components/tabs/YapiDenetim";
import YardimciControl from "@/components/tabs/YardimciControl";
import Yke from "@/components/tabs/Yke";
import React, { useState } from "react";

interface TabsModalExampleProps {
  initialTab: string;
  
  onTabChange?: (tab: string) => void;
}

export default function TabsModal({
  initialTab,
  onTabChange,
}: TabsModalExampleProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: "istatistic", label: "İSTATİSTİK" },
    { id: "yapi-denetim", label: "YAPI DENETİM" },
    { id: "laboratuvar", label: "LABORATUVAR" },
    { id: "denetci", label: "DENETÇİ" },
    { id: "yke", label: "YKE" },
    { id: "yardimci-kontrol", label: "YARDIMCI KONTROL" },
    { id: "santiye-sefi", label: "ŞANTİYE ŞEFİ" },
    { id: "dagitim-listesi", label: "DAĞITIM LİSTESİ" },
  ];

  function renderContent() {
    switch (activeTab) {
      case "istatistic":
        return <Istatistic />;
      case "yapi-denetim":
        return <YapiDenetim />;
      case "laboratuvar":
        return <Laboratuvar />;
      case "denetci":
        return <Denetci />;
      case "yke":
        return <Yke />;
      case "yardimci-kontrol":
        return <YardimciControl />;
      case "santiye-sefi":
        return <SantiyeSefi />;
      case "dagitim-listesi":
        return <DagitimListesi />;
      default:
        return null;
    }
  }

  function handleTabClick(tabId: string) {
    setActiveTab(tabId);
    if (onTabChange) onTabChange(tabId);
  }

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300 mb-4 bg-gray-50 text-gray-400 overflow-x-auto custom-scroll space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex justify-center items-center px-2 py-2 rounded-t-md hover:bg-gray-200 ${
              activeTab === tab.id ? "text-blue-400 border-b-2" : "text-gray-400"
            }`}
            style={{
              flexShrink: 0,
              minWidth: 120,
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{renderContent()}</div>
    </div>
  );
}
