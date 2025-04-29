import React from 'react';
import StandardTable from '../../components/StandardTable';

const EnergiSuryaStandard = () => {
    const data = [
        {
            no: 1,
            item: 'SNI 9121:2022',
            nama: 'Metode perhitungan potensi energi surya',
            link: 'https://pesta.bsn.go.id/produk/detail/14238-sni91212022',
            description: []
        },
        {
            no: 2,
            item: 'SNI IEC/TS 61836:2018',
            nama: 'Sistem energi fotovoltaik surya – Istilah, definisi dan simbol (IEC/TS 61836:2016, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/11810-sniiects618362018',
            description: []
        },
        {
            no: 3,
            item: 'SNI 0225-7-712:2020',
            nama: 'Persyaratan Umum Instalasi Listrik (PUIL) 2020 – Bagian 7-712: Persyaratan untuk instalasi atau lokasi khusus – Sistem suplai daya fotovoltaik surya (PV)',
            link: 'https://pesta.bsn.go.id/produk/detail/12954-sni0225-7-7122020',
            description: []
        },
        {
            no: 4,
            item: 'SNI 0225-7-712:2021',
            nama: 'Persyaratan Umum Instalasi Listrik (PUIL) 2020 - Bagian 7-712: Persyaratan untuk instalasi atau lokasi khusus – Sistem suplai daya fotovoltaik surya (PV) (IEC 60364-7-712:2017, MOD)',
            link: '',
            description: []
        },
        {
            no: 5,
            item: 'SNI 04-6392-2000',
            nama: 'Sel dan baterai sekunder untuk penggunaan sistem pembangkit listrik fotovoltaik individual - Persyaratan umum dan metode pengujian',
            link: 'https://pesta.bsn.go.id/produk/detail/5959-sni04-6392-2000',
            description: []
        },
        {
            no: 6,
            item: 'SNI 04-6394-2000',
            nama: 'Prosedur penentuan klasifikasi sistem pembangkit listrik fotovoltaik individual - Pedoman umum',
            link: 'https://pesta.bsn.go.id/produk/detail/5961-sni04-6394-2000',
            description: []
        },
        {
            no: 7,
            item: 'SNI 8395:2017',
            nama: 'Panduan studi kelayakan pembangunan Pembangkit Listrik Tenaga Surya (PLTS) fotovoltaik',
            link: 'https://pesta.bsn.go.id/produk/detail/11365-sni83952017',
            description: []
        },
        {
            no: 8,
            item: 'SNI IEC 60364-7-712:2012',
            nama: 'Instalasi listrik gedung - Bagian 7-712: Persyaratan untuk instalasi atau lokasi khusus - Sistem suplai daya fotovoltaik surya (PV)',
            link: 'https://pesta.bsn.go.id/produk/detail/9312-sniiec60364-7-7122012',
            description: []
        },
        {
            no: 9,
            item: 'SNI IEC 62446-1:2016',
            nama: 'Sistem fotovoltaik (FV) – Persyaratan untuk pengujian, dokumentasi dan pemeliharaan – Bagian 1: Sistem terkoneksi jaringan listrik – Dokumentasi, uji komisioning dan inspeksi',
            link: 'https://pesta.bsn.go.id/produk/detail/12394-sniiec62446-12016',
            description: []
        },
        {
            no: 10,
            item: 'SNI IEC 62446:2016',
            nama: 'Sistem fotovoltaik terhubung ke jaringan listrik - Persyaratan minimum untuk sistem dokumentasi, uji komisioning dan inspeksi (IEC 62446:2009, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/10976-sniiec624462016',
            description: []
        },
        {
            no: 11,
            item: 'SNI IEC 62930:2017',
            nama: 'Kabel listrik untuk sistem fotovoltaik dengan peringkat voltase 1,5 kV AS (IEC 62930:2017, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14986-sniiec629302017',
            description: []
        },
        {
            no: 12,
            item: 'SNI IEC TS 62738:2018',
            nama: 'Pembangkit Listrik Tenaga Surya (PLTS) fotovoltaik yang dipasang ditanah – Panduan dan rekomendasi desain (IEC TS 62738:2018, IDT)',
            link: '',
            description: []
        },
        {
            no: 13,
            item: 'SNI IEC TS 63102 :2021',
            nama: 'Metode asesmen kepatuhan kode grid (grid code) untuk hubungan grid pembangkit listrik tenaga bayu (PLTB) dan pembangkit listrik tenaga surya (PLTS) (IEC TS 63102:2021, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14265-iects631022021',
            description: []
        },
        {
            no: 14,
            item: 'SNI ISO 50045:2019',
            nama: 'Pedoman teknis evaluasi penghematan energi pada pembangkit listrik tenaga termal (ISO 50045:2019, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/12657-sniiso500452019',
            description: []
        },
        {
            no: 15,
            item: 'SNI 04-3020-1992',
            nama: 'Pemanas air tenaga surya, Definisi, satuan dan lambang, dan klasifikasi. Bagian 1',
            link: 'https://pesta.bsn.go.id/produk/detail/3379-sni04-3020-1992',
            description: []
        },
        {
            no: 16,
            item: 'SNI 04-6205.9-2000',
            nama: 'Gawai fotovoltaik - Bagian 9: Persyaratan unjuk kerja simulator surya',
            link: 'https://pesta.bsn.go.id/produk/detail/5712-sni04-62059-2000',
            description: []
        },
        {
            no: 17,
            item: 'SNI 04-6289.3-2000',
            nama: 'Arester surya. Bagian 3: Uji tiruan arester surya',
            link: 'https://pesta.bsn.go.id/produk/detail/5834-sni04-62893-2000',
            description: []
        },
        {
            no: 18,
            item: 'SNI 8602:2018',
            nama: 'Kinerja termal dinding dan pintu - penentuan koefisien perolehan radiasi surya (JIS A 1493:2014, MOD)',
            link: 'https://pesta.bsn.go.id/produk/detail/13908-86022018',
            description: []
        },
        {
            no: 19,
            item: 'SNI 9196:2023',
            nama: 'Alat pengering tenaga surya aktif tipe langsung – Syarat mutu dan metode uji',
            link: 'https://pesta.bsn.go.id/produk/detail/14778-sni91962023',
            description: []
        },
        {
            no: 20,
            item: 'SNI IEC 60364-7-712:2012',
            nama: 'Instalasi listrik gedung - Bagian 7-712: Persyaratan untuk instalasi atau lokasi khusus - Sistem suplai daya fotovoltaik surya (PV)',
            link: '',
            description: []
        },
        {
            no: 21,
            item: 'SNI IEC 60904-9:2020',
            nama: 'Perangkat fotovoltaik - Bagian 9: Klasifikasi karakteristik simulator surya (IEC 60904-9:2020, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13615-sniiec60904-92020',
            description: []
        },
        {
            no: 22,
            item: 'SNI 04-3850.1-1995',
            nama: 'Modul fotovoltaik. Bagian 1: Umum',
            link: 'https://pesta.bsn.go.id/produk/detail/4247-sni04-38501-1995',
            description: []
        },
        {
            no: 23,
            item: 'SNI 04-3850.2-1995',
            nama: 'Modul fotovoltaik. Bagian 2 : Pengukuran karakteristik arus tegangan sel/modul fotovoltaik',
            link: 'https://pesta.bsn.go.id/produk/detail/4248-sni04-38502-1995',
            description: []
        },
        {
            no: 24,
            item: 'SNI 04-6205.7-2000',
            nama: 'Gawai fotovoltaik - Bagian 7: Perhitungan kesalahan yang disebabkan oleh ketidaksesuaian respons spektral pada pengujian suatu gawai fotovoltaik',
            link: 'https://pesta.bsn.go.id/produk/detail/5710-sni04-62057-2000',
            description: []
        },
        {
            no: 25,
            item: 'SNI 04-6205.8-2000',
            nama: 'Gawai fotovoltaik - Bagian 8: Petunjuk pengukuran respons spektral gawai fotovoltaik',
            link: 'https://pesta.bsn.go.id/produk/detail/5711-sni04-62058-2000',
            description: []
        },
        {
            no: 26,
            item: 'SNI 04-6206-2000',
            nama: 'Sistem pembangkit daya fotovoltaik terestrial - Umum dan pedoman',
            link: 'https://pesta.bsn.go.id/produk/detail/5713-sni04-6206-2000',
            description: []
        },
        {
            no: 27,
            item: 'SNI 04-6298-2000',
            nama: 'Pengujian korosi akibat kabut garam air laut pada modul fotovoltaik',
            link: 'https://pesta.bsn.go.id/produk/detail/5849-sni04-6298-2000',
            description: []
        },
        {
            no: 28,
            item: 'SNI 04-6300-2000',
            nama: 'Modul fotovoltaik terestrial film-lapisan tipis',
            link: '',
            description: []
        },
        {
            no: 29,
            item: 'SNI 04-6302-2000',
            nama: 'Pengenalan fotovoltaik yang dikopel langsung dengan sistem pompa',
            link: 'https://pesta.bsn.go.id/produk/detail/5853-sni04-6302-2000',
            description: []
        },
        {
            no: 30,
            item: 'SNI 04-6533-2001',
            nama: 'Pengujian ultraviolet modul fotovoltaik',
            link: 'https://pesta.bsn.go.id/produk/detail/6126-sni04-6533-2001',
            description: []
        },
        {
            no: 31,
            item: 'SNI IEC 60904-1-1:2017',
            nama: 'Perangkat fotovoltaik – Bagian 1-1: Pengukuran karakteristik arus-tegangan perangkat fotovoltaik (FV) multi-junction (IEC 60904-1-1:2017, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14236-sniiec60904-1-12017',
            description: []
        },
        {
            no: 32,
            item: 'SNI IEC 60904-1:2011',
            nama: 'Gawai fotovoltaik - Bagian 1: Pengukuran karakteristik arus - tegangan fotovoltaik',
            link: 'https://pesta.bsn.go.id/produk/detail/9054-sniiec60904-12011',
            description: []
        },
        {
            no: 34,
            item: 'SNI IEC 62759-1:2022',
            nama: 'Modul fotovoltaik (FV) – Pengujian transportasi – Bagian 1: Transportasi dan pengiriman unit kemasan modul (IEC 62759-1:2022, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14242-sniiec62759-12022',
            description: []
        },
        {
            no: 35,
            item: 'SNI IEC 62920:2021',
            nama: 'Sistem pembangkit listrik fotovoltaik – Persyaratan dan metode pengujian EMC untuk peralatan konversi daya (IEC 62920:2017+AMD1:2021, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/14750-sniiec629202021',
            description: []
        },
        {
            no: 36,
            item: 'SNI IEC 62941:2019',
            nama: 'Modul fotovoltaik (FV) terestrial – Sistem mutu untuk pabrikasi modul FV (IEC 62941:2019, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13614-sniiec629412019',
            description: []
        },
        {
            no: 38,
            item: 'SNI IEC TS 61724-3:2016',
            nama: 'Kinerja Sistem Fotovoltaik – Bagian 3 : Metode evaluasi energi (IEC TS 61724-3:2016, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13589-rsni3iec61724-32016',
            description: []
        },
        {
            no: 39,
            item: 'SNI IEC TS 62804-1:2015',
            nama: 'Modul Fotovoltaik (FV) - Metode uji untuk mendeteksi degradasi terinduksi potensial - Bagian 1: Silikon kristal (IEC TS 62804-1:2015, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13122-sniiects62804-12015',
            description: []
        },
        {
            no: 40,
            item: 'SNI IEC TS 62915:2018',
            nama: 'Modul Fotovoltaik (FV) - Pengesahan jenis, kualifikasi desain dan keselamatan - Pengujian ulang (IEC TS 62915-2018, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13161-sniiects629152018',
            description: []
        },
        {
            no: 41,
            item: 'SNI IEC TS 63049:2017',
            nama: 'Sistem Fotovoltaik (FV) terestrial – Panduan jaminan mutu yang efektif dalam instalasi, pengoperasian dan pemeliharaan sistem FV (IEC TS 63049:2017, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/13162-sniiects630492017',
            description: []
        },
        {
            no: 42,
            item: 'SNI IEC 62116:2014',
            nama: 'Inverter fotovoltaik terhubung ke jaringan listrik – Prosedur uji tindakan pencegahan islanding (IEC 62116:2014, IDT)',
            link: 'https://pesta.bsn.go.id/produk/detail/12404-sniiec621162014',
            description: []
        },
        {
            no: 43,
            item: 'SNI 04-3021-1992',
            nama: 'Pemanas air tenaga surya tipe domestik sistem termosifon langsung dengan pemanas tambahan',
            link: 'https://pesta.bsn.go.id/produk/detail/3380-sni04-3021-1992',
            description: []        },
/******  f2ebbfaf-267e-44ec-a61d-cd0ee2d766e8  *******/        {
            no: 44,
            item: 'SNI 04-6391-2000',
            nama: 'Battery charge regulator (BCR) - Prosedur uji dan persyaratan elektris',
            link: '',
            description: ['http://sispk.bsn.go.id/SNI/DetailSNI/5958', 'https://pesta.bsn.go.id/produk/detail/5958-sni04-6391-2000']
        },
        {
            no: 45,
            item: 'SNI IEC 62257-4:2009',
            nama: 'Rekomendasi untuk sistem energi terbarukan dan dan hibrida skala kecil untuk listrik perdesaan - Bagian 4:Pemilihan dan rancangan system',
            link: '',
            description: ['http://sispk.bsn.go.id/SNI/DetailSNI/7695', 'https://pesta.bsn.go.id/produk/detail/7695-sniiec62257-42009']
        },
        {
            no: 46,
            item: 'SNI IEC 60904-7:2011',
            nama: 'Gawai fotovoltaik - Bagian 7: Perhitungan kesalahan ketidaksesuaian spektral pada pengujian gawai fotovoltaik',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/9057',
                'https://pesta.bsn.go.id/produk/detail/9057-sniiec60904-72011'
            ]
        },
        {
            no: 47,
            item: 'SNI IEC 61215:2013',
            nama: 'Modul fotovoltaik silikon kristal',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/9541',
                'https://pesta.bsn.go.id/produk/detail/9541-sniiec612152013'
            ]
        },
        {
            no: 48,
            item: 'SNI IEC 61194:2013',
            nama: 'Paramater karakteristik sistem fotovoltaik yang berdiri-sendiri',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/9540',
                'https://pesta.bsn.go.id/produk/detail/9540-sniiec611942013'
            ]
        },
        {
            no: 49,
            item: 'SNI IEC 61727:2016',
            nama: 'Sistem fotovoltaik (FV)',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11233',
                'https://pesta.bsn.go.id/produk/detail/11233-sniiec617272016'
            ]
        },
        {
            no: 50,
            item: 'SNI IEC 61730-1:2016',
            nama: 'Kualifikasi keselamatan modul fotovoltaik (FV) – Bagian 1',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/13119',
                'https://pesta.bsn.go.id/produk/detail/13119-sniiec61730-12016'
            ]
        },
        {
            no: 51,
            item: 'SNI IEC 61730-2:2016',
            nama: 'Kualifikasi keamanan modul fotovoltaik (FV) – Bagian 2',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11967',
                'https://pesta.bsn.go.id/produk/detail/11967-sniiec61730-22016'
            ]
        },
        {
            no: 52,
            item: 'SNI IEC 61215-1:2016',
            nama: 'Modul fotovoltaik (FV) terrestrial – Kualifikasi desain dan pengesahan jenis – Bagian 1',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11970',
                'https://pesta.bsn.go.id/produk/detail/11970-sniiec61215-12016'
            ]
        },
        {
            no: 53,
            item: 'SNI IEC 61215-1-1:2016',
            nama: 'Modul fotovoltaik (FV) terestrial – Kualifikasi desain dan pengesahan jenis – Bagian 1-1',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11969',
                'https://pesta.bsn.go.id/produk/detail/11969-sniiec61215-1-12016'
            ]
        },
        {
            no: 54,
            item: 'SNI IEC 61215-2:2016',
            nama: 'Modul fotovoltaik (FV) terestrial - Kualifikasi desain dan pengesahan jenis - Bagian 2',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11968',
                'https://pesta.bsn.go.id/produk/detail/11968-sniiec61215-22016'
            ]
        },
        {
            no: 55,
            item: 'SNI IEC/TS 62257-4:2018',
            nama: 'Rekomendasi sistem untuk energi terbarukan dan hibrida – Bagian 4',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11811',
                'https://pesta.bsn.go.id/produk/detail/11811-sniiects62257-42018'
            ]
        },
        {
            no: 56,
            item: 'SNI IEC/TS 62257-7:2018',
            nama: 'Rekomendasi sistem untuk energi terbarukan dan hibrida – Bagian 7',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11801',
                'https://pesta.bsn.go.id/produk/detail/11801-sniiects62257-72018'
            ]
        },
        {
            no: 57,
            item: 'SNI IEC 61427-1:2018',
            nama: 'Sel dan baterai sekunder untuk penyimpanan energi terbarukan',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/11793',
                'https://pesta.bsn.go.id/produk/detail/11793-sniiec61427-12018'
            ]
        },
        {
            no: 58,
            item: 'SNI IEC 61701:2020',
            nama: 'Pengujian korosi kabut garam pada modul fotovoltaik (FV)',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/13120',
                'https://pesta.bsn.go.id/produk/detail/13120-sniiec617012020'
            ]
        },
        {
            no: 59,
            item: 'SNI IEC 61724-1:2017',
            nama: 'Kinerja Sistem Fotovoltaik – Bagian 1',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/13617',
                'https://pesta.bsn.go.id/produk/detail/13617-sniiec61724-12017'
            ]
        },
        {
            no: 60,
            item: 'SNI IEC 60068-2-52:2017',
            nama: 'Pengujian lingkungan - Bagian 2-52: Pengujian Kb: Kabut Garam',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/13664',
                'https://pesta.bsn.go.id/produk/detail/13664-sniiec60068-2-522017'
            ]
        },
        {
            no: 61,
            item: 'SNI IEC 62941:2019',
            nama: 'Modul fotovoltaik (FV) terestrial – Sistem mutu untuk pabrikasi modul FV',
            link: '',
            description: [
                'http://sispk.bsn.go.id/SNI/DetailSNI/13614',
                'https://pesta.bsn.go.id/produk/detail/13614-sniiec629412019'
            ]
        }
    ];
    return (
        <div className='container mt-5'>
            <div className='mb-4'>
                <h1 className='display-3'>Energi Surya</h1>
                <h3 className='display-6 text-secondary'>Standard</h3>
            </div>
            <StandardTable data={data} />
        </div>
    );
};

export default EnergiSuryaStandard;
