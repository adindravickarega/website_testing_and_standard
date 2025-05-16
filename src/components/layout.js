import React, { useState, useRef, useEffect } from 'react';
import { NavLink} from "react-router-dom";

function Layout({ children }) {
    const [open, setOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navRef = useRef(null);

    const [country, setCountry] = useState('');
    const [visits, setVisits] = useState(0);

    // Close dropdown when clicking outside
    useEffect(() => {
        const visitCount = localStorage.getItem('visitCount');
        const newCount = visitCount ? parseInt(visitCount) + 1 : 1;

        localStorage.setItem('visitCount', newCount);
        setVisits(newCount);

        fetch("") // optional token (gratis daftar)
            .then(res => res.json())
            .then(data => {
            setCountry(data.country || 'Unknown');
            })
            .catch(err => {
            console.error("Failed to get location:", err);
            setCountry('Unknown');
            });

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const closeAllDropdowns = () => {
        setActiveDropdown(null);
    };

    const menuItems = [
        { name: "Home", path: "/", hasDropdown: false },
        /*{ name: "Peraturan", path: "/peraturan", hasDropdown: false },*/
        {
            name: "Peraturan",
            hasDropdown: true,
            subItems: [
              { name: "Umum", path: "/peraturan/umum" },
              { name: "Bioenergi", path: "/peraturan/bioenergi" },
              { name: "Aneka EBT", path: "/peraturan/aneka-ebt" },
              { name: "Panas Bumi", path: "/peraturan/panas-bumi" },
              { name: "Tenaga Nuklir", path: "/peraturan/tenaga-nuklir" },
            ]
        },
        { 
            name: "Standar", 
            hasDropdown: true,
            subItems: [
                { name: "Energi Angin", path: "/standard/energi-angin" },
                { name: "Energi Air", path: "/standard/energi-air" },
                { name: "Energi Surya", path: "/standard/energi-surya" },
                { name: "Energi Biomassa", path: "/standard/energi-biomassa" },
                { name: "Energi Nuklir", path: "/standard/energi-nuklir" },
                { name: "Energi Panas Bumi", path: "/standard/energi-panas-bumi" }
            ]
        },
        { 
            name: "Riset", 
            hasDropdown: true,
            subItems: [
                { name: "Energi Angin", path: "/riset/energi-angin" },
                { name: "Energi Air", path: "/riset/energi-air" },
                { name: "Energi Biomassa", path: "/riset/energi-biomassa" },
                { name: "Energi Panas Bumi", path: "/riset/energi-panas-bumi" },
                { name: "Energi Surya", path: "/riset/energi-surya" }
            ]
        },
        { name: "Pakar", path: "/pakar", hasDropdown: false },
        { 
            name: "Penyedia Jasa Uji", 
            hasDropdown: true,
            subItems: [
                { name: "Energi Angin", path: "/penyedia-jasa/energi-angin" },
                { name: "Energi Air", path: "/penyedia-jasa/energi-air" },
                { name: "Energi Surya", path: "/penyedia-jasa/energi-surya" },
                { name: "Energi Biomassa", path: "/penyedia-jasa/energi-biomassa" }
            ]
        },
        { name: "Hubungi Kami", path: "/hubungi-kami", hasDropdown: false }
    ];

    return (
        <>
            <nav className="w-full text-gray-200 bg-sky-600 sticky top-0 px-10 uppercase font-bold z-10" ref={navRef}>
                  <div className="flex items-center justify-between py-3">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0">
                    <NavLink to="/">
                        <img
                        src={`${window.location.origin}/File/image/logo-brin.png`} // replace with your actual logo path
                        alt="Logo"
                        className="h-10 w-auto"
                        />
                    </NavLink>
                    </div>

                    {/* Desktop Navigation on the right */}
                    <div className="hidden lg:flex flex-row items-center gap-2" id="nav-menu">
                    {menuItems.map((item) => (
                        <div
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                        onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                        >
                        {item.hasDropdown ? (
                            <>
                            <button
                                className={`focus:text-gray-800 focus:bg-gray-200 text-base transition duration-200 px-5 py-3 flex flex-row items-center gap-2 uppercase cursor-pointer ${activeDropdown === item.name ? 'text-gray-800 bg-gray-200' : ''}`}
                                onClick={() => toggleDropdown(item.name)}
                            >
                                {item.name}
                            </button>
                            <div
                                className={`absolute bg-gray-100 shadow-2xl shadow-gray-400 z-30 transition-all duration-300 ${activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                            >
                                {item.subItems.map((subItem) => (
                                <NavLink
                                    key={subItem.path}
                                    to={subItem.path}
                                    className="text-base flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200 whitespace-nowrap"
                                    onClick={closeAllDropdowns}
                                >
                                    {subItem.name}
                                </NavLink>
                                ))}
                            </div>
                            </>
                        ) : (
                            <NavLink
                            to={item.path}
                            className="hover:text-sky-600 hover:bg-gray-200 text-base transition duration-200 p-3 flex flex-row items-center gap-2"
                            onClick={closeAllDropdowns}
                            >
                            {item.name}
                            </NavLink>
                        )}
                        </div>
                    ))}
                    </div>

                    {/* Mobile nav toggle (hamburger icon) */}
                    <button
                    className="lg:hidden focus:text-gray-800 focus:bg-gray-200 text-base transition duration-200 p-3 flex flex-row items-center gap-2 uppercase"
                    onClick={() => setOpen(!open)}
                    >
                    {open ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {open && (
                    <div className={`bg-sky-600 block lg:hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}>
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative">
                                {item.hasDropdown ? (
                                    <>
                                        <button 
                                            className="w-full text-left text-base transition duration-200 px-5 py-3 flex flex-row items-center justify-between gap-2 uppercase"
                                            onClick={() => toggleDropdown(item.name)}
                                        >
                                            {item.name}
                                            <svg className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className={`bg-gray-100 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-screen' : 'max-h-0'}`}>
                                            {item.subItems.map((subItem) => (
                                                <NavLink 
                                                    key={subItem.path}
                                                    to={subItem.path} 
                                                    className="block text-base transition duration-200 text-gray-800 px-8 py-3 hover:bg-sky-600 hover:text-gray-200"
                                                    onClick={() => {
                                                        closeAllDropdowns();
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {subItem.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <NavLink 
                                        to={item.path} 
                                        className="block text-base transition duration-200 text-gray-200 px-5 py-3 hover:bg-gray-200 hover:text-sky-600"
                                        onClick={() => {
                                            closeAllDropdowns();
                                            setOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="bg-no-repeat bg-center bg-cover h-auto flex justify-center items-center" style={{backgroundImage: "url('"+ window.location.origin +"/File/image/main_page.jpg')"}}>
                <div className="w-full text-center py-20 bg-gray-950/50 backdrop-blur-sm hover:backdrop-blur-lg hover:bg-gray-950/70 transition duration-500">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl text-white leading-tight uppercase">Renewable Energy Testing and Standards Database</h1>
                </div>
            </section>

            {/* Main Content */}
            <main className="py-8 bg-gray-50">
                <div className="mx-auto">
                    {children}
                </div>
            </main>

            <footer className="bg-gray-200 text-gray-600 text-center py-4">

                <p>&copy; 2025 Database Testing and Standard for Energy. All rights reserved.</p>
                <p>Kunjungan Anda ke-{visits} dari negara: <strong>{country}</strong></p>
            </footer>
        </>
    );
}

export default Layout;