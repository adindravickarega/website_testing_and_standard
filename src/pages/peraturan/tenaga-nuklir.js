import React from 'react';

const data = [
  { no: 1, regulasi: '', keterangan: '' },
  { no: 2, regulasi: '', keterangan: '' },
  { no: 3, regulasi: '', keterangan: '' }
];

export default function TenagaNuklir() {
  return (
    <div className="py-10 px-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Peraturan - Tenaga Nuklir</h1>
      <div className="h-8"></div>
      <div className="overflow-auto">
        <p className="text-gray-500 italic mb-4">Belum tersedia data regulasi tenaga nuklir.</p>
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
