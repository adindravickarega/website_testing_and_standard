import React from 'react';
import StandardTable from '../../components/StandardTable';

const EnergiNuklirStandard = () => {
    const data = [
        {
            no: 1,
            item: 'SNI ISO 12749-5:2018',
            nama: 'Energi nuklir, teknologi nuklir dan proteksi radiologi - Kosakata - Bagian 5 : Reaktor Nuklir (ISO 12749-5:2018, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13858-sniiso12749-52018',
            description: [],
        },
        {
            no: 2,
            item: 'SNI 04-6265.1-2000',
            nama: 'Instrumentasi nuklir - Sistem pengukuran dan instrumen listrik yang menggunakan sumber radiasi pengionan - Aspek umum',
            link: 'https://pesta.bsn.go.id/produk/detail/5796-sni04-62651-2000',
            description: [],
        },
        {
            no: 3,
            item: 'SNI 04-6266-2000',
            nama: 'Pembangkit listrik tenaga nuklir - Ruang kendali utama - Verifikasi dan perlakuan desain',
            link: 'https://pesta.bsn.go.id/produk/detail/5798-sni04-6266-2000',
            description: [],
        },
        {
            no: 4,
            item: 'SNI IEC 60780:2008',
            nama: 'Pembangkit Listrik Tenaga Nuklir - Peralatan elektris sistem keselamatan – Kualifikasi',
            link: 'https://pesta.bsn.go.id/produk/detail/7611-sniiec607802008',
            description: [],
        },
        {
            no: 5,
            item: 'SNI IEC 60231D:1975',
            nama: 'Prinsip umum instrumentasi reaktor nuklir - Prinsip instrumentasi untuk reaktor air bertekanan (IEC 60231D: 1975, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13609-sniiec60231d1975',
            description: [],
        },
        {
            no: 6,
            item: 'SNI 04-6266-2000',
            nama: 'Pembangkit listrik tenaga nuklir - Ruang kendali utama - Verifikasi dan perlakuan desain',
            link: 'https://pesta.bsn.go.id/produk/detail/5798-sni04-6266-2000',
            description: [],
        },
        {
            no: 7,
            item: 'SNI 18-2034-1990',
            nama: 'Pedoman penentuan tapak reaktor nuklir',
            link: null,
            description: [],
        },
        {
            no: 8,
            item: 'SNI 18-4149-1996',
            nama: 'Kualifikasi personel untuk operasi dan pemeliharaan reaktor nuklir',
            link: null,
            description: [],
        },
        {
            no: 9,
            item: 'SNI 18-7103-2005',
            nama: 'Pembangkit listrik tenaga nuklir - Sistem instrumentasi dan kendali yang penting untuk keselamatan - Klasifikasi',
            link: 'https://pesta.bsn.go.id/produk/detail/6871-sni18-7103-2005',
            description: [],
        },
        {
            no: 10,
            item: 'SNI 8873:2019',
            nama: 'Standar pengujian material grafit untuk komponen reaktor nuklir berpendingin gas (ASTM C781-18, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/12515-sni88732019',
            description: [],
        },
        {
            no: 11,
            item: 'SNI IEC 60231D:1975',
            nama: 'Prinsip umum instrumentasi reaktor nuklir - Prinsip instrumentasi untuk reaktor air bertekanan (IEC 60231D: 1975, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13609-sniiec60231d1975',
            description: [],
        },
        {
            no: 12,
            item: 'SNI IEC 60557:2009',
            nama: 'Persitilahan instrumentasi dalam bidang reaktor nuklir',
            link: 'https://pesta.bsn.go.id/produk/detail/7941-sniiec605572009',
            description: [],
        }
        
    ];

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Nuklir</h1>
                <h3 className="display-6 text-secondary">Standard</h3>
            </div>
            <StandardTable data={data} />
        </div>
    );
};

export default EnergiNuklirStandard;
