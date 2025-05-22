"use client";
import Head from "next/head";
import { useState } from "react";
import TurkeyMap from "@/components/TurkeyMap";
import { Modal } from "@/components/Modal/Modal";
import TabsModal from "@/components/tabs/TabModel";
import { useCity } from "@/context/CityContext";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("istatistic");
    const { selectedCity,setSelectedCity } = useCity();

function handleMapClick(cityName: string, id:number) {
 setSelectedCity({ name: cityName, id });
  setActiveTab("istatistic"); 
  setModalOpen(true);
}

  return (
    <>
      <Head>
        <title>Türkiye İl Sınırları Haritası</title>
        <meta
          name="description"
          content="Türkiye'nin il sınırlarını gösteren interaktif harita"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
              Türkiye İl Sınırları
            </h1>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <TurkeyMap onCityClick={handleMapClick} />
          </div>

          {/* Modal */}
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} city = {selectedCity}>
            {/* <TabsModal initialTab={activeTab} /> */}
            <TabsModal initialTab={activeTab}  />
          </Modal>
        </div>
      </div>
    </>
  );
}
