import React from 'react';

const data = [
  { no: 1, regulasi: 'UU No 30 Tahun 2007', keterangan: 'tentang Energi' },
  { no: 2, regulasi: 'Permen ESDM No. 36 Tahun 2018', keterangan: 'DAK Energi Skala Kecil' },
  { no: 3, regulasi: 'Permen ESDM No. 10 Tahun 2018', keterangan: 'Perubahan atas Permen 10/2017' },
  { no: 4, regulasi: 'Permen ESDM No. 49 Tahun 2017', keterangan: 'Perubahan atas Permen 10/2017' },
  { no: 5, regulasi: 'Permen ESDM No. 10 Tahun 2017', keterangan: 'Pokok Jual Beli Tenaga Listrik' },
  { no: 6, regulasi: 'Permen ESDM No. 16 Tahun 2019', keterangan: 'PLTS Atap (dicabut oleh Permen 26/2021)' },
  { no: 7, regulasi: 'Permen ESDM No. 26 Tahun 2021', keterangan: 'PLTS Atap (mencabut 16/2019)' },
  { no: 8, regulasi: 'Permen ESDM No. 2 Tahun 2024', keterangan: 'PLTS Atap (mencabut 26/2021)' },
  { no: 9, regulasi: 'Permen ESDM No. 4 Tahun 2020', keterangan: 'Perubahan atas Permen 50/2017' },
];

export default function AnekaEbt() {
  return (
    <div className="py-10 px-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Peraturan - Aneka EBT</h1>
      <div className="h-8"></div>
      <div className="overflow-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Regulasi</th>
              <th className="border px-4 py-2">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.no}>
                <td className="border px-4 py-2 text-center">{row.no}</td>
                <td className="border px-4 py-2">{row.regulasi}</td>
                <td className="border px-4 py-2">{row.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
