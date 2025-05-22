"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type City = { id: number; name: string } | null;

interface CityContextType {
  selectedCity: City;
  setSelectedCity: React.Dispatch<React.SetStateAction<City>>;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<City>(null);

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (!context) throw new Error("useCity must be used within CityProvider");
  return context;
}
