import React from 'react';
import TestingTable from '../../components/TestingTable';

const EnergiAnginTesting = () => {
    const data = [
        {
            no: 1,
            service: 'Jasa Layanan',
            description: 'Jasa layanan mencakup: Pemetaan, Pra Studi Kelayakan, Studi Kelayakan, Detail Engineering Design, dan Pengembangan Pembangkit Listrik Tenaga Bayu',
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
            service: 'Aerodinamika, Aeroelastika, dan Aeroakustika (Model Uji Wind Tunnel)',
            description: 'Model uji wind tunnel (terowongan angin) dirancang dan dibuat untuk kepentingan pengujian eksperimental pada wind tunnel. Pembuatan model uji sudah termasuk jasa desain dengan perangkat lunak CATIA, manufaktur menggunakan mesin CNC dan peralatan lainnya',
            provider: {
                name: 'Direktorat Pengelolaan Laboratorium, Fasilitas Riset, dan Kawasan Sains dan Teknologi',
                address: 'Puspiptek - Serpong, Kawasan Sains dan Teknologi BJ. Habibie Gedung 240, Serpong, Tangerang Selatan, Banten',
                contact: {
                    email: 'layanan_sains@brin.go.id',
                },
                coordinates: null, // Tidak ada koordinat
            },
            link: 'https://elsa.brin.go.id/layanan/index/Pembuatan%20Model%20Uji%20Wind%20Tunnel%20di%20LA3/3814',
        },
        {
            no: 3,
            service: 'Kalibrasi Anemometer',
            description: 'Kalibrasi alat ukur anemometer. Kalibrasi sudah termasuk stiker dan sertifikat kalibrasi KAN ISO 17025.',
            provider: {
                name: 'Prokalindo Global Presisi',
                address: 'Jl. Tipar Sari No.12, Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat 16452',
                contact: {
                    link: 'https://prokalindo.com/?p=4388',
                },
                coordinates: null, // Tidak ada koordinat
            },
            link: 'https://prokalindo.com/?p=4388',
        },
        {
            no: 4,
            service: 'Jasa Kalibrasi Alat Meteorologi, Klimatologi, dan Geofisika',
            description: 'Jasa Kalibrasi Portable Weather Station (5 – 11 sensor)',
            provider: {
                name: 'PTSP Online BMKG',
                address: '',
                contact: {
                    link: 'https://ptsp.bmkg.go.id/katalog_pelayanan/layanan/5',
                },
                coordinates: null, // Tidak ada koordinat
            },
            link: 'https://ptsp.bmkg.go.id/katalog_pelayanan/layanan/5',
        },
    ];

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Angin</h1>
                <h3 className="display-6 text-secondary">Testing</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiAnginTesting;
