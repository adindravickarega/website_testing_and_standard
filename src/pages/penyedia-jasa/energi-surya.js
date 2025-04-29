import React from 'react';
import TestingTable from '../../components/TestingTable';

const EnergiSuryaTesting = () => {
    const data = [
        {
            no: 1,
            service: 'Jasa Layanan',
            description: 'Jasa layanan mencakup: Pemetaan, Pra Studi Kelayakan, Studi Kelayakan, Detail Engineering Design, dan Pengembangan Pembangkit Listrik Tenaga Surya.',
            provider: {
                name: 'Balai Besar Survei dan Pengujian Ketenagalistrikan, Energi Baru, Terbarukan, dan Konservasi Energi',
                address: 'Jalan Ciledug Raya Kav 109, Cipulir, Kebayoran Lama, Jakarta Selatan',
                contact: {
                    phone: '+62 (021) 72798311',
                    fax: '+62 (021) 72798202',
                },
                coordinates: [-6.238611, 106.766944], // Koordinat Lokasi: 6°14'19"S 106°46'01"E
            },
            link: 'https://p3tkebt.esdm.go.id/home',
        },
        {
            no: 2,
            service: 'Pengujian Komponen Sistem Fotovoltaik – Sistem PLTS',
            description: 'Pengujian Sistem PLTS dilakukan untuk memeriksa kesesuaian spesifikasi teknis komponen-komponen dan sistem PLTS yaitu Penerangan Jalan Umum yang dinyatakan manufaktur meliputi modul surya, baterai, SCC dan beban DC yang dapat digunakan selama perioda waktu tertentu; serta untuk memberikan gambaran teknis karakteristik dan kinerja sistem surya terpadu berdasarkan standar SNI IEC 62124: 2016.',
            provider: {
                name: 'Laboratorium Konversi Energi, Direktorat Pengelolaan Laboratorium, Fasilitas Riset, dan Kawasan Sains dan Teknologi',
                address: '',
                contact: {
                    email: 'layanan_sains@brin.go.id',
                },
                coordinates: [-6.3525, 106.6719], // Koordinat Lokasi: 6°21'09"S 106°40'19"E
            },
            link: 'https://elsa.brin.go.id/layanan/index/Layanan%20Pengujian%20Komponen%20Sistem%20Fotovoltaik-Sistem%20PLTS/3047',
        },
        {
            no: 3,
            service: 'Layanan Pengujian Kualitas Modul Fotovoltaik',
            description: 'Pengujian Visual Test (MQT 01); dilakukan inspeksi secara visual menggunakan kamera digital dan kamera electrolumenensce pada ruangan khusus yang gelap tanpa cahaya, sehingga hasil akhir akan terlihat apakah terdapat micro-crack. Pengujian Performa Daya (MQT 06), modul PV akan dipaparankan radiasi dengan mengunakan Sun Simulator dengan parameter uji yang sesuai dengan Standard Test Condition (STC) sehingga nantinya modul PV akan menghasilkan daya sesuai dengan spesifikasi teknis produk. Adanya kerusakan cell atau micro-crack akan mengakibatkan sebagian daya akan hilang atau penurunan nilai maksimum daya.',
            provider: null,
            link: 'https://elsa.brin.go.id/layanan/index/Layanan%20Pengujian%20Komponen%20Sistem%20Fotovoltaik-Uji%20BCR/3023',
        },
        {
            no: 4,
            service: 'Layanan Pengujian Komponen Sistem Fotovoltaik-Uji Inverter',
            description: 'Pengujian Inverter dilakukan untuk memeriksa kesesuaian spesifikasi teknis yang dinyatakan manufaktur, serta untuk memberikan gambaran teknis tentang unjuk kerja inverter (kapasitas maksimum, gelombang arus dan tegangan keluaran, efisiensi, THD) berdasarkan standar IEC 61683-1999.',
            provider: null,
            link: 'https://elsa.brin.go.id/layanan/index/Layanan%20Pengujian%20Komponen%20Sistem%20Fotovoltaik-Uji%20BCR/3023',
        },
        {
            no: 5,
            service: 'Layanan Pengujian Komponen Sistem Fotovoltaik-Uji BCR',
            description: 'Pengujian BCR (Battery Charge Controller) dilakukan untuk memeriksa kesesuaian spesifikasi teknis yang dinyatakan manufaktur, serta untuk menguji performansi elektris berdasarkan standar SNI-04-6391-2000.',
            provider: null,
            link: 'https://elsa.brin.go.id/layanan/index/Layanan%20Pengujian%20Komponen%20Sistem%20Fotovoltaik-Uji%20BCR/3023',
        },
        {
            no: 6,
            service: 'Layanan Pengujian Komponen Sistem Fotovoltaik - Pengujian Modul Surya',
            description: 'Pengujian modul surya dilakukan untuk memeriksa kesesuaian spesifikasi teknis yang diberikan oleh manufaktur, serta untuk memberikan gambaran teknis tentang unjuk kerja modul yang digambarkan melalui besaran daya keluaran maksimum (Pm) berdasarkan SNI 04-3850.2-1995.',
            provider: null,
            link: 'https://elsa.brin.go.id/layanan/index/Layanan%20Pengujian%20Komponen%20Sistem%20Fotovoltaik%20-%20Pengujian%20Modul%20surya/2982',
        },
        {
            no: 7,
            service: 'Layanan Pengujian Komponen Sistem Fotovoltaik - Pengujian Baterai',
            description: 'Pengujian baterai dilakukan untuk memeriksa kesesuaian spesifikasi teknis yang dinyatakan manufaktur, serta untuk memberikan gambaran teknis tentang unjuk kerja baterai baik berupa uji kapasitas maupun uji siklus berdasarkan standar SNI 04-6392-2000.',
            provider: null,
            link: 'https://elsa.brin.go.id/layanan/index/Layanan%20Pengujian%20Komponen%20Sistem%20Fotovoltaik%20-%20Pengujian%20Baterai/2960',
        },
    ];

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Surya</h1>
                <h3 className="display-6 text-secondary">Testing</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiSuryaTesting;
