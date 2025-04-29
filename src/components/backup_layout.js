import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";


// Helper function to create NavLink components
const createNavLinks = (links) => {
    return links.map(link => (
        <NavLink key={link.path} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-600 " to={link.path}>
            {link.label}
        </NavLink>
    ));
};
function Layout({ children }) {
    const [open, setOpen] = useState(false);
    const [dropdownTesting, setDropdownTesting] = useState(false);
    const [dropdownStandard, setDropdownStandard] = useState(false);
    const [dropdownRiset, setDropdownRiset] = useState(false);

    return (
        <>
            <header className='w-full bg-white flex flex-row justify-between items-center pe-10 overflow-hidden'>
                <Link to="/" className='bg-sky-800 h-14 pe-5'>
                    <img src={process.env.PUBLIC_URL + "/File/image/logo.png"} alt="Logo" className="h-12" />
                </Link>
                <div className="flex space-x-4 py-1">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + "/File/image/brin.png"} alt="Logo" className="h-12" />
                    </Link>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + "/File/image/prtps.png"} alt="Logo" className="h-12" />
                    </Link>
                </div>
            </header>
        <nav class="w-full text-gray-200 bg-sky-600 sticky top-0 px-10 uppercase font-bold z-10">
        <div className="hidden flex-row items-center gap-2 justify-center lg:flex">
        <NavLink to="/" className="hover:text-sky-600 hover:bg-gray-200 text-lg transition duration-200 p-3 flex flex-row items-center gap-2">Home</NavLink>
        <div className="relative">
            <button className="focus:text-gray-800 focus:bg-gray-200 text-lg transition duration-200 px-10 py-3 flex flex-row items-center gap-2 uppercase cursor-pointer" onClick={() => setDropdownTesting(!dropdownTesting)}>Testing</button>
            <div className={`absolute bg-gray-100 shadow-2xl shadow-gray-400 z-30 ${dropdownTesting ? 'block' : 'hidden'}`}>
                <NavLink to="/testing/energi-angin" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Angin</NavLink>
                <NavLink to="/testing/energi-air" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Air</NavLink>
                <NavLink to="/testing/energi-surya" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Surya</NavLink>
                <NavLink to="/testing/energi-biomassa" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Biomassa</NavLink>
            </div>
        </div>
        <div className="relative">
        <button className="focus:text-gray-800 focus:bg-gray-200 text-lg transition duration-200 px-10 py-3 flex flex-row items-center gap-2 uppercase cursor-pointer" onClick={() => setDropdownStandard(!dropdownStandard)}>Standard</button>
        <div className={`absolute bg-gray-100 shadow-2xl shadow-gray-400 z-30 ${dropdownStandard ? 'block' : 'hidden'}`}>
                <NavLink to="/standard/energi-angin" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Angin</NavLink>
                <NavLink to="/standard/energi-air" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Air</NavLink>
                <NavLink to="/standard/energi-surya" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Surya</NavLink>
                <NavLink to="/standard/energi-biomassa" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Biomassa</NavLink>
                <NavLink to="/standard/energi-nuklir" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Nuklir</NavLink>
                <NavLink to="/standard/energi-panas-bumi" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Panas Bumi</NavLink>
            </div>
        </div>
        <div className="relative">
        <button className="focus:text-gray-800 focus:bg-gray-200 text-lg transition duration-200 px-10 py-3 flex flex-row items-center gap-2 uppercase cursor-pointer" onClick={() => setDropdownRiset(!dropdownRiset)}>Riset</button>
        <div className={`absolute bg-gray-100 shadow-2xl shadow-gray-400 z-30 ${dropdownRiset ? 'block' : 'hidden'}`}>
                <NavLink to="/riset/energi-angin" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Angin</NavLink>
                <NavLink to="/riset/energi-air" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Air</NavLink>
                <NavLink to="/riset/energi-biomassa" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Biomassa</NavLink>
                <NavLink to="/riset/energi-panas-bumi" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Panas Bumi</NavLink>
                <NavLink to="/riset/energi-surya" className="text-lg flex flex-row transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Surya</NavLink>
            </div>
        </div>
        </div>
        <button className="lg:hidden focus:text-gray-800 focus:bg-gray-200 text-lg transition duration-200 p-3 flex flex-row items-center gap-2 uppercase" onClick={() => setOpen(!open)}>
            {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
        </button>
            {open && (
<div className={`bg-sky-600 block lg:hidden`}>
    <NavLink to="/" className="block text-lg transition duration-200 text-gray-200 px-5 py-3 hover:bg-gray-200 hover:text-sky-600">Home</NavLink>
    <div className="relative">
        <button className="w-full text-left text-lg transition duration-200 px-5 py-3 flex flex-row items-center gap-2 uppercase" onClick={() => setDropdownTesting(!dropdownTesting)}>Testing</button>
        <div className={`bg-gray-100 ${dropdownTesting ? 'block' : 'hidden'}`}>
            <NavLink to="/testing/energi-angin" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Angin</NavLink>
            <NavLink to="/testing/energi-air" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Air</NavLink>
            <NavLink to="/testing/energi-surya" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Surya</NavLink>
            <NavLink to="/testing/energi-biomassa" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Biomassa</NavLink>
        </div>
    </div>
    <div className="relative">
        <button className="w-full text-left text-lg transition duration-200 px-5 py-3 flex flex-row items-center gap-2 uppercase" onClick={() => setDropdownStandard(!dropdownStandard)}>Standard</button>
        <div className={`bg-gray-100 ${dropdownStandard ? 'block' : 'hidden'}`}>
            <NavLink to="/standard/energi-angin" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Angin</NavLink>
            <NavLink to="/standard/energi-air" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Air</NavLink>
            <NavLink to="/standard/energi-surya" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Surya</NavLink>
            <NavLink to="/standard/energi-biomassa" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Biomassa</NavLink>
            <NavLink to="/standard/energi-nuklir" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Nuklir</NavLink>
            <NavLink to="/standard/energi-panas-bumi" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Panas Bumi</NavLink>
        </div>
    </div>
    <div className="relative">
        <button className="w-full text-left text-lg transition duration-200 px-5 py-3 flex flex-row items-center gap-2 uppercase" onClick={() => setDropdownRiset(!dropdownRiset)}>Riset</button>
        <div className={`bg-gray-100 ${dropdownRiset ? 'block' : 'hidden'}`}>
            <NavLink to="/riset/energi-angin" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Angin</NavLink>
            <NavLink to="/riset/energi-air" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Air</NavLink>
            <NavLink to="/riset/energi-biomassa" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Biomassa</NavLink>
            <NavLink to="/riset/energi-panas-bumi" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Panas Bumi</NavLink>
            <NavLink to="/riset/energi-surya" className="block text-lg transition duration-200 text-gray-800 px-5 py-3 hover:bg-sky-600 hover:text-gray-200">Energi Surya</NavLink>
        </div>
    </div>
</div>

            )}
        </nav>
           

            {/* Hero Section */}
            <section className="bg-no-repeat bg-center bg-cover h-auto flex justify-center items-center" style={{backgroundImage: "url('"+ window.location.origin +"/File/image/main_page.jpg')"}}>
                <div className="w-full text-center py-20 bg-gray-950/50 backdrop-blur-sm hover:backdrop-blur-lg hover:bg-gray-950/70 transition duration-500">
                    <h1 className="text-3xl lg:text-4xl xl:text-6xl text-white leading-tight uppercase">Database Testing and Standard for Renewable Energy</h1>
                </div>
            </section>

            {/* Main Content */}
            <main className="py-8 bg-gray-50">
                <div className="mx-auto">
                    {children}
                </div>
            </main>

            <footer className="bg-gray-200 text-gray-600 text-center py-4">
                <p>&copy; 2024 Database Testing and Standard for Energy. All rights reserved.</p>
            </footer>
        </>
    );
}
export default Layout
