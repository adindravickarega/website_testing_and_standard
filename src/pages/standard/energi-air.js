import React from 'react';
import StandardTable from '../../components/StandardTable';

const EnergiAirStandard = () => {
    const data = [
        {
            no: 1,
            item: 'SNI 9114:2022',
            nama: 'Metode perhitungan potensi energi air',
            link: 'https://pesta.bsn.go.id/produk/detail/14169-sni91142022',
            description: [],
        },
        {
            no: 2,
            item: 'SNI 8396:2017',
            nama: 'Klasifikasi pembangkit listrik tenaga air',
            link: 'https://pesta.bsn.go.id/produk/detail/11501-sni83962017',
            description: [],
        },
        {
            no: 3,
            item: 'SNI 8396:2019',
            nama: 'Klasifikasi pembangkit listrik tenaga air',
            link: 'https://pesta.bsn.go.id/produk/detail/12551-83962019',
            description: [],
        },
        {
            no: 4,
            item: 'SNI 8397:2017',
            nama: 'Panduan studi kelayakan pembangunan Pembangkit Listrik Tenaga Mikro Hidro (PLTMH)',
            link: null,
            description: [],
        },
        {
            no: 5,
            item: 'SNI 8397:2023',
            nama: 'Panduan prastudi kelayakan dan studi kelayakan pembangunan Pembangkit Listrik Tenaga Mikrohidro (PLTMH)',
            link: 'https://pesta.bsn.go.id/produk/detail/14977-sni83972023',
            description: [],
        },
        {
            no: 6,
            item: 'SNI 8498:2018',
            nama: 'Prosedur uji keberterimaan pabrikasi turbin air untuk Pembangkit Listrik Tenaga Mikro Hidro (PLTMH)',
            link: 'https://pesta.bsn.go.id/produk/detail/11834-sni84982018',
            description: [],
        },
        {
            no: 7,
            item: 'SNI 8499:2018',
            nama: 'Spesifikasi teknis turbin Francis untuk Pembangkit Listrik Tenaga Mikro Hidro (PLTMH)',
            link: 'https://pesta.bsn.go.id/produk/detail/11833-sni84992018',
            description: [],
        },
        {
            no: 8,
            item: 'SNI 8500:2018',
            nama: 'Spesifikasi teknis turbin propeler untuk Pembangkit Listrik Tenaga Mikro Hidro (PLTMH)',
            link: 'https://pesta.bsn.go.id/produk/detail/11835-sni85002018',
            description: [],
        },
        {
            no: 9,
            item: 'SNI 8634:2018',
            nama: 'Spesifikasi teknis pembangkit listrik tenaga pikohidro',
            link: 'https://pesta.bsn.go.id/produk/detail/11975-sni86342018',
            description: [],
        },
        {
            no: 10,
            item: 'SNI 8636:2018',
            nama: 'Spesifikasi teknis turbin pelton untuk pembangkit listrik tenaga mikro hidro (PLTMH)',
            link: 'https://pesta.bsn.go.id/produk/detail/11974-sni86362018',
            description: [],
        },
        {
            no: 11,
            item: 'SNI 8931-1:2020',
            nama: 'Perancangan sistem Pembangkit Listrik Tenaga Mikrohidro (PLTMH) Kelas D – Bagian 1: Komponen sipil',
            link: 'https://pesta.bsn.go.id/produk/detail/13117-sni8931-12020',
            description: [],
        },
        {
            no: 12,
            item: 'SNI 8931-2:2021',
            nama: 'Perancangan sistem Pembangkit Listrik Tenaga Mikrohidro (PLTMH) kelas D – Bagian 2: Komponen mekanikal elektrikal',
            link: 'https://pesta.bsn.go.id/produk/detail/13698-sni8931-22021',
            description: [],
        },
        {
            no: 13,
            item: 'SNI 8932:2020',
            nama: 'Panduan studi kelayakan Pembangkit Listrik Tenaga Minihidro (PLTM)',
            link: 'https://pesta.bsn.go.id/produk/detail/13191-sni89322020',
            description: [],
        },
        {
            no: 14,
            item: 'SNI 8951:2020',
            nama: 'Pelet biomassa untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/13141-sni89512020',
            description: [],
        },
        {
            no: 15,
            item: 'SNI 8966:2021',
            nama: 'Bahan bakar jumputan padat untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/13199-sni89662021',
            description: [],
        },
        {
            no: 16,
            item: 'SNI 9015:2021',
            nama: 'Manajemen proyek Pembangkit Listrik Tenaga Minihidro (PLTM)',
            link: 'https://pesta.bsn.go.id/produk/detail/13618-sni90152021',
            description: [],
        },
        {
            no: 17,
            item: 'SNI IEC 62006:2013',
            nama: 'Mesin hidrolik - Uji keberterimaan instalasi pembangkit listrik tenaga air skala kecil',
            link: 'https://pesta.bsn.go.id/produk/detail/9517-sniiec620062013',
            description: [],
        },
        {
            no: 18,
            item: 'SNI 7931:2013',
            nama: 'Perancangan kapasitas dan layout sistem pembangkit listrik tenaga mikrohidro jenis cross-flow sampai dengan daya terbangkit 25 kW',
            link: 'https://pesta.bsn.go.id/produk/detail/9694-sni79312013',
            description: [],
        },
        {
            no: 19,
            item: 'SNI 7931:2022',
            nama: 'Perancangan Pembangkit Listrik Tenaga Mikrohidro (PLTMH) kelas A',
            link: 'https://pesta.bsn.go.id/produk/detail/14170-sni79312022',
            description: [],
        },
        {
            no: 20,
            item: 'SNI 8277:2016',
            nama: 'Panduan komisioning pembangkit listrik tenaga mikro hidro (PLTMH) kapasitas hingga 100 kW',
            link: 'https://pesta.bsn.go.id/produk/detail/10777-sni82772016',
            description: [],
        },
        {
            no: 21,
            item: 'SNI 8277:2020',
            nama: 'Panduan komisioning Pembangkit Listrik Tenaga Mikrohidro (PLTMH)',
            link: 'https://pesta.bsn.go.id/produk/detail/13118-sni82772020',
            description: [],
        },
        {
            no: 22,
            item: 'SNI IEC 62006:2013',
            nama: 'Mesin hidrolik - Uji keberterimaan instalasi pembangkit listrik tenaga air skala kecil',
            link: 'https://pesta.bsn.go.id/produk/detail/9517-sniiec620062013',
            description: [],
        },
        {
            no: 23,
            item: 'SNI 04-1930-1990',
            nama: 'Pedoman peralatan elektromekanik untuk Pusat Listrik Tenaga Minihidro (PLTM) Bagian 1 : Uraian rencana dan kondisi operasi instalasi dari pusat pembangkit',
            link: 'https://pesta.bsn.go.id/produk/detail/2282-sni04-1930-1990',
            description: [],
        },
        {
            no: 24,
            item: 'SNI 04-3849.2-1995',
            nama: 'Instalasi pembangkit listrik pedesaan. Bag. 2 : Pusat Listrik Tenaga Microhidro berkapasitas sampai 50 KW (PLTM - P50). Subbagian 2 : Pembuatan, pemasangan dan pengujian',
            link: 'https://pesta.bsn.go.id/produk/detail/4230-sni04-38492-1995',
            description: [],
        },
        {
            no: 25,
            item: 'SNI 04-3849.2.1-1996',
            nama: 'Instalasi pembangkit listrik pedesaan - Bagian 2: Pusat listrik tenaga mikrohidro berkapsitas sampai 50 kW (PLTM-P50)',
            link: 'https://pesta.bsn.go.id/produk/detail/4246-sni04-384921-1996',
            description: [],
        },
        {
            no: 26,
            item: 'SNI 7931:2013',
            nama: 'Perancangan kapasitas dan layout sistem Pembangkit Listrik Tenaga Mikrohidro jenis cross-flow sampai dengan daya terbangkit 25 kW',
            link: 'https://pesta.bsn.go.id/produk/detail/9694-sni79312013',
            description: [],
        },
        {
            no: 27,
            item: 'SNI 8277:2016',
            nama: 'Panduan komisioning pembangkit listrik tenaga mikro hidro (PLTMH) kapasitas hingga 100 kW',
            link: 'https://pesta.bsn.go.id/produk/detail/10777-sni82772016',
            description: [],
        },
        {
            no: 28,
            item: 'SNI 8875:2020',
            nama: 'Minyak nabati untuk produksi biohidrokarbon',
            link: 'https://pesta.bsn.go.id/produk/detail/12688-sni88752020',
            description: [],
        },
        {
            no: 29,
            item: 'SNI 8931-2:2021',
            nama: 'Perancangan sistem Pembangkit Listrik Tenaga Mikrohidro (PLTMH) kelas D – Bagian 2: Komponen mekanikal elektrikal',
            link: 'https://pesta.bsn.go.id/produk/detail/13698-sni8931-22021',
            description: [],
        },
        {
            no: 30,
            item: 'SNI 9015:2021',
            nama: 'Manajemen proyek Pembangkit Listrik Tenaga Minihidro (PLTM)',
            link: 'https://pesta.bsn.go.id/produk/detail/13618-sni90152021',
            description: [],
        },
        {
            no: 31,
            item: 'SNI 04-1930-1990',
            nama: 'Pedoman peralatan elektromekanik untuk Pusat Listrik Tenaga Minihidro (PLTM) Bagian 1 : Uraian rencana dan kondisi operasi instalasi dari pusat pembangkit',
            link: 'https://pesta.bsn.go.id/produk/detail/2282-sni04-1930-1990',
            description: [],
        },
        {
            no: 32,
            item: 'SNI 04-1930.3-1995',
            nama: 'Pedoman bagi peralatan elektromekanik untuk pusat listrik tenaga minihidro (PLTM) - Bagian 3: Pemeriksaan, penyerahan dan pemeliharaan',
            link: 'https://pesta.bsn.go.id/produk/detail/6486-sni04-19303-1995',
            description: [],
        },
        {
            no: 33,
            item: 'SNI 04-1930.4-1995',
            nama: 'Pedoman bagi peralatan elektromekanik untuk pusat listrik tenaga minihidro (PLTM) - Bagian 4: Definisi, istilah dan lambang',
            link: 'https://pesta.bsn.go.id/produk/detail/6487-sni04-19304-1995',
            description: [],
        },
        {
            no: 34,
            item: 'SNI 04-3849.2-1995',
            nama: 'Instalasi pembangkit listrik pedesaan. Bag. 2 : Pusat Listrik Tenaga Microhidro berkapasitas sampai 50 KW (PLTM - P50). Subbagian 2 : Pembuatan, pemasangan dan pengujian',
            link: 'https://pesta.bsn.go.id/produk/detail/4230-sni04-38492-1995',
            description: [],
        },
        {
            no: 35,
            item: 'SNI 04-3849.2.1-1996',
            nama: 'Instalasi pembangkit listrik pedesaan - Bagian 2: Pusat listrik tenaga mikrohidro berkapsitas sampai 50 kW (PLTM-P50)',
            link: 'https://pesta.bsn.go.id/produk/detail/4246-sni04-384921-1996',
            description: [],
        },
        {
            no: 36,
            item: 'SNI 04-6953-2003',
            nama: 'Pembangkit listrik hidro skala kecil',
            link: null,
            description: [],
        },
        {
            no: 37,
            item: 'SNI 9015:2021',
            nama: 'Manajemen proyek Pembangkit Listrik Tenaga Minihidro (PLTM)',
            link: 'https://pesta.bsn.go.id/produk/detail/13618-sni90152021',
            description: [],
        },
        {
            no: 39,
            item: 'SNI IEC 61116:2015',
            nama: 'Pedoman perlengkapan elektromekanikal untuk instalasi mini hidro (IEC 61116: 1992, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/10365-sniiec611162015',
            description: [],
        },
        {
            no: 40,
            item: 'SNI 8635:2018',
            nama: 'Panduan desain pipa pesat pltmh kelas D (Kapasitas 600 kW – 1 MW)',
            link: null,
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11976',
                'https://pesta.bsn.go.id/produk/detail/11976-sni86352018',
            ],
        },
        {
            no: 41,
            item: 'SNI 7932:2019',
            nama: 'Spesifikasi turbin crossflow PLTMH kelas A',
            link: null,
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/12552',
                'https://pesta.bsn.go.id/produk/detail/12552-79322019',
            ],
        },
        
        {
            no: 42,
            item: 'SNI 9015:2021',
            nama: 'Manajemen proyek Pembangkit Listrik Tenaga Minihidro (PLTM)',
            link: null,
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/13618',
                'https://pesta.bsn.go.id/produk/detail/13618-sni90152021',
            ],
        },
        {
            no: 43,
            item: 'SNI 9114:2022',
            nama: 'Metode perhitungan potensi energi air',
            link: null,
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/14169',
                'https://pesta.bsn.go.id/produk/detail/14169-sni91142022',
            ],
        },
        {
            no: 44,
            item: 'SNI 9195:2023',
            nama: 'Spesifikasi turbin crossflow PLTMH kelas C dan kelas D',
            link: null,
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/14801',
                'https://pesta.bsn.go.id/produk/detail/14801-sni91952023',
            ],
        },
    ];
    

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Air</h1>
                <h3 className="display-6 text-secondary">Standard</h3>
            </div>
            <StandardTable data={data} />
        </div>
    );
};

export default EnergiAirStandard;
