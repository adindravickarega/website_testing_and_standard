import React from 'react';

const data = [
  { no: 1, regulasi: 'UU No 30 Tahun 2007', keterangan: 'tentang Energi' },
  { no: 2, regulasi: 'Permen ESDM No. 32 Tahun 2008 jo 12 Tahun 2015', keterangan: 'Penyediaan dan Tata Niaga Biofuel' },
  { no: 3, regulasi: 'Permen ESDM No. 12 Tahun 2015', keterangan: 'Perubahan Ketiga Permen 32/2008 tentang Biofuel' },
  { no: 4, regulasi: 'Permen ESDM No. 44 Tahun 2015', keterangan: 'PLN beli listrik dari sampah kota (dicabut oleh Permen 4/2020)' },
  { no: 5, regulasi: 'Permen ESDM No. 12 Tahun 2017', keterangan: 'Pemanfaatan Energi Terbarukan (dicabut Permen 50/2017)' },
  { no: 6, regulasi: 'Permen ESDM No. 43 Tahun 2017', keterangan: 'Perubahan atas Permen No. 12 Tahun 2017' },
  { no: 7, regulasi: 'Permen ESDM No. 50 Tahun 2017', keterangan: 'Pemanfaatan Energi Terbarukan' },
  { no: 8, regulasi: 'Permen ESDM No. 4 Tahun 2020', keterangan: 'Perubahan kedua atas Permen 50/2017 (mencabut Permen 44/2015)' },
  { no: 9, regulasi: 'Perpres No. 61 Tahun 2015', keterangan: 'Dana Perkebunan Kelapa Sawit (diubah oleh Perpres 24/2016 dan 66/2018)' },
  { no: 10, regulasi: 'Perpres No. 24 Tahun 2016', keterangan: 'Perubahan atas Perpres 61/2015' },
  { no: 11, regulasi: 'Perpres No. 66 Tahun 2018', keterangan: 'Perubahan kedua atas Perpres 61/2015' },
  { no: 12, regulasi: 'Permen ESDM No. 41 Tahun 2018', keterangan: 'Biodiesel dengan Dana Perkebunan (diubah Permen 45/2018)' },
  { no: 13, regulasi: 'Permen ESDM No. 45 Tahun 2018', keterangan: 'Perubahan atas Permen 41/2018' },
];

export default function Bioenergi() {
  return (
    <div className="py-10 px-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Peraturan - Bioenergi</h1>
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
