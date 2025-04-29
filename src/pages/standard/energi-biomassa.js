import React from 'react';
import StandardTable from '../../components/StandardTable';

const EnergiBiomassaStandard = () => {
    const data = [
        {
            no: 1,
            item: 'SNI 9031:2021',
            nama: 'Serbuk kayu untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/13752-90312021',
            description: [],
        },
        {
            no: 2,
            item: 'SNI 9032:2021',
            nama: 'Serpihan kayu untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/13751-90322021',
            description: [],
        },
        {
            no: 3,
            item: 'SNI 9033:2021',
            nama: 'Cangkang sawit untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/13753-90332021',
            description: [],
        },
        {
            no: 4,
            item: 'SNI 9125:2022',
            nama: 'Pelet sekam padi untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/14154-sni91252022',
            description: [],
        },
        {
            no: 5,
            item: 'SNI 8482:2018',
            nama: 'Unit penghasil biogas air limbah organik tipe kubah tetap beton',
            link: 'https://pesta.bsn.go.id/produk/detail/11809-sni84822018',
            description: [],
        },
        {
            no: 6,
            item: 'SNI 7970:2023',
            nama: 'Penentuan kadar biodiesel dalam campurannya dengan minyak solar dan/atau diesel biohidrokarbon menggunakan metode spektrometri inframerah pertengahan',
            link: 'https://pesta.bsn.go.id/produk/detail/14826-sni79702023',
            description: [],
        },
        {
            no: 7,
            item: 'SNI 8875:2020',
            nama: 'Minyak nabati untuk produksi biohidrokarbon',
            link: 'https://pesta.bsn.go.id/produk/detail/12688-sni88752020',
            description: [],
        },
        {
            no: 8,
            item: 'SNI 8968:2021',
            nama: 'Bahan bakar diesel nabati (diesel biohidrokarbon)',
            link: 'https://pesta.bsn.go.id/produk/detail/13202-sni89682021',
            description: [],
        },
        {
            no: 9,
            item: 'SNI 7926:2013',
            nama: 'Kinerja tungku biomassa',
            link: 'https://pesta.bsn.go.id/produk/detail/9662-sni79262013',
            description: [],
        },
        {
            no: 10,
            item: 'SNI 7926:2023',
            nama: 'Kinerja kompor biomassa',
            link: 'https://pesta.bsn.go.id/produk/detail/14904-sni79262023',
            description: [],
        },
        {
            no: 11,
            item: 'SNI 8552:2018',
            nama: 'Produksi biomassa artemia (Artemia franciscana, Kellogg, 1906)',
            link: 'https://pesta.bsn.go.id/produk/detail/12082-85522018',
            description: [],
        },
        {
            no: 12,
            item: 'SNI 8675:2018',
            nama: 'Pelet biomassa untuk energi',
            link: 'https://pesta.bsn.go.id/produk/detail/12513-86752018',
            description: [],
        },
        {
            no: 13,
            item: 'SNI 8951:2020',
            nama: 'Pelet biomassa untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/13141-sni89512020',
            description: [],
        },
        {
            no: 14,
            item: 'SNI 7182:2015',
            nama: 'Biodiesel',
            link: 'https://pesta.bsn.go.id/produk/detail/10147-sni71822015',
            description: [],
        },
        {
            no: 15,
            item: 'SNI 7970.1:2014',
            nama: 'Penentuan kadar biodiesel (EMAL/FAME) dalam campurannya dengan minyak solar - Bagian 1: Metode spektrometri inframerah pertengahan',
            link: 'https://pesta.bsn.go.id/produk/detail/9968-sni797012014',
            description: [],
        },
        {
            no: 16,
            item: 'SNI 7970:2023',
            nama: 'Penentuan kadar biodiesel dalam campurannya dengan minyak solar dan/atau diesel biohidrokarbon menggunakan metode spektrometri inframerah pertengahan',
            link: 'https://pesta.bsn.go.id/produk/detail/14826-sni79702023',
            description: [],
        },
        {
            no: 17,
            item: 'SNI 7969:2014',
            nama: 'Penentuan kadar bioetanol dalam gasohol - Metode ekstraksi dengan air',
            link: 'https://pesta.bsn.go.id/produk/detail/9967-sni79692014',
            description: [],
        },
        {
            no: 18,
            item: 'SNI 8676:2018',
            nama: 'Kinerja kompor bioetanol',
            link: 'https://pesta.bsn.go.id/produk/detail/12530-86762018',
            description: [],
        },
        {
            no: 19,
            item: 'SNI 8800:2019',
            nama: 'Bioetanol terdenaturasi untuk bahan bakar kompor',
            link: 'https://pesta.bsn.go.id/produk/detail/12553-88002019',
            description: [],
        },
        {
            no: 20,
            item: 'SNI 3565:2009',
            nama: 'Etanol nabati',
            link: 'https://pesta.bsn.go.id/produk/detail/7896-sni35652009',
            description: [],
        },
        {
            no: 21,
            item: 'SNI 7431:2015',
            nama: 'Mutu dan metode uji minyak nabati murni untuk bahan bakar motor diesel putaran sedang',
            link: 'https://pesta.bsn.go.id/produk/detail/10155-sni74312015',
            description: [],
        },
        {
            no: 22,
            item: 'SNI 7431:2022',
            nama: 'Mutu dan metode uji minyak nabati murni untuk bahan bakar motor diesel putaran sedang',
            link: 'https://pesta.bsn.go.id/produk/detail/14152-sni74312022',
            description: [],
        },
        {
            no: 23,
            item: 'SNI 8017:2014',
            nama: 'Minyak nabati teresterifikasi parsial untuk bahan bakar motor diesel putaran sedang',
            link: 'https://pesta.bsn.go.id/produk/detail/10037-sni80172014',
            description: [],
        },
        {
            no: 24,
            item: 'SNI 8018:2014',
            nama: 'Minyak nabati untuk bahan bakar pembakaran luar (external combustion)',
            link: 'https://pesta.bsn.go.id/produk/detail/10038-sni80182014',
            description: [],
        },
        {
            no: 25,
            item: 'SNI 9125:2022',
            nama: 'Pelet sekam padi untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/14154-sni91252022',
            description: [],
        },
        {
            no: 26,
            item: 'SNI 8951:2020',
            nama: 'Pelet biomassa untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/13141-sni89512020',
            description: [],
        },
        {
            no: 27,
            item: 'SNI 8966:2021',
            nama: 'Bahan bakar jumputan padat untuk pembangkit listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/13199-sni89662021',
            description: [],
        },
    ];
    

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Biomassa</h1>
                <h3 className="display-6 text-secondary">Standard</h3>
            </div>
            <StandardTable data={data} />
        </div>
    );
};

export default EnergiBiomassaStandard;
