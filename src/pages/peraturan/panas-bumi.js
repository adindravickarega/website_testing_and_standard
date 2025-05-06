import React from 'react';

const data = [
  { no: 1, regulasi: 'UU No. 21 Tahun 2014', keterangan: 'tentang Panas Bumi (diubah oleh UU No. 6 Tahun 2023)' },
  { no: 2, regulasi: 'UU No. 6 Tahun 2023', keterangan: 'tentang Cipta Kerja (Panas Bumi)' },
  { no: 3, regulasi: 'Permen ESDM No. 17 Tahun 2014', keterangan: 'Pembelian Listrik dari PLTP oleh PLN' },
  { no: 4, regulasi: 'Permen ESDM No. 14 Tahun 2015', keterangan: 'Penerimaan Negara Bukan Pajak Panas Bumi' },
  { no: 5, regulasi: 'Permen ESDM No. 44 Tahun 2016', keterangan: 'Komitmen Eksplorasi Panas Bumi' },
  { no: 6, regulasi: 'PP No. 28 Tahun 2016', keterangan: 'Bonus Produksi Panas Bumi' },
  { no: 7, regulasi: 'Permen ESDM No. 23 Tahun 2017', keterangan: 'Bonus Produksi Panas Bumi' },
];

export default function PanasBumi() {
  return (
    <div className="py-10 px-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Peraturan - Panas Bumi</h1>
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
