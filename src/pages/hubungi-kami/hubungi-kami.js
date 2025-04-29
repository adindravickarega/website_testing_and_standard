import React from 'react';

const HubungiKami = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sky-700 mb-6 uppercase">Hubungi Kami</h2>
            
            <p className="text-lg text-gray-700 mb-6">
                Jika Anda memiliki pertanyaan, masukan, atau ingin mengetahui informasi lebih lanjut terkait Database Testing dan Standard untuk Energi Terbarukan, silakan hubungi kami melalui informasi di bawah ini.
            </p>

            <div className="bg-white p-6 shadow-md rounded-md mb-8">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Alamat</h3>
                <p className="text-gray-700">Pusat Riset Teknologi Pengujian dan Standar (PRTPS-BRIN)<br />Kawasan Sains dan Teknologi (KST) BJ Habibie Gedung Tekno 3<br />Setu, Tangerang Selatan, Banten, Indonesia</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md mb-8">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Email</h3>
                <p className="text-gray-700">prtp@brin.go.id</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md mb-8">
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Telepon</h3>
                <p className="text-gray-700">+62 813-8461-4038</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-semibold text-sky-600 mb-4">Formulir Kontak</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Nama</label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-sky-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-sky-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Pesan</label>
                        <textarea rows="4" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-sky-500"></textarea>
                    </div>
                    <button type="submit" className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition duration-200">
                        Kirim
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HubungiKami;
