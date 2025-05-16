import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Home = () => {
  // Array of background images from your public folder
  const backgroundImages = [
    "/File/image/PLT-Panas-Bumi.jpg",
    "/File/image/PLTA.jpg",
    "/File/image/panel.jpg",
    "/File/image/hydropower.jpg",
    "/File/image/wind.jpg",
  ];

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true 
    });
  }, []);

  return (
    <>
      {/* Swiper Slider */}
      <div className="relative w-full" style={{ height: "100vh" }}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`;
            },
          }}
          className="h-full"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img 
                  src={process.env.PUBLIC_URL + image}
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button 
          className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2"></div>
      </div>
    
      {/* Content Sections */}
      <section className="my-8">
        <div className="mx-auto" data-aos="fade-up" data-aos-duration="1000">
          
          <div className="flex justify-center gap-2 flex-wrap" data-aos="fade-up" data-aos-duration="1000">
            
            {/* Card 1 - About Us */}
            <div className="w-5/5 h-full">
              <div className="h-full shadow-sm rounded-lg overflow-hidden">                
                <div className="p-4 w-full">
                  <h3 className="text-xl font-semibold">Tentang Database Pengujian dan Standar Energi Baru dan Terbarukan</h3>
                  <p className="text-justify">
                  Database Pengujian dan Standar Energi Baru dan Terbarukan ini menyediakan informasi komprehensif mengenai pengembangan dan penerapan energi baru dan terbarukan di Indonesia. Informasi yang disajikan mencakup peraturan serta standar yang berlaku, data hasil riset, profil para pakar, serta daftar penyedia jasa di bidang energi baru dan terbarukan.
                  </p>
<div className="mt-4">
  <h3 className="text-xl font-semibold">Tujuan</h3>
  Database ini bertujuan untuk:
  <ul className="list-disc list-inside">
    <li>Menyediakan informasi akurat dan terkini untuk mempercepat transisi Indonesia menuju energi berkelanjutan.</li>
    <li>Memfasilitasi kepatuhan terhadap standar nasional untuk produk dan jasa energi terbarukan.</li>
    <li>Mendukung riset dan inovasi dengan menghubungkan pemangku kepentingan kepada data historis dan keahlian teknis.</li>
  </ul>
</div>

<div className="mt-4">
<h3 className="text-xl font-semibold">Kolaborasi Pengembangan</h3>
Database ini dikembangkan melalui kolaborasi antara Pusat Riset Teknologi Pengujian dan Standar (BRIN) dengan beberapa unit di BRIN termasuk:
<ol>
  <li>1. Pusat Riset Konversi dan Konservasi Energi;</li> 
  <li>2. Pusat Riset Ekonomi Sirkuler dan Perilaku;</li>
  <li>3. Pusat Riset Teknologi Proses Industri dan Manufaktur;</li> 
  <li>4. Pusat Riset Limnologi dan Sumber Daya Air;</li>
  <li>5. Pusat Riset Mikrobiologi Terapan;</li> 
  <li>6. Pusat Riset Sistem Produksi Berkelanjutan dan Penilaian Daur Hidup; dan</li> 
  <li>7. Direktorat Kebijakan Pembangunan Lingkungan Hidup, Kemaritiman, Sumber Daya Alam, dan Ketenaganukliran.</li> 
</ol></div>
                  
                </div>
              </div>
            </div> 

            {/* Card 3 - Contact Us */}
            <div className="w-4/5">
              <div className="h-full w-full shadow-sm rounded-lg overflow-hidden flex flex-row">
                <img
                  src={process.env.PUBLIC_URL + "/File/image/logo_brin_merah.png"}
                  alt="Contact us"
                  className="w-24 h-auto object-contain p-4"
                />
                <div className="p-4 mt-4 ml-4 px-10">
                  <h3 className="text-xl font-semibold">Hubungi Kami</h3>
                  <p className="text-gray-600">
                  Pusat Riset Teknologi Pengujian dan Standar
                    <br />Telepon: <a href="tel:+6281119333594" className='text-sky-600'>0811 1933 3594</a>
                    <br />E-Mail: <a href="mailto:prtp@brin.go.id" className='text-sky-600'>prtp@brin.go.id</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;