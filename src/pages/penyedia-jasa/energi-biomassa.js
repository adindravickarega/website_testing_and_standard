import React from 'react';
import TestingTable from '../../components/TestingTable';

const EnergiBiomassaTesting = () => {
    const data = [
        {
            no: 1,
            service: 'Jasa Layanan',
            description: '',
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
            service: 'Pellet Biomassa untuk Energi',
            description: 'Pengujian sesuai SNI 8675 : 2018 mencakup parameter uji: Densitas (kerapatan), Kadar abu, Kadar air, Volatile matter, Kadar karbon tetap, Nilai kalor netto, Kadar klor, Kadar kalium (sebagai K₂O), Kadar natrium (sebagai Na₂O), Kadar sulfur.',
            provider: null,
            link: '',
        },
        {
            no: 3,
            service: 'Pelet Biomassa untuk Pembangkit Listrik',
            description: 'Pengujian sesuai SNI 8951:2020 mencakup parameter uji: Densitas (kerapatan), Kadar abu, Kadar air, Zat mudah menguap, Kadar karbon tetap, Nilai kalor netto, Kadar klorin, Kadar kalium (sebagai K₂O), Kadar natrium (sebagai Na₂O), Kadar sulfur total, Hardgrove grindabilty index, Ash fusion temperature :IDT (at reducing atmosphere).',
            provider: null,
            link: '',
        },
    ];


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Biomassa</h1>
                <h3 className="display-6 text-secondary">Testing</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiBiomassaTesting;
