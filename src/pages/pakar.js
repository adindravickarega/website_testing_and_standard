import React from 'react';

const experts = [
  { no: 1, nama: "Tatang Hernas Soerawidjaja", bidang: "Bioenergi", instansi: "Institut Teknologi Bandung", link: "https://www.scopus.com/authid/detail.uri?authorId=6505685589" },
  { no: 2, nama: "Izmirta Rachman", bidang: "Bioetanol", instansi: "Ketua Asosiasi Produsen Spiritus dan etanol Indonesia", link: "https://www.linkedin.com/in/izmirta-rachman-a1a6566b/?originalSubdomain=id" },
  { no: 3, nama: "Prof. Udin Hasanudin", bidang: "Biogas", instansi: "Universitas Lampung", link: "https://www.linkedin.com/in/udin-hasanudin-761b1977/?originalSubdomain=id" },
  { no: 4, nama: "Iman Kartolaksono Reksowardojo", bidang: "Biodiesel", instansi: "Institut Teknologi Bandung", link: "https://scholar.google.co.id/citations?user=isKuqzAAAAAJ&hl=en" },
  { no: 5, nama: "Unggul Priyanto", bidang: "Green Fuel", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=G4K9LOYAAAAJ&hl=en" },
  { no: 6, nama: "Semuel Pati Senda", bidang: "Biogas", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?user=pp_6wusAAAAJ&hl=id&oi=ao" },
  { no: 7, nama: "Hariana", bidang: "Biomassa Co-firing", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?hl=id&user=q9tWaw8AAAAJ" },
  { no: 8, nama: "Sony Solistia Wirawan", bidang: "Biodiesel", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?user=UPArZEcAAAAJ&hl=id" },
  { no: 9, nama: "Agus Kismanto", bidang: "Waste to Energy", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=5mdX54oAAAAJ&hl=en" },
  { no: 10, nama: "Didik Rostyono", bidang: "Energi Angin", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?hl=en&user=n-rdPBIAAAAJ" },
  { no: 11, nama: "Verina J. Wargadalam", bidang: "Bioenergi, Fuel Cell", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=glxkJUoAAAAJ&hl=id" },
  { no: 12, nama: "Arief Heru Kuncoro", bidang: "Sistem Energi dan Tekno-Ekonomi Energi Baru dan Energi Terbarukan", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=3dPy9U8AAAAJ&hl=id" },
  { no: 13, nama: "Hari Soekarno", bidang: "Mikrohidro", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?hl=id&user=VBGt4KgAAAAJ" },
  { no: 14, nama: "Arya Rezavidi", bidang: "Energi Surya", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?hl=id&user=yu4wgkAAAAAJ" },
  { no: 15, nama: "Andhika Prastawa", bidang: "Energi Surya", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=1oJsfdkAAAAJ&hl=id" },
  { no: 16, nama: "Soeripno Martosaputro", bidang: "Energi Angin", instansi: "Ketua Masyarakat Energi Angin Indonesia", link: "https://www.linkedin.com/in/soeripno-martosaputro-662b2535/?originalSubdomain=id" },
  { no: 17, nama: "Topan Setiadipura", bidang: "Energi Nuklir", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?user=kuixZKkAAAAJ&hl=id" },
  { no: 18, nama: "Surip Widodo", bidang: "Energi Nuklir", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?user=Vea_nNQAAAAJ&hl=id" },
  { no: 19, nama: "I Wayan Ngarayana", bidang: "Energi Nuklir", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?user=UpfFycQAAAAJ&hl=en" },
  { no: 20, nama: "M. Indra Al. Irsyad", bidang: "Sistem Energi dan Tekno-Ekonomi Energi Baru dan Energi Terbarukan", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?user=YgHu_LcAAAAJ&hl=id" },
  { no: 21, nama: "Bono Pranoto", bidang: "Mikrohidro", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?user=pdl1mWkAAAAJ&hl=id" },
  { no: 22, nama: "Vetri Nurliyanti", bidang: "Energi Surya, Mikrogrid", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=Gov1uVsAAAAJ&hl=en" },
  { no: 23, nama: "Nurry Widya Hesty", bidang: "Energi Angin", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.co.id/citations?user=f3PjaC0AAAAJ&hl=en" },
  { no: 24, nama: "Arfie Ikhsan Firmansyah", bidang: "Mikrohidro, Energi Laut", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=GJYC8csAAAAJ&hl=en" },
  { no: 25, nama: "Silvy Rahmah Fithri", bidang: "Energi Angin", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=YZ2BZnwAAAAJ&hl=id" },
  { no: 26, nama: "Nina Konitat Supriatna", bidang: "Biogas, Waste to Energy", instansi: "Badan Riset dan Inovasi Nasional", link: "https://scholar.google.com/citations?user=K-CCOG0AAAAJ&hl=id" },
];

export default function Pakar() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Daftar Nama Pakar</h1>
        <div className="overflow-x-auto mt-4 py-5">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-center">No</th>
                <th className="border px-4 py-2 text-center">Nama</th>
                <th className="border px-4 py-2 text-center">Bidang Kepakaran</th>
                <th className="border px-4 py-2 text-center">Instansi/Organisasi</th>
                <th className="border px-4 py-2 text-center">Link Scopus/Google Scholar/Linkedin</th>
              </tr>
            </thead>
            <tbody>
              {experts.map((expert) => (
                <tr key={expert.no} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 text-center">{expert.no}</td>
                  <td className="border px-4 py-2">{expert.nama}</td>
                  <td className="border px-4 py-2">{expert.bidang}</td>
                  <td className="border px-4 py-2">{expert.instansi}</td>
                  <td className="border px-4 py-2 text-center">
                    {expert.link ? (
                      <a href={expert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Profil
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
