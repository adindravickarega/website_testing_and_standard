import React from 'react';
import StandardTable from '../../components/StandardTable';

const EnergiPanasBumiStandard = () => {
    const data = [
        {
            no: 1,
            item: 'SNI 13-6169-1999',
            nama: 'Metode estimasi potensi energi panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/5650-sni13-6169-1999',
            description: [],
        },
        {
            no: 2,
            item: 'SNI 13-6482-2000',
            nama: 'Angka parameter dalam estimasi potensi energi panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/6037-sni13-6482-2000',
            description: [],
        },
        {
            no: 3,
            item: 'SNI 6678:2020',
            nama: 'Konversi laju alir fluida panas bumi menjadi energi listrik',
            link: 'https://pesta.bsn.go.id/produk/detail/12675-sni66782020',
            description: [],
        },
        {
            no: 4,
            item: 'SNI 13-6605-2001',
            nama: 'Metode uji alir fluida sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/6228-sni13-6605-2001',
            description: [],
        },
        {
            no: 5,
            item: 'SNI 13-6677-2002',
            nama: 'Pelaporan uji alir fluida sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/34-sni13-6677-2002',
            description: [],
        },
        {
            no: 6,
            item: 'SNI 13-6983-2004',
            nama: 'Prosedur pelaksanaan dan pelaporan dalam penyelidikan pendahuluan dan penyelidikan pendahuluan lanjutan panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/6745-sni13-6983-2004',
            description: [],
        },
        {
            no: 7,
            item: 'SNI 13-6987-2004',
            nama: 'Fluida sumur panas bumi - Prosedur uji alir',
            link: 'https://pesta.bsn.go.id/produk/detail/6749-sni13-6987-2004',
            description: [],
        },
        {
            no: 8,
            item: 'SNI 13-7122-2005',
            nama: 'Prosedur pelaksanaan dan pelaporan penyelidikan panas bumi - Tahap penyelidikan rinci',
            link: 'https://pesta.bsn.go.id/produk/detail/6958-sni13-7122-2005',
            description: [],
        },
        {
            no: 9,
            item: 'SNI 13-7123-2005',
            nama: 'Kriteria peralatan uji alir fluida sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/6959-sni13-7123-2005',
            description: [],
        },
        {
            no: 10,
            item: 'SNI 6009:2017',
            nama: 'Klasifikasi sumber daya dan cadangan energi panas bumi Indonesia',
            link: 'https://pesta.bsn.go.id/produk/detail/11364-sni60092017',
            description: [],
        },
        {
            no: 11,
            item: 'SNI 6169:2018',
            nama: 'Metode estimasi potensi energi panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/11808-sni61692018',
            description: [],
        },
        {
            no: 12,
            item: 'SNI 6482:2018',
            nama: 'Parameter dalam estimasi potensi energi panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/11837-sni64822018',
            description: [],
        },
        {
            no: 13,
            item: 'SNI 7123:2019',
            nama: 'Peralatan uji alir fluida sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/11994-sni71232019',
            description: [],
        },
        {
            no: 14,
            item: 'SNI 7985:2015',
            nama: 'Kriteria sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/9758-sni79852015',
            description: [],
        },
        {
            no: 15,
            item: 'SNI 8300:2016',
            nama: 'Identitas sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/10959-sni83002016',
            description: [],
        },
        {
            no: 16,
            item: 'SNI 8300:2024',
            nama: 'Identitas sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/14927-sni83002024',
            description: [],
        },
        {
            no: 17,
            item: 'SNI 8662:2018',
            nama: 'Uji alir fluida sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/12020-86622018',
            description: [],
        },
        {
            no: 18,
            item: 'SNI 8838:2019',
            nama: 'Buku panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/12433-88382019',
            description: [],
        },
        {
            no: 19,
            item: 'SNI 8839:2019',
            nama: 'Buku daftar kecelakaan panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/12434-88392019',
            description: [],
        },
        {
            no: 20,
            item: 'SNI 8662:2018',
            nama: 'Uji alir fluida sumur panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/12020-86622018',
            description: [],
        },
        {
            no: 21,
            item: 'SNI 8838:2019',
            nama: 'Buku panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/12433-88382019',
            description: [],
        },
        {
            no: 22,
            item: 'SNI 8839:2019',
            nama: 'Buku daftar kecelakaan panas bumi',
            link: 'https://pesta.bsn.go.id/produk/detail/12434-88392019',
            description: [],
        }                
    ];

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Panas Bumi</h1>
                <h3 className="display-6 text-secondary">Standard</h3>
            </div>
            <StandardTable data={data} />
        </div>
    );
};

export default EnergiPanasBumiStandard;
