import React from 'react';

const experts = [
  { no: 1, nama: "Tatang Hernas", bidang: "Bioenergi", instansi: "Institut Teknologi Bandung" },
  { no: 2, nama: "Izmirta Rachman", bidang: "Bioetanol", instansi: "Ketua Asosiasi Produsen Spiritus dan etanol Indonesia" },
  { no: 3, nama: "Paulus Tjakrawan", bidang: "Biodiesel", instansi: "Ketua Asosiasi Produsen Biodiesel" },
  { no: 4, nama: "Prof. Udin Hasanudin", bidang: "Biogas", instansi: "Universitas Lampung" },
  { no: 5, nama: "Iman K. Reksowardojo", bidang: "Biodiesel", instansi: "Institut Teknologi Bandung" },
  { no: 6, nama: "Unggul Priyanto", bidang: "Green Fuel", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 7, nama: "Semuel Pati Senda", bidang: "Biogas", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 8, nama: "Hariana", bidang: "Biomassa Co-firing", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 9, nama: "Sony Solistia Wirawan", bidang: "Biodiesel", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 10, nama: "Agus Kismanto", bidang: "Waste to Energy", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 11, nama: "Didik Rostyono", bidang: "Energi Angin", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 12, nama: "Verina J. Wargadalam", bidang: "Bioenergi, Fuel Cell", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 13, nama: "Arief Heru Kuncoro", bidang: "Sistem Energi dan Tekno-Ekonomi Energi Baru dan Energi Terbarukan", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 14, nama: "Hari Soekarno", bidang: "Mikrohidro", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 15, nama: "Arya Rezavidi", bidang: "Energi Surya", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 16, nama: "Andika Prastawa", bidang: "Energi Surya", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 17, nama: "Soeripno Martosaputro", bidang: "Energi Angin", instansi: "Ketua Masyarakat Energi Angin Indonesia" },
  { no: 18, nama: "Topan Setiadipura", bidang: "Energi Nuklir", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 19, nama: "Surip Widodo", bidang: "Energi Nuklir", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 20, nama: "I Wayan Ngarayana", bidang: "Energi Nuklir", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 21, nama: "M. Indra Al. Irsyad", bidang: "Sistem Energi dan Tekno-Ekonomi Energi Baru dan Energi Terbarukan", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 22, nama: "Bono Pranoto", bidang: "Mikrohidro", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 23, nama: "Vetri Nurliyanti", bidang: "Energi Surya, Mikrogrid", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 24, nama: "Nurry Widya Hesty", bidang: "Energi Angin", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 25, nama: "Arfie Ikhsan Firmansyah", bidang: "Mikrohidro, Energi Laut", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 26, nama: "Silvy Rahmah Fithri", bidang: "Energi Angin", instansi: "Badan Riset dan Inovasi Nasional" },
  { no: 27, nama: "Nina Konitat Supriatna", bidang: "Biogas, Waste to Energy", instansi: "Badan Riset dan Inovasi Nasional" },
];

export default function Pakar() {
    return (
      <div className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10">Daftar Nama Pakar</h1>
          <div className="h-8"></div>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-center">No</th>
                  <th className="border px-4 py-2 text-center">Nama</th>
                  <th className="border px-4 py-2 text-center">Bidang Kepakaran</th>
                  <th className="border px-4 py-2 text-center">Instansi/Organisasi</th>
                </tr>
              </thead>
              <tbody>
                {experts.map((expert) => (
                  <tr key={expert.no} className="hover:bg-gray-50">
                    <td className="border px-4 py-2 text-center">{expert.no}</td>
                    <td className="border px-4 py-2">{expert.nama}</td>
                    <td className="border px-4 py-2">{expert.bidang}</td>
                    <td className="border px-4 py-2">{expert.instansi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }