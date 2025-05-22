// "use client";

// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";
// import { GeoJsonObject, Feature, Geometry } from "geojson";

// interface CustomProperties {
//   name: string;
// }

// export default function TurkeyMap() {
//   const [geoData, setGeoData] = useState<GeoJsonObject | null>(null);

//   useEffect(() => {
//     fetch("/data/tr-cities-ansi.json")
//       .then((res) => res.json())
//       .then((data) => setGeoData(data))
//       .catch((err) => console.error("GeoJSON yüklenemedi:", err));
//   }, []);

//   const geoJsonStyle = {
//     color: "#2563eb", // mavi sınır
//     weight: 1,
//     fillColor: "#ff7f00", // sarı dolgu
//     fillOpacity: 0.6,
//   };

//   return (
//     <MapContainer
//       key="turkey-map"
//       center={[39, 35]}
//       zoom={6}
//       style={{ height: "500px", width: "100%" }}
//       scrollWheelZoom={false}
//     >
//       <TileLayer
//         url="https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//       />

//       {geoData && (
//         <GeoJSON
//           data={geoData}
//           style={() => geoJsonStyle}
//           onEachFeature={(
//             feature: Feature<Geometry, CustomProperties>,
//             layer
//           ) => {
//             if (feature.properties?.name) {
//               layer.bindTooltip(feature.properties.name, {
//                 permanent: false,
//                 direction: "center",
//                 className: "text-sm font-medium bg-white p-1 rounded shadow",
//               });
//             }
//             layer.on({
//               click: () => {
//                 console.log("Tıklanan il:", feature.properties?.name);
//               },
//             });
//           }}
//         />
//       )}
//     </MapContainer>
//   );
// }

"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { GeoJsonObject, Feature, Geometry } from "geojson";

interface CustomProperties {
  name: string;
  number: number;
}

interface TurkeyMapProps {
  onCityClick?: (cityName: string, number: number) => void;
}

export default function TurkeyMap({ onCityClick }: TurkeyMapProps) {
  const [geoData, setGeoData] = useState<GeoJsonObject | null>(null);

  useEffect(() => {
    fetch("/tr-cities-ansi.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("GeoJSON yüklenemedi:", err));
  }, []);

  const geoJsonStyle = {
    color: "#2563eb",
    weight: 1,
    fillColor: "#ff7f00",
    fillOpacity: 0.6,
  };

  return (
    <MapContainer
      key="turkey-map"
      center={[39, 35]}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {geoData && (
        <GeoJSON
          data={geoData}
          style={() => geoJsonStyle}
          onEachFeature={(
            feature: Feature<Geometry, CustomProperties>,
            layer
          ) => {
            if (feature.properties?.name) {
              layer.bindTooltip(feature.properties.name, {
                permanent: false,
                direction: "center",
                className: "text-sm font-medium bg-white p-1 rounded shadow",
              });
            }
            layer.on({
              click: () => {
                if (feature.properties?.name && onCityClick) {
                  const cityName = feature.properties.name;
                  const id = feature.properties.number; 
                  onCityClick(cityName, id);
                }
              },
            });
          }}
        />
      )}
    </MapContainer>
  );
}
