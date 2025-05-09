import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
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
      <div className="relative w-full" style={{ height: "50vh" }}>
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
            <div className="w-2/5 h-full">
              <div className="h-full shadow-sm rounded-lg overflow-hidden">
                <img src={process.env.PUBLIC_URL + "/File/image/brin2.png"} alt="About us" className="w-full h-1/2" />
                <div className="p-4 w-full">
                  <h3 className="text-xl font-semibold">Tentang</h3>
                  <p className="text-gray-600 text-justify">
                  Database Testing dan Standar Energi Baru dan Terbarukan ini meyediakan informasi mengenai pengembangan dan penerapan energi baru dan terbarukan di Indonesia yang mencakup peraturan dan standar yang berlaku di Indonesia. Database ini juga menyajikan data dan informasi tentang riset yang telah dilakukan, para pakar, metode uji, dan penyedia jasa energi baru dan terbarukan di Indonesia. 

Database ini dikembangkan melalui kolaborasi antara Pusat Riset Teknologi Pengujian dan Standar dengan personel dari beberapa unit di BRIN termasuk:
<ol>
  <li>1. Pusat Riset Konversi dan Konservasi;</li> 
  <li>2. Pusat Riset Perilaku dan Ekonomi Sirkuler;</li>
  <li>3. Pusat Riset Teknologi Industri Proses dan Manufaktur;</li> 
  <li>4. Pusat Riset Limnologi dan Sumber Daya Air;</li>
  <li>5. Pusat Riset Mikrobiologi Terapan;</li> 
  <li>6. Pusat Riset Sistem Produksi Berkelanjutan dan Penilaian Daur Hidup; dan</li> 
  <li>7. Direktorat Kebijakan Pembangunan Lingkungan Hidup, Kemaritiman, Sumber Daya Alam, dan Ketenaganukliran.</li> 
</ol>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Our Goals */}
            <div className="w-2/5 h-full">
              <div className="shadow-sm rounded-lg overflow-hidden">
                <img src={process.env.PUBLIC_URL + "/File/image/PLTA.jpg"} alt="Our Goals" className="w-full h-1/2" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Tujuan</h3>
                  <p className="text-gray-600">
                  Tujuan pengembangan database ini adalah untuk menyediakan informasi yang akurat dan terkini tentang energi baru dam energi terbarukan di Indonesia. 
Jika anda membutuhkan informasi tentang peraturan-peraturan yang berlaku dan standar-standar yang wajib dipenuhi untuk produk dan jasa energi baru dan terbarukan, termasuk testing yang wajib dilakukan dan siapa yang dapat melakukan testing tersebut, maka anda dapat menemukan seluruh informasi tersebut di sini.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Contact Us */}
            <div className="w-4/5">
              <div className="h-full w-full shadow-sm rounded-lg overflow-hidden flex flex-row">
                <img src={process.env.PUBLIC_URL + "/File/image/prtps.png"} alt="Contact us" className="w-1/2" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Contact us</h3>
                  <p className="text-gray-600">
                  The Research Center for Testing Technology and Standard ensures quality and compliance in renewable energy through regulations, testing, and standards.
                    <br />Phone: <a href="tel:+6281119333594" className='text-sky-600'>0811 1933 3594</a>
                    <br />E-Mail: <a href="mailto:prtp@brin.go.id" className='text-sky-600'>prtp@brin.go.id</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-6 py-8 gap-6">
        {/* Card 1 - Standard and Testing */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
          <div className="w-full md:w-1/3 relative h-[250px]" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="200">
            <img src={process.env.PUBLIC_URL + "/File/image/panel.jpg"} alt="Standard and Testing" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <p className="text-white text-center">Pemerintah Indonesia telah menetapkan berbagai Standar Nasional Indonesia untuk berbagai teknologi energi baru dan energi terbarukan.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 md:w-2/3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Link className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors" to="/standard/energi-angin">Klik untuk mengetahui lebih lanjut</Link>
          </div>
        </div>

        {/* Card 2 - Regulation and Research */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
          <div className="w-full md:w-1/3 relative h-[250px]" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
            <img src={process.env.PUBLIC_URL + "/File/image/hydropower.jpg"} alt="Regulation and Research" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <p className="text-white text-center">Pemerintah Indonesia mengatur pemanfaatan dan pengembangan energi baru dan energi terbarukan di Indonesia melalui berbagai peraturan perundang-undangan.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 md:w-2/3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Link className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors" to="/peraturan/umum">Klik untuk mengetahui lebih lanjut</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;