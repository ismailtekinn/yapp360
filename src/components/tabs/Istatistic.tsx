import { useCity } from "@/context/CityContext";
import React, { useEffect, useState } from "react";

interface StatisticData {
  countTotalYibf: number;
  countTotalConstructionArea: number;
  countTotalActiveYdk: number;
  countTotalActiveLab: number;
  countTotalCountryYibf: number;
  countTotalCountryConstructionArea: number;
}

const Istatistic = () => {
  const { selectedCity } = useCity();
  const cityId = selectedCity?.id;

  const [statistics, setStatistics] = useState<StatisticData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://businessyds.csb.gov.tr/api/department/findAllPublicStatistics/42`
        );
        if (!response.ok) {
          throw new Error("Veri alınamadı");
        }
        const data = await response.json();
        if (data?.items?.length > 0) {
          setStatistics(data.items[0]);
        }
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    if (cityId) {
      fetchData();
    }
  }, [cityId]);

  if (loading) {
    return <div className="p-6 text-center">Yükleniyor...</div>;
  }

  if (!statistics) {
    return <div className="p-6 text-center">Veri bulunamadı.</div>;
  }

  const formattedData = [
    {
      kategori: "Aktif İş Sayısı",
      deger: `${statistics.countTotalYibf.toLocaleString("tr-TR")} Adet`,
    },
    {
      kategori: "Aktif Denetlenen Alan",
      deger: `${statistics.countTotalConstructionArea.toLocaleString("tr-TR")} m²`,
    },
    {
      kategori: "Aktif YDK",
      deger: `${statistics.countTotalActiveYdk.toLocaleString("tr-TR")} Adet`,
    },
    {
      kategori: "Aktif LAB",
      deger: `${statistics.countTotalActiveLab.toLocaleString("tr-TR")} Adet`,
    },
    {
      kategori: "Türkiye Genelinde Aktif Denetlenen YİBF Sayısı",
      deger: `${statistics.countTotalCountryYibf.toLocaleString("tr-TR")} Adet`,
    },
    {
      kategori: "Türkiye Genelinde Aktif Denetlenen Alan",
      deger: `${statistics.countTotalCountryConstructionArea.toLocaleString("tr-TR")} m²`,
    },
  ];

  return (
    <div className="p-6 flex flex-col h-[600px]">
      <div className="rounded-lg shadow-md w-full overflow-y-auto flex-grow max-h-[500px]">
        <table className="table-auto w-full text-left text-sm">
          <tbody>
            {formattedData.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="p-4 py-6 align-top break-words font-medium">
                  {item.kategori}
                </td>
                <td className="p-4 py-6 align-top break-words">{item.deger}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Istatistic;
