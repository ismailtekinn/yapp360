import { useState, useCallback } from "react";

export function useTableControls() {
  const [filter, setFilter] = useState("");

  const handleRefresh = useCallback(() => {
    // Buraya genel yenileme kodunu yazabilirsin
    console.log("Yenileme tetiklendi");
  }, []);

  const handleExportExcel = useCallback(() => {
    // Buraya genel excel export kodunu yazabilirsin
    console.log("Excel'e aktarma tetiklendi");
  }, []);

  return {
    filter,
    setFilter,
    handleRefresh,
    handleExportExcel,
  };
}