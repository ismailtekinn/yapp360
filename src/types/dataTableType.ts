// export type DataRow = {
//   kategori: string;
//   deger: string;
// };

// export type DataTableProps = {
//   data: DataRow[];
// };


export type DataRow = Record<string, string | number>; // Esnek satır yapısı

export type DataTableProps = {
  data: DataRow[]; // Her satır farklı sayıda key içerebilir
};