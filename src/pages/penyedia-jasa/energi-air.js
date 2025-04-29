import React from 'react';
import TestingTable from '../../components/TestingTable';

const EnergiAirTesting = () => {
    const data = [
        {
            no: 1,
            service: 'Jasa Layanan',
            description: 'Jasa layanan mencakup: Pemetaan, Pra Studi Kelayakan, Studi Kelayakan, Detail Engineering Design, dan Pengembangan Pembangkit Listrik Hidro skala kecil (Minihidro, Mikrohidro, dan Pikohidro).',
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
    ];


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Air</h1>
                <h3 className="display-6 text-secondary">Testing</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiAirTesting;
