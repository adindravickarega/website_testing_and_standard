import React from 'react';
import StandardTable from '../../components/StandardTable';

const EnergiAnginStandard = () => {
    const data = [
        {
            no: 1,
            item: 'SNI 04-3851.1-1995',
            nama: 'Sistem konversi energi angin. Bagian 1: Umum',
            link: 'https://pesta.bsn.go.id/produk/detail/4249-sni04-38511-1995',
            description: [],
        },
        {
            no: 2,
            item: 'SNI 04-3851.2-1995',
            nama: 'Sistem konversi energi angin. Bagian 2: Pedoman pendekatan pengukuran kecepatan dan arah angin, perhitungan dasar untuk daya dan energi angin dan turbin angin',
            link: 'https://pesta.bsn.go.id/produk/detail/4250-sni04-38512-1995',
            description: [],
        },
        {
            no: 3,
            item: 'SNI 04-6299.7-2000',
            nama: 'Regulasi untuk sertifikasi SKEA (sistem konversi energi angin). Bab 7: Instalasi listrik untuk SKEA',
            link: 'https://pesta.bsn.go.id/produk/detail/5850-sni04-62997-2000',
            description: [],
        },
        {
            no: 4,
            item: 'SNI 04-6612.1-2001',
            nama: 'Sistem konversi energi angin (SKEA) - Bagian 1: Persyaratan keselamatan untuk rancangan struktur SKEA',
            link: 'https://pesta.bsn.go.id/produk/detail/6235-sni04-66121-2001',
            description: [],
        },
        {
            no: 5,
            item: 'SNI 04-6612.2-2001',
            nama: 'Sistem konversi energi angin (SKEA) - Bagian 2: Persyaratan keselamatan untuk sistem kontrol dan proteksi, sistem listrik, instalasi, perakitan dan pendirian turbin angin, komisioning, operasi dan pemeliharaan',
            link: 'https://pesta.bsn.go.id/produk/detail/6236-sni04-66122-2001',
            description: [],
        },
        {
            no: 6,
            item: 'SNI 3851-2:2018',
            nama: 'Sistem konversi energi angin. Bagian 2: Pedoman pengukuran kecepatan dan arah angin untuk perhitungan dasar daya, energi angin dan turbin angin',
            link: 'https://pesta.bsn.go.id/produk/detail/11851-sni3851-22018',
            description: [],
        },
        {
            no: 7,
            item: 'SNI 9120:2022',
            nama: 'Metode perhitungan potensi energi angin',
            link: 'https://pesta.bsn.go.id/produk/detail/14245-sni91202022',
            description: [],
        },
        {
            no: 8,
            item: 'SNI IEC 61400-12-1:2017',
            nama: 'Sistem pembangkit energi angin - Bagian 12-1: Pengukuran kinerja daya listrik yang dihasilkan oleh turbin angin (IEC 61400-12-1:2017, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/11971-sniiec61400-12-12017',
            description: [],
        },
        {
            no: 9,
            item: 'SNI IEC 61400-12-1:2016',
            nama: 'Turbin angin - Bagian 12-1: Pengukuran kinerja daya listrik yang dihasilkan oleh turbin angin (IEC 61400-12-1:2005, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/10978-sniiec61400-12-12016',
            description: [],
        },
        {
            no: 10,
            item: 'SNI IEC 61400-12-2:2018',
            nama: 'Turbin angin - Bagian 12-2: Unjuk kerja daya turbin angin yang menghasilkan listrik berdasarkan pemasangan anemometer pada nasel (IEC 61400-12-2:2013, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/11800-sniiec61400-12-22018',
            description: [],
        },
        {
            no: 11,
            item: 'SNI IEC 61400-21-1:2019',
            nama: 'Sistem pembangkit listrik tenaga bayu - Bagian 21-1: Pengukuran dan pengkajian karakteristik listrik - Turbin angin (IEC 61400-21-1:2019, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13098-sniiec61400-21-12019',
            description: [],
        },
        {
            no: 12,
            item: 'SNI IEC 61400-24:2019',
            nama: 'Sistem Pembangkit Listrik Tenaga Bayu - Bagian 24: Proteksi Petir (IEC 61400-24:2019, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13097-sniiec61400-242019',
            description: [],
        },
        {
            no: 13,
            item: 'SNI IEC 61400-25-1:2017',
            nama: 'Sistem pembangkit listrik tenaga bayu - Bagian 25-1: Komunikasi untuk pemantauan dan pengontrolan pembangkit listrik tenaga bayu - Penjelasan menyeluruh tentang prinsip dan model (IEC 61400-25-1:2017, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13732-sniiec61400-25-12017',
            description: [],
        },
        {
            no: 14,
            item: 'SNI IEC 61400-25-5:2017',
            nama: 'Sistem pembangkit listrik tenaga bayu - Bagian 25-5: Komunikasi untuk pemantauan dan pengontrolan pembangkit listrik tenaga bayu - Uji pemenuhan (IEC 61400-25-5:2017, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13731-rasniiec61400-25-52017ditetapkanolehbsntahun2021',
            description: [],
        },
        {
            no: 15,
            item: 'SNI IEC 61400-26-1:2019',
            nama: 'Sistem pembangkit listrik tenaga bayu - Bagian 26-1: Ketersediaan untuk pembangkit listrik tenaga bayu (IEC 61400-26-1:2019, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/12442-sniiec61400-26-12019',
            description: [],
        },
        {
            no: 16,
            item: 'SNI IEC 61400-6:2020',
            nama: 'Sistem pembangkit listrik tenaga bayu: Bagian 6: Persyaratan rancangan menara dan fondasi (IEC 61400-6:2020,IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14246-sniiec61400-62020',
            description: [],
        },
        {
            no: 17,
            item: 'SNI 04-6207-2000',
            nama: 'Pedoman konfigurasi sistem hibrida angin - Diesel',
            link: 'https://pesta.bsn.go.id/produk/detail/5714-sni04-6207-2000',
            description: [],
        },
        {
            no: 18,
            item: 'SNI 04-6292.2.80-2006',
            nama: 'Peranti listrik rumah tangga dan sejenisnya - Keselamatan - Bagian 2-80: Persyaratan khusus untuk kipas angin',
            link: 'https://pesta.bsn.go.id/produk/detail/7155-sni04-6292280-2006',
            description: [],
        },
        {
            no: 19,
            item: 'SNI 6207:2018',
            nama: 'Pedoman konfigurasi sistem hibrida angin-diesel',
            link: 'https://pesta.bsn.go.id/produk/detail/11849-sni62072018',
            description: [],
        },
        {
            no: 20,
            item: 'SNI 7609:2011',
            nama: 'Peranti listrik rumah tangga dan sejenis -Keselamatan - Bagian 2-80: Persyaratan khusus untuk kipas angin',
            link: 'https://pesta.bsn.go.id/produk/detail/8309-sni76092011',
            description: [],
        },
        {
            no: 21,
            item: 'SNI 6612-3-1:2021',
            nama: 'Pembangkit listrik tenaga bayu - Bagian 3-1: Sistem keselamatan, peralatan protektif dan pemantauan',
            link: 'https://pesta.bsn.go.id/produk/detail/13763-sni6612-3-12021',
            description: [],
        },
        {
            no: 22,
            item: 'SNI 8398:2017',
            nama: 'Panduan studi kelayakan pembangunan Pembangkit Listrik Tenaga Bayu',
            link: 'https://pesta.bsn.go.id/produk/detail/11367-sni83982017',
            description: [],
        },
        {
            no: 23,
            item: 'SNI 3851-1:2018',
            nama: 'Pembangkit Listrik Tenaga Bayu (PLTB) - Istilah, definisi, simbol dan klasifikasi - Bagian 1: Umum',
            link: 'https://pesta.bsn.go.id/produk/detail/11972-sni3851-12018',
            description: [],
        },
        {
            no: 24,
            item: 'SNI IEC 61400-1:2019',
            nama: 'Sistem pembangkit listrik tenaga bayu - Bagian 1: Persyaratan desain (IEC 61400-1:2019,IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14244-sniiec61400-12019',
            description: [],
        },
        {
            no: 25,
            item: 'SNI IEC TS 63102 :2021',
            nama: 'Metode asesmen kepatuhan kode grid (grid code) untuk hubungan grid pembangkit listrik tenaga bayu (PLTB) dan pembangkit listrik tenaga surya (PLTS) (IEC TS 63102:2021, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14265-iects631022021',
            description: [],
        },
        {
            no: 26,
            item: 'SNI IEC TS 63102 :2021',
            nama: 'Metode asesmen kepatuhan kode grid (grid code) untuk hubungan grid pembangkit listrik tenaga bayu (PLTB) dan pembangkit listrik tenaga surya (PLTS) (IEC TS 63102:2021, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14265-iects631022021',
            description: [],
        },
        {
            no: 27,
            item: 'SNI IEC 61400-2:2016',
            nama: 'Turbin angin - Bagian 2: Persyaratan rancangan turbin angin skala kecil (IEC 61400-2:2006, IDT)',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/10977',
                'https://pesta.bsn.go.id/produk/detail/10977-sniiec61400-22016'
            ],
        },
        {
            no: 28,
            item: 'SNI IEC 61400-2:2013',
            nama: 'Turbin angin – Bagian 2: Turbin angin skala kecil (IEC 61400-2:2013 dan IEC 61400-2:2013/Cor1:2019, IDT)',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/14940',
                'https://pesta.bsn.go.id/produk/detail/14940-sniiec61400-22013'
            ],
        }
    ];


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Angin</h1>
                <h3 className="display-6 text-secondary">Standard</h3>
            </div>
            <StandardTable data={data} />
        </div>
    );
};

export default EnergiAnginStandard;
