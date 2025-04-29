import React from 'react';
import TestingTable from '../../components/RisetTable';

const EnergiSuryaRiset = () => {
    const data = [
        {
            tahun: 2024,
            judul: 'A stacked LSTM model for day-ahead solar irradiance forecasting under tropical seasons in Java-Bali',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198503937&doi=10.11591%2fijpeds.v15.i3.pp1878-1891&partnerID=40&md5=e16bb4475a301e7405f0ab536ec8b32f',
        },
        {
            tahun: 2024,
            judul: 'A systematic decision-making approach to optimizing microgrid energy sources in rural areas through diesel generator operation and techno-economic analysis: A case study of Baron Technopark in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85188422362&doi=10.61435%2fijred.2024.59560&partnerID=40&md5=b2967de22227613ceddb901b91d7750c',
        },
        {
            tahun: 2024,
            judul: 'Accelerating Renewable Energy Integration in Energy Planning Considering the PV Techno-Economics and Hourly Profile, Case Study: Indonesian Power Sector',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85188348846&doi=10.32479%2fijeep.15503&partnerID=40&md5=ac6a6c1dc735bf8394e03ce2cfeb39b8',
        },
        {
            tahun: 2024,
            judul: 'Analysis of Existing and Forecasting for Coal and Solar Energy Consumption on Climate Change in Asia Pacific: New Evidence for Sustainable Development Goals',
            link: '',
        },
        {
            tahun: 2024,
            judul: 'Application of photovoltaic water pumping system for hydroponic plants to support urban farming small businesses during the COVID-19 pandemic',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203817755&doi=10.1063%2f5.0222384&partnerID=40&md5=4ff3c0ee6182bba77e93a00c1a245d38',
        },
        {
            tahun: 2024,
            judul: 'Bibliometric analysis of carbon-based electrode perovskite solar cells progress',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85192097420&doi=10.1016%2fj.solener.2024.112587&partnerID=40&md5=05ce91a524f2cc0461fb0faeb52fe7fe',
        },
        {
            tahun: 2024,
            judul: 'Characterization of conducted emissions at DC line of off-grid PV systems',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201153188&doi=10.1063%2f5.0207870&partnerID=40&md5=7a3103eb894fab4d85c2aefb55709567',
        },
        {
            tahun: 2024,
            judul: 'Comparative Analysis of Conventional and Electric Motor Propulsion Systems for "Sandek" Fishing Boats in West Sulawesi from a Sustainable Economical Aspect',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85187297526&doi=10.1051%2fe3sconf%2f202448403002&partnerID=40&md5=719b9e4ef6e49ac264a186c15b3be1b5',
        },
        {
            tahun: 2024,
            judul: 'Design and construction of on-grid floating PV in lake PUSPIPTEK-Serpong',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201154456&doi=10.1063%2f5.0206867&partnerID=40&md5=11f5cbac3f56b3f51cb1ed38f700c5e4',
        },
        {
            tahun: 2024,
            judul: 'Design of multi-purpose portable lamp for peddlers and street vendors',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201163031&doi=10.1063%2f5.0206086&partnerID=40&md5=88f05bdbd0131e50a4c5ef8391851fdc',
        },
        {
            tahun: 2024,
            judul: 'Development of a novel tray solar dryer for aquaculture product: Experimental study on drying kinetics and product quality in Eucheuma cottonii seaweed',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189747888&doi=10.1016%2fj.solener.2024.112503&partnerID=40&md5=04ce7606f86046a42d63557ecef2a263',
        },
        {
            tahun: 2024,
            judul: 'Development of photoelectrochemical water splitting photoanode: bibliometric analysis and artificial intelligence advancement',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85180188665&doi=10.1007%2fs10098-023-02686-x&partnerID=40&md5=e92b215a0e9fc7d8118c6ef5c9e6d262',
        },
        {
            tahun: 2024,
            judul: 'Direct synthesis of PbI2 precursor film via magnetic field- and additive-assisted electrodeposition for stable carbon-based perovskite solar cells',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85184741774&doi=10.1016%2fj.jallcom.2024.173706&partnerID=40&md5=3bdd904eefb43f5bcf52fd3d9da6894b',
        },
        {
            tahun: 2024,
            judul: 'Dynamic operating behavior of a solar hybrid microturbine system: A comparative study of serial and parallel configurations',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203412856&doi=10.1016%2fj.energy.2024.133058&partnerID=40&md5=de07d33c043dac8940dbde1769acc38f',
        },
        {
            tahun: 2024,
            judul: 'Energy efficiency examination based on light intensity and exposure time on UV-C lamps sterilizer box: A COVID-19 prevention tool',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201158918&doi=10.1063%2f5.0205699&partnerID=40&md5=3dd22ec20fdbcf19e73a0d5fdc626907',
        },
        {
            tahun: 2024,
            judul: 'Enhanced performance of HTM-free perovskite solar cells with free-standing carbon electrode via surface treatment and conductive support',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85193204170&doi=10.1016%2fj.synthmet.2024.117646&partnerID=40&md5=7d59c60da3737b59ff05de81f33ffe51',
        },
        {
            tahun: 2024,
            judul: 'Enhancement in ZnO-based self-powered photodetector by inserting Mn dopant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203866910&doi=10.1016%2fj.physb.2024.416543&partnerID=40&md5=a57ec462777d5fe8aa74bc5eab6a4905',
        },
        {
            tahun: 2024,
            judul: 'Evaluating Performance and Grid Impacts of On-Grid Rooftop PV System: Case Study of A Mosque',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196362505&doi=10.1088%2f1755-1315%2f1344%2f1%2f012012&partnerID=40&md5=c340bf7a9885dc7b2e7a999c4763b08f',
        },
        {
            tahun: 2024,
            judul: 'Exploring heterogenous TiO2 nanocrystals from natural ilmenite mineral extraction for energy application',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85178145954&doi=10.1016%2fj.mset.2023.11.001&partnerID=40&md5=78727af5a7bd2f252becc2293343e50f',
        },
        {
            tahun: 2024,
            judul: 'Fabrication of binder-free TiO2 P 25 films on flexible PET/ITO substrate for photoanode in dye-sensitized solar cells',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196146632&doi=10.1016%2fj.optmat.2024.115690&partnerID=40&md5=52317467090b92af80cb6fd9f3cb65ba',
        },
        {
            tahun: 2024,
            judul: 'Graphene oxide doping in tropical almond (terminalia catappa L.) fruits extract mediated green synthesis of TiO2 nanoparticles for improved DSSC power conversion efficiency',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189967428&doi=10.1016%2fj.heliyon.2024.e29370&partnerID=40&md5=9ff6d5fa12300cd681e75ed37a74d452',
        },
        {
            tahun: 2024,
            judul: 'Green Energy Growth: Enhancing Agricultural Sustainability through Agrivoltaic Solutions in the Modern Era',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203586799&doi=10.70082%2fesiculture.vi.780&partnerID=40&md5=e170598ca21b64faf85e98b0b2dc133e',
        },
        {
            tahun: 2024,
            judul: 'Improved efficiency and stability of dye-sensitized solar cells by using iodide-based electrolyte with high viscosity solvent',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182022776&doi=10.1016%2fj.matlet.2023.135847&partnerID=40&md5=5ed6623a7cf168daab7a48ad06a3d87f',
        },
        {
            tahun: 2024,
            judul: 'Improving the single current probe method of in-circuit impedance measurement',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201156297&doi=10.1063%2f5.0205694&partnerID=40&md5=ac3fcb7c603e9f0c0e3f4c27014655c7',
        },
        {
            tahun: 2024,
            judul: 'Influence of photoanode pre-heating treatment temperatures prior to dye immersion process on dye-sensitized solar cells photovoltaic performances',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196412774&doi=10.1088%2f1755-1315%2f1344%2f1%2f012013&partnerID=40&md5=0b53b2e62057827899a9798e4283ed71',
        },
        {
            tahun: 2024,
            judul: 'Innovative surfactant-free synthesis of core-shell SiO2/ZnO particles: rapid ultrasonication and photocatalytic inhibition',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85191410557&doi=10.1039%2fd4ra01309c&partnerID=40&md5=a5078131e7b12261204b57e8846d8cac',
        },
        {
            tahun: 2024,
            judul: 'INVESTIGATION OF GRANULAR NATURAL STONE MATERIALS AS PHOTOTHERMAL ABSORBERS FOR SUSTAINABLE AND ENVIRONMENTALLY FRIENDLY ENERGY HARVESTING',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85188451350&doi=10.5937%2fjaes0-47834&partnerID=40&md5=87b529a91830f7db257c56a471cd054c',
        },
        {
            tahun: 2024,
            judul: 'Light Management Investigation of Transparent DSSC based on Ln3+ion doped BaO-ZnF2-B2O3-TeO2Glass (Ln3+= Dy3+/Sm37Eu3+) as UV Down-conversion Material',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85190454346&doi=10.1088%2f1742-6596%2f2734%2f1%2f012034&partnerID=40&md5=16edb19d1a0d47e3529b80e26771511d',
        },
        {
            tahun: 2024,
            judul: 'Mapping of Household Photovoltaic Research in Indonesia: A literature review using bibliometric analysis',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196421616&doi=10.1088%2f1755-1315%2f1344%2f1%2f012014&partnerID=40&md5=73a3968b75a7337ab517fb7337d5d6ab',
        },
        {
            tahun: 2024,
            judul: 'Marine-Based Renewable Energy Solution for 3T Areas in Indonesia: Integrating Diesel Hybridization with Floating PV Power Plant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85187318089&doi=10.1051%2fbioconf%2f20249201009&partnerID=40&md5=ad417a4c12216562dd71df401dbc9874',
        },
        {
            tahun: 2024,
            judul: 'Monitoring solar heat intensity of dual axis solar tracker control system: New approach',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85178998244&doi=10.1016%2fj.csite.2023.103791&partnerID=40&md5=9c0de43b7a4e99a784a6048dff185f98',
        },
        {
            tahun: 2024,
            judul: 'Multi-objective optimisation and sensitivity analysis of component influences on efficiency in air-based bifacial photovoltaic thermal systems (B-PVT)',
            link: 'http://dx.doi.org/10.61435/ijred.2024.60212',
        },
        {
            tahun: 2024,
            judul: 'Near fundamental limit performance of inverted perovskite solar cells with Anti-Reflective coating integration',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85190131654&doi=10.1016%2fj.rio.2024.100670&partnerID=40&md5=5f606e985446543eeffc367281d2955b',
        },
        {
            tahun: 2024,
            judul: 'Optical properties of Eu3+/Dy3+ ion co-doped TeO2 - B2O3 - CaO - Al2O3 glass and its potential for solar energy harvesting',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185723625&doi=10.1016%2fj.optmat.2024.115070&partnerID=40&md5=9503e38630bf0f2f6112c204603a1bc8',
        },
        {
            tahun: 2024,
            judul: 'Optimal planning of renewable energy park for green hydrogen production using detailed cost and efficiency curves of PEM electrolyzer',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198231770&doi=10.1016%2fj.ijhydene.2024.07.107&partnerID=40&md5=61bfce62eb761098456cf35c3921fca7',
        },
        {
            tahun: 2024,
            judul: 'Optimization DC-DC boost converter of BLDC motor drive by solar panel using PID and firefly algorithm',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85183436028&doi=10.1016%2fj.rineng.2023.101727&partnerID=40&md5=2911a9a36c8a6a4d2cd3c8328f16d61c',
        },
        {
            tahun: 2024,
            judul: 'Over 19% Efficient Inverted Organic Photovoltaics Featuring a Molecularly Doped Metal Oxide Electron-Transporting Layer',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197468781&doi=10.1002%2fadma.202310933&partnerID=40&md5=de239cf126812d2a99fb6e6b50daf6da',
        },
        {
            tahun: 2024,
            judul: 'Photoanode Modification Based on Lignin Extracted from Rice Husk for Dye-Sensitized Solar Cells',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85186145526&doi=10.1088%2f1742-6596%2f2705%2f1%2f012012&partnerID=40&md5=ec90521e2b747e86027fdc14903e133f',
        },
        {
            tahun: 2024,
            judul: 'Photoluminescence and photovoltaic properties of cesium lead bromide nanocrystals with linoleic acid ligand',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185562739&doi=10.1088%2f1742-6596%2f2696%2f1%2f012006&partnerID=40&md5=a1f67cdb51495939b8eccbe771cd0ef2',
        },
        {
            tahun: 2024,
            judul: 'PV cooling system preferences based on PV module temperature in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201140730&doi=10.1063%2f5.0205700&partnerID=40&md5=207dcc36d6d74e950a9f06e8649b936b',
        },
        {
            tahun: 2024,
            judul: 'Recent developments in low-dimensional heterostructures of halide perovskites and metal chalcogenides as emergent materials: Fundamental, implementation, and outlook',
            link: 'http://dx.doi.org/10.1063/5.0176763',
        },
        {
            tahun: 2024,
            judul: 'Reducing impurities of silica sand by one step and two step leaching',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85187561546&doi=10.1063%2f5.0186247&partnerID=40&md5=417386bd9b10bf13dd75e46432caf31a',
        },
        {
            tahun: 2024,
            judul: 'Research trend of bacterial leaf blight on rice in the millennium era: a bibliometric and scientometric approach for capture future insight',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85195136153&doi=10.23960%2fjhptt.224139-153&partnerID=40&md5=1adce4a13049ac2f219f58bf2aaf8c40',
        },
        {
            tahun: 2024,
            judul: 'Rooftop Solar Power System for EV Charging Station of Household Customers in Indonesia: A review and an Opportunity for Developing Countries',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198087245&partnerID=40&md5=72d3d4dd988824bd4dd1f15801943c19',
        },
        {
            tahun: 2024,
            judul: 'Shedding light on N719 dye adsorption mechanisms on Degussa (Evonik) P25 TiO2 nanoparticles towards dye-sensitized solar cell performance',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201577627&doi=10.1016%2fj.powtec.2024.120087&partnerID=40&md5=ac1b6e107b58480d454782c9e9060429',
        },
        {
            tahun: 2024,
            judul: 'Simple fabrication methods and visualization under various lightening of transparent biomass composites (TBC)',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189239927&doi=10.1063%2f5.0184783&partnerID=40&md5=88bc11f3c3c12940ccd276b773f86af6',
        },
        {
            tahun: 2024,
            judul: 'Simulation Approach of Photovoltaic Thermal Based on Water Collector with Rectangular Model',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85191187793&doi=10.37934%2fcfdl.16.8.121137&partnerID=40&md5=943b35904a0c731f04709c17a63a368b',
        },
        {
            tahun: 2024,
            judul: 'Study on fuzzy-MPPT buck boost converter for photovoltaic systems',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201154967&doi=10.1063%2f5.0206893&partnerID=40&md5=c0b6b1d8ce5eb9fa4a43a7e99d15ad5f',
        },
        {
            tahun: 2024,
            judul: 'System Parameters Sensitivity Analysis of Ocean Thermal Energy Conversion',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85192379361&doi=10.28991%2fESJ-2024-08-02-04&partnerID=40&md5=c05887e50dbf1b7d790006d4b0b71f71',
        },
        {
            tahun: 2024,
            judul: 'Techno economics on grid-connected PV powered cold storage: A case study on various PV capacities',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201145292&doi=10.1063%2f5.0205689&partnerID=40&md5=96b7afc6042ea2f658044fafcce930e4',
        },
        {
            tahun: 2024,
            judul: 'Techno-Economic Analysis of West Kalimantan Electricity System with 100MW Nuclear Power Plant as Baseload: Projection of 2030',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185575945&doi=10.1063%2f5.0193873&partnerID=40&md5=e2838c77292242d45869f6af4a8feea7',
        },
        {
            tahun: 2024,
            judul: 'The characteristics and formation mechanism of Cu2SnS3-based solar cells synthesized using practical method',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85187567403&doi=10.1063%2f5.0186217&partnerID=40&md5=73e76f6eac82b45079bbf7681d29cd90',
        },
        {
            tahun: 2024,
            judul: 'The development and performance of green hydrogen production combined hybrid PV-wind-battery system in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201147721&doi=10.1063%2f5.0214679&partnerID=40&md5=7c41434aa77c5e81c69f7a93c4ab07c3',
        },
        {
            tahun: 2024,
            judul: 'The Optimization of Power Generation Mix to Achieve Net Zero Emission Pathway in Indonesia without Specific Time Target',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197360849&doi=10.54337%2fijsepm.8263&partnerID=40&md5=66a6272ea415a458c86ff638d8d186ad',
        },
        {
            tahun: 2024,
            judul: 'Transitioning from coal to solar: A cost-benefit analysis for sustainable power generation in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189468937&doi=10.3934%2fenergy.2024007&partnerID=40&md5=9a25136ce337ce0ef49940124b865709',
        },
        {
            tahun: 2024,
            judul: 'Unraveling the Performance of All-Inorganic Lead-Free CsSnI3-Based Perovskite Photovoltaic with Graphene Oxide Hole Transport Layer',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85179314444&doi=10.1002%2fadts.202300610&partnerID=40&md5=1b17aec4a597fdd0c36908e69a80e148',
        },
        {
            tahun: 2024,
            judul: "Unveiling solar-powered efficiency for methylene blue photodegradation with Ag-doped CeO2/ZnO nanocomposites",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198834948&doi=10.1007%2fs10854-024-13197-w&partnerID=40&md5=9310042880f67119334065080e206a4c"
        },
        {
            tahun: 2023,
            judul: "3D-ZnO Superstructure Decorated with Carbon-Based Material for Efficient Photoelectrochemical Water-Splitting under Visible-Light Irradiation",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85153949397&doi=10.3390%2fnano13081380&partnerID=40&md5=f25a396a1c1ed1edbd38bcd80c773d5e"
        },
        {
            tahun: 2023,
            judul: "A near-infrared photoelectrochromic device with indoor thermal management for self-powered smart windows",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85167363222&doi=10.1039%2fd3tc01669b&partnerID=40&md5=e27edd26e3133156f7d417004b01e170"
        },
        {
            tahun: 2023,
            judul: "Analysis of Off-Grid PV Generation Systems for 3T (Frontier, Outermost, and Least Developed) Regions Using Lead Acid Battery Energy Storage",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174584110&doi=10.1109%2fICHVEPS58902.2023.10257307&partnerID=40&md5=46560b963daa7bd69c2b7b19373bdee0"
        },
        {
            tahun: 2023,
            judul: "Analytical and experimental study of hybrid photovoltaic-thermal-thermoelectric systems in sustainable energy generation",
            link: "http://dx.doi.org/10.1016/j.csite.2023.103522"
        },
        {
            tahun: 2023,
            judul: "Carbon credit and economic feasibility analysis of biomass-solar PV-battery power plant for application in Indonesia remote area",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85173497417&doi=10.1016%2fj.renene.2023.119383&partnerID=40&md5=6f139877d34157a210686946aed160c3"
        },
        {
            tahun: 2023,
            judul: "Cost-benefit analysis framework for utility-scale solar energy development: A life cycle approach",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85169556097&doi=10.1088%2f1755-1315%2f1220%2f1%2f012040&partnerID=40&md5=3c1f1a88312c108cd761621f798a37e7"
        },
        {
            tahun: 2023,
            judul: "Development of hybrid solar-assisted heat pump dryer for drying paddy",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85151009627&doi=10.1016%2fj.csite.2023.102936&partnerID=40&md5=b723af6d7ac82e1c2b2690385b8cf6fd"
        },
        {
            tahun: 2023,
            judul: "Effect of sodium incorporation on CuIn(S,Se)2 thin films fabricated by aqueous spray deposition and their photovoltaic properties",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85141795372&doi=10.1016%2fj.jcrysgro.2022.126975&partnerID=40&md5=e56372d0d39c5a02007b8bb995d6e411"
        },
        {
            tahun: 2023,
            judul: "Electronic structure of P-type amorphous silicon nanowires",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85173588351&doi=10.1088%2f1402-4896%2facf89e&partnerID=40&md5=52c43d8a08aaa27e44d5cbfd87eb08af"
        },
        {
            tahun: 2023,
            judul: "Enhancing Inverted Perovskite Solar Cell Efficiency with Vanadium Oxide-Modified PEDOT:PSS Hole Transport Layer",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182735110&doi=10.1109%2fICRAMET60171.2023.10366601&partnerID=40&md5=f9626d9b039ad886d45e6c93b1d24265"
        },
        {
            tahun: 2023,
            judul: "Equinoctial asymmetry of plasma bubble occurrence and electric field at evening: GPS and ionosonde measurements in Southeast Asia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85171545699&doi=10.1016%2fj.jastp.2023.106136&partnerID=40&md5=4c1c108d9d9b7a9e7914f7ae026feabd"
        },
        {
            tahun: 2023,
            judul: "Fabrication of high purity silica precipitates from quartz sand toward photovoltaic application",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149841206&doi=10.36410%2fjcpr.2023.24.1.103&partnerID=40&md5=624bd25c0064139402c2a15330abd72c"
        },
        {
            tahun: 2023,
            judul: "Feasibility of Adding Antireflective Coating Foil Made from Nanoscale-Patterned Optical Disk Templates on Industrial Silicon Photovoltaics",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85159276555&doi=10.1002%2fente.202300423&partnerID=40&md5=8d9797851074c82997a749ff1b23b56d"
        },
        {
            tahun: 2023,
            judul: "Generation expansion planning with a renewable energy target and interconnection option: A case study of the Sulawesi region, Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85163881540&doi=10.1016%2fj.rser.2023.113489&partnerID=40&md5=f2fdd20bad855cda53d10f4c24b5d86c"
        },
        {
            tahun: 2023,
            judul: "Germination and Seedling Vigor of Jack Bean (Canavalia ensiformis) as Affected by Seed Size",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85179151431&doi=10.1051%2fbioconf%2f20236901011&partnerID=40&md5=92de499b651b3af7486fb0c86fabb04c"
        },
        {
            tahun: 2023,
            judul: "Highly efficient sandwich design thin film luminescent solar concentrators based on blue and green emissive MAPbBr3 perovskites nanostructures",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85147540747&doi=10.1016%2fj.matlet.2023.134008&partnerID=40&md5=603d0a98514c73dac1c9c564b45abd2c"
        },
        {
            tahun: 2023,
            judul: "Impact of Solar Photovoltaic Systems on Low Voltage in Buildings Distribution Networks",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146518312&doi=10.1063%2f5.0116852&partnerID=40&md5=91c15796f66a2d61c7723f04409c8220"
        },
        {
            tahun: 2023,
            judul: "In Situ Generation of n-Type Dopants by Thermal Decarboxylation",
            link: "http://dx.doi.org/10.1002/adfm.202212305"
        },
        {
            tahun: 2023,
            judul: "Investigating the effect of crystallite size on the optical properties of zinc oxide",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85160025350&doi=10.1063%2f5.0116006&partnerID=40&md5=10592cf09a71f6740b22955afc553702"
        },
        {
            tahun: 2023,
            judul: "Life cycle engineering (LCE) study for Synechococcus HS-9 biomass production as potential raw material for a third generation biodiesel production",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85172325044&doi=10.1016%2fj.seta.2023.103484&partnerID=40&md5=495db729b28c9391cd27b35eecd0d0d3"
        },
        {
            tahun: 2023,
            judul: "Mathematical modeling and experimental validation of bifacial photovoltaic-thermal system with mirror reflector",
            link: "http://dx.doi.org/10.1016/j.csite.2023.102800"
        },
        {
            tahun: 2023,
            judul: "Mathematical modeling and experimental validation of bifacial photovoltaic–thermal system with mirror reflector",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85150038195&doi=10.1016%2fj.csite.2023.102800&partnerID=40&md5=6b4ef181d2b9242b1eef3946d96b04a8"
        },
        {
            tahun: 2023,
            judul: "Moored Observations of the Currents and Transports of the Maluku Sea",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85143826867&doi=10.1175%2fJPO-D-22-0027.1&partnerID=40&md5=4ca0356392335ba679ca1dfc0e2a36e5"
        },
        {
            tahun: 2023,
            judul: "Optical properties and photocatalytic performance analysis of titanium dioxide with various crystallite size",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85160056355&doi=10.1063%2f5.0116019&partnerID=40&md5=0c73add90bdad2ab27386e0c2eb5a80e"
        },
        {
            tahun: 2023,
            judul: "Performance Analysis and Comparison of a 93.6 kW Grid- Connected Rooftop Photovoltaic System in South Tangerang",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174611204&doi=10.5109%2f7151746&partnerID=40&md5=32fdfa9cf37434d05165761e80b4bba2"
        },
        {
            tahun: 2023,
            judul: "Performance assessment of double pass photovoltaic/thermal solar air collector using bifacial PV with CPC and mirror reflector under Malaysian climate",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149007495&doi=10.1016%2fj.csite.2023.102811&partnerID=40&md5=df245a588dc6aea7775c925980d778b2"
        },
        {
            tahun: 2023,
            judul: "Performance of low-cost solar radiation logger",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85151831146&doi=10.11591%2fijece.v13i4.pp3885-3894&partnerID=40&md5=d52f9dd9b330fbe2cbce3394fa0c75e5"
        },
        {
            tahun: 2023,
            judul: "Performance Review of Solar-Assisted Heat Pump Systems Using Solar Collectors, PV, and PVT Technologies",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85168002487&doi=10.18280%2fijht.410318&partnerID=40&md5=0a2abb8efc150095620daa922db1b628"
        },
        {
            tahun: 2023,
            judul: "Photoelectrochemical and Photovoltaic Performance of As-deposited Ink- based CuInS2 Heterojunction Thin Film",
            link: "http://dx.doi.org/10.1016/j.jelechem.2023.117484"
        },
        {
            tahun: 2023,
            judul: "Photoelectrochemical and Photovoltaic Performance of As-deposited Ink-based CuInS2 Heterojunction Thin Film",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85153562227&doi=10.1016%2fj.jelechem.2023.117484&partnerID=40&md5=0cabf8b891dba982c3538e0209a15fbe"
        },
        {
            tahun: 2023,
            judul: "Photon up-conversion in Er3+ ion-doped ZnO-Al2O3-BaO-B2O3 glass for enhancing the performance of dye-sensitized solar cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85153102567&doi=10.1016%2fj.jallcom.2023.170163&partnerID=40&md5=1b8356a1e696139df3e2845184b43993"
        },
        {
            tahun: 2023,
            judul: "Potential of Iron Oxides in Photovoltaic Technology",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85150445002&doi=10.1021%2facs.cgd.3c00021&partnerID=40&md5=9682c65c7b765c525a1fe126dc884b7c"
        },
        {
            tahun: 2023,
            judul: "Preliminary study of thermal distribution in semi-transparent photovoltaic double skin façade in South Lampung",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85176765832&doi=10.1063%2f5.0130060&partnerID=40&md5=ed4a5a9e2c7b5336d15c5f18385356fc"
        },
        {
            tahun: 2023,
            judul: "Preparation of Symmetric and Asymmetric Porphyrin as a Passivating Agent for Perovskite Solar Cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182742478&doi=10.1109%2fICRAMET60171.2023.10366721&partnerID=40&md5=cda15d7d2f62f925a55873c6baf7a9f3"
        },
        {
            tahun: 2023,
            judul: "p-Type Conjugated Polymers Containing Electron-Deficient Pentacyclic Azepinedione",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85167830342&doi=10.1021%2facs.macromol.3c00843&partnerID=40&md5=7b92cecdea5e8988749e7bffb8d9b7cb"
        },
        {
            tahun: 2023,
            judul: "Quantifying electrochemical losses in perovskite solar cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85148498744&doi=10.1039%2fd2tc03486g&partnerID=40&md5=147d6d0efc26d1dc413a9898ed9b887d"
        },
        {
            tahun: 2023,
            judul: "Rational design and recent advancements of addictives engineering in ASnI3 tin-based perovskite solar cells: insights from experiments and computational",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85173684959&doi=10.1039%2fd3se00571b&partnerID=40&md5=81a6d3bb526808b62a89be18aeecb2c5"
        },
        {
            tahun: 2023,
            judul: "RESISTANCE OF DOUBLED HAPLOID RICE LINES TO BACTERIAL LEAF BLIGHT (Xanthomonas oryzae pv. oryzae)",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85168836035&doi=10.54910%2fsabrao2023.55.3.10&partnerID=40&md5=c7ca095f84f8be1fa1136f7c541481de"
        },
        {
            tahun: 2023,
            judul: "Review of Advanced Air-Based PV Cooling Technique",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182728621&doi=10.1109%2fICT-PEP60152.2023.10351139&partnerID=40&md5=6a66e18124435b9940d124f7af812194"
        },
        {
            tahun: 2023,
            judul: "Risk Cost Analysis of Fuel Dependency in a Sustainable Energy Transition by Replacing HSD with LNG: A Case Study of Lombok Power System",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85168712369&doi=10.1109%2fEEEIC%2fICPSEurope57605.2023.10194718&partnerID=40&md5=7819810a84a7680a887ce152ca904286"
        },
        {
            tahun: 2023,
            judul: "Smart farming: modeling distribution of Xanthomonas campestris pv. oryzae as a leaf blight-causing bacteria in rice plants",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85147339188&doi=10.1088%2f1755-1315%2f1133%2f1%2f012026&partnerID=40&md5=7b68960c916aa8535f84439e92be4d5d"
        },
        {
            tahun: 2023,
            judul: "Solar Cell Manufacturing Cost Analysis and its Impact to Solar Power Electricity Price in Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85176950802&doi=10.32479%2fijeep.14970&partnerID=40&md5=7fdcbb3f1921c40f5c697ce14885714b"
        },
        {
            tahun: 2023,
            judul: "Spatial integration framework of solar, wind, and hydropower energy potential in Southeast Asia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85145973070&doi=10.1038%2fs41598-022-25570-y&partnerID=40&md5=0fcd252ebc5f4d4244c790d9df32fe0d"
        },
        {
            tahun: 2023,
            judul: "Structural and optical properties of AZO/TiO2hetero-structures thin films on ITO substrates for solar cell application",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85160075178&doi=10.1063%2f5.0133523&partnerID=40&md5=b74572376cd5ee500f4cc48a868a4919"
        },
        {
            tahun: 2023,
            judul: "Study of polycrystalline silicon solar cell structure by XRD and SEM characterization",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85159697934&doi=10.1063%2f5.0123081&partnerID=40&md5=d284cac741d953add949619c0a9e5319"
        },
        {
            tahun: 2023,
            judul: "Sustainable Long-Term Energy Supply and Demand: The Gradual Transition to a New and Renewable Energy System in Indonesia by 2050",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149456691&doi=10.14710%2fijred.2023.50361&partnerID=40&md5=258c28d93335bcb1f4935d9e2676334e"
        },
        {
            tahun: 2023,
            judul: "The Effect of Dineohexyl Phosphinic Acid on the Photovoltaic Performance of Dye-Sensitized Solar Cells Based on Organic Dyes",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182727141&doi=10.1109%2fICRAMET60171.2023.10366755&partnerID=40&md5=e64cbe6bb0a12b6f73569a3f6e7a63d2"
        },
        {
            tahun: 2023,
            judul: "THE HYDROTHERMAL SYNTHESIS OF SNO2 NANOPARTICLES DERIVED FROM TIN CHLORIDE PRECURSOR FOR THE ELECTRON TRANSPORT LAYER OF PEROVSKITE SOLAR CELLS",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85166221216&doi=10.21303%2f2461-4262.2023.002947&partnerID=40&md5=ca43e6896a7b3bb1c70e3131db4ae20a"
        },
        {
            tahun: 2023,
            judul: "The role of battery energy storage system in supporting the net-zero emission target in Indonesia's electricity system",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85160024658&doi=10.1063%2f5.0121706&partnerID=40&md5=fc11cb17b4cc6fc4ecf9134369a65009"
        },
        {
            tahun: 2023,
            judul: "The Suitable Location for a Hybrid Renewable Energy Wind-Solar Power Plant: A Review by Bibliometric",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182380740&doi=10.1088%2f1755-1315%2f1266%2f1%2f012090&partnerID=40&md5=676f61b830e069898e5a5e3a0b0e47d7"
        },
        {
            tahun: 2023,
            judul: "Understanding the Degradation of Methylenediammonium and Its Role in Phase-Stabilizing Formamidinium Lead Triiodide",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85156107190&doi=10.1021%2fjacs.3c01531&partnerID=40&md5=5f835ffd5707edbc06a75e066d8601e0"
        },
        {
            tahun: 2023,
            judul: "Visible Light Trapping in Dye-Sensitized Solar Cell with Vanadium-Doped ZnO as Back Reflector Layer",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182725487&doi=10.1109%2fICRAMET60171.2023.10366603&partnerID=40&md5=99e8e49c4e39a52b073aca2255082185"
        },
        {
            tahun: 2023,
            judul: "Water Insoluble Polyoxometalate Derivative (PW11Cs) with High Light-Reflective Properties for Counter Electrode in Dye-Sensitized Solar Cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182740420&doi=10.1109%2fICRAMET60171.2023.10366581&partnerID=40&md5=324c3d71fe84d7a08b76cb9f75c933f4"
        },
        {
            tahun: 2023,
            judul: "Wire Extensometer Based on Optical Encoder for Translational Landslide Measurement",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85147865955&doi=10.18517%2fijaseit.13.1.15636&partnerID=40&md5=fcdd54cc8ef53e67e52a19545a366b71"
          },
          {
            tahun: 2022,
            judul: "18.9% Efficient Organic Solar Cells Based on n-Doped Bulk-Heterojunction and Halogen-Substituted Self-Assembled Monolayers as Hole Extracting Interlayers",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85139219556&doi=10.1002%2faenm.202202503&partnerID=40&md5=3a2d70cfddc63003d92be1c50674c02f"
          },
          {
            tahun: 2022,
            judul: "A Comparative Study of Photovoltaic Water Pumping System-Driving Conventional AC Single-phase and Three-phase Motor Submersible Pumps",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85139839876&partnerID=40&md5=a966876fc4022793742ab2420c3ab856"
          },
          {
            tahun: 2022,
            judul: "A model of the deviation between IRI-2016 and ionospheric TEC observation based on GISTM at low latitude Indonesia region",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85127298460&doi=10.1088%2f1742-6596%2f2214%2f1%2f012023&partnerID=40&md5=7be4763213621991c420bf1f090878b8"
          },
          {
            tahun: 2022,
            judul: "Artificial Neural Network Performance Analysis for Solar Radiation Prediction, Case Study at Baron Techno Park",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85127539261&doi=10.1088%2f1755-1315%2f997%2f1%2f012019&partnerID=40&md5=6d67d8a4250e8e37b2ccb179d0410ee9"
          },
          {
            tahun: 2022,
            judul: "Characteristic of Precipitable Water Vapor in 2017–2019 Over Bandung Estimated by GPS Data",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85140433671&doi=10.1007%2f978-981-19-0308-3_5&partnerID=40&md5=ca8a5bd2f1346c4fff499f89995c4467"
          },
          {
            tahun: 2022,
            judul: "Charge transport and recombination in wide-bandgap Y6 derivatives-based organic solar cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85130556012&doi=10.1088%2f2043-6262%2fac6c23&partnerID=40&md5=abdd82857f8a170b23adde600262bb6b"
          },
          {
            tahun: 2022,
            judul: "Cl2-Doped CuSCN Hole Transport Layer for Organic and Perovskite Solar Cells with Improved Stability",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85137918649&doi=10.1021%2facsenergylett.2c01545&partnerID=40&md5=a7852dbe5858f4bf7e0a812e6f44bcdd"
          },
          {
            tahun: 2022,
            judul: "Comparative Study of Deployable Satellite Solar Panel Structure between Carbon Fiber Reinforced Polymer and Al-7075 Honeycomb",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146431180&doi=10.1109%2fICARES56907.2022.9993517&partnerID=40&md5=5c6cf3f5daad7f4137f8394d308b342b"
          },
          {
            tahun: 2022,
            judul: "Comparative study on two-constant-amplitude input shapers to maneuver flexible satellite in small structural deflection",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85138193774&doi=10.13111%2f2066-8201.2022.14.3.5&partnerID=40&md5=5494b343a2fcca306c3748d2e9283094"
          },
          {
            tahun: 2022,
            judul: "Component degradation and system deterioration: An overview of early termination of PV-DG microgrid system",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146189422&doi=10.14203%2fj.mev.2022.v13.201-213&partnerID=40&md5=ef1f4ca05196549c76168bbd9656f2e8"
          },
          {
            tahun: 2022,
            judul: "Conceptual Design of Charging Stations for Autonomous Vehicle",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85153406607&doi=10.1109%2fNISS55057.2022.10085028&partnerID=40&md5=81ad9fa06220d3c0e7fbcfd8969c28b2"
          },
          {
            tahun: 2022,
            judul: "Core-twisted tetrachloroperylenediimide additives improve the crystallinity of perovskites to provide efficient perovskite solar cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85130412491&doi=10.1016%2fj.solmat.2022.111779&partnerID=40&md5=fba396c8626961e5114a9b450483de00"
          },
          {
            tahun: 2022,
            judul: "Design and Implementation of Energy Management System for Small-Scale Hybrid Power Plant",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149116086&doi=10.1109%2fICPERE56870.2022.10037278&partnerID=40&md5=36029102473a96d2055e6f97712aac68"
          },
          {
            tahun: 2022,
            judul: "Design and simulation of perovskite solar cell using graphene oxide as hole transport material",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85127984435&doi=10.1063%2f5.0073007&partnerID=40&md5=e86140ad931eff198fdb99ede5622d14"
          },
          {
            tahun: 2022,
            judul: "Development of Coronal Holes Index for Study of Coronal Hole Geo-Effectiveness",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85127255098&doi=10.1088%2f1742-6596%2f2214%2f1%2f012025&partnerID=40&md5=c28c4ee0490c9b067a9ca96648aa7a0a"
          },
          {
            tahun: 2022,
            judul: "Development of Low-Cost Sun Sensor for Small Satellite Based on Photodiode Sensor",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146419573&doi=10.1109%2fICARES56907.2022.9993603&partnerID=40&md5=847679a7aea172c84682867cc8b0c12c"
          },
          {
            tahun: 2022,
            judul: "Device modeling of two-dimensional hole transport materials for boosting the performance of non-fullerene acceptor bulk heterojunction organic solar cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85135390177&doi=10.1016%2fj.optmat.2022.112771&partnerID=40&md5=b1adbdfb82d10396c7bd6730ae438b75"
          },
          {
            tahun: 2022,
            judul: "Doping Approaches for Organic Semiconductors",
            link: "http://dx.doi.org/10.1021/acs.chemrev.1c00581"
          },
          {
            tahun: 2022,
            judul: "Effect of post-treatment drying processes on the optical and photothermal properties of carbon nanodots derived via microwave-assisted method",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85130272544&doi=10.1088%2f1755-1315%2f1017%2f1%2f012009&partnerID=40&md5=11ddb21ad20b013ece594b8ecf28375a"
          },
          {
            tahun: 2022,
            judul: "Electrical Efficiency Enhancement of Thermal-Thermoelectric Photovoltaic Hybrid Solar System (PVT-TE) by Thermoelectric Effect",
            link: "http://dx.doi.org/10.17576/jsm-2022-5112-19"
          },
          {
            tahun: 2022,
            judul: "Electrocoagulation and activated carbon-adsorption of mocaf (modified cassava flour) wastewater",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85144480658&doi=10.1063%2f5.0109990&partnerID=40&md5=91d0ef46b75ac90c54c937696ca94226"
          },
          {
            tahun: 2022,
            judul: "Electromagnetic Interference Measurement and Analysis of the Solar Charge Controller and Electric Motorcycle",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85128547150&doi=10.1109%2fICPEA53519.2022.9744667&partnerID=40&md5=aa994832c53c99931d6177dd1e81e546"
          },
          {
            tahun: 2022,
            judul: "Emissive Charge-Transfer States at Hybrid Inorganic/Organic Heterojunctions Enable Low Non-Radiative Recombination and High-Performance Photodetectors",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116501031&doi=10.1002%2fadma.202104654&partnerID=40&md5=163de39016ef5dfa3e5e877ec1070398"
          },
          {
            tahun: 2022,
            judul: "Energy-yield Assessment Based on the Orientations and the Inclinations of the Solar Photovoltaic Rooftop Mounted in Jakarta, Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85129320921&doi=10.18517%2fijaseit.12.2.14812&partnerID=40&md5=c3def4fa270d2e133c6a5cfae80260ad"
          },
          {
            tahun: 2022,
            judul: "Fabrication of DSSC photoanode based on TiO2produced by caustic fusion of local ilmenite",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85132263942&doi=10.1088%2f1755-1315%2f1031%2f1%2f012030&partnerID=40&md5=06261f453390d0e985db9388ba5caeb5"
          },
          {
            tahun: 2022,
            judul: "Free-Standing Carbon Electrode Modified by Polyvinyl Alcohol for Efficient HTM-Free Perovskite Solar Cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146422346&doi=10.1109%2fICRAMET56917.2022.9991203&partnerID=40&md5=38a08e810de65f5f015eae0ddb82ab8a"
          },
          {
            tahun: 2022,
            judul: "Hosting Capacity of Solar Power Plant in Java Madura Bali",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149131268&doi=10.1109%2fICPERE56870.2022.10037282&partnerID=40&md5=2a7dedba4ea1c145e4e66bb6c0aa1fbc"
          },
          {
            tahun: 2022,
            judul: "Hybrid Floating Photovoltaic - Hydropower Potential Utilization in Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85145325708&doi=10.1088%2f1755-1315%2f1105%2f1%2f012004&partnerID=40&md5=ae63d050cba68a7901282763fbeb108e"
          },
          {
            tahun: 2022,
            judul: "Impact of Plasma Depletion on the Occurrence of Scintillation in the Minimum Years Phase of Solar Cycle 23",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85140474717&doi=10.1007%2f978-981-19-0308-3_34&partnerID=40&md5=0fbfaff73555f13edc6299d5891957f5"
          },
          {
            tahun: 2022,
            judul: "Jet impingement cooling applications in solar energy technologies: Systematic literature review",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85136566621&doi=10.1016%2fj.tsep.2022.101445&partnerID=40&md5=a70e1c592ef6667a6436f63c08a52540"
          },
          {
            tahun: 2022,
            judul: "Mathematical Model of the Thermal Performance of Double-Pass Solar Collector for Solar Energy Application in Sierra Leone",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85124710703&doi=10.14710%2fIJRED.2022.41349&partnerID=40&md5=f5089927151153b7ae67ff77739fa998"
          },
          {
            tahun: 2022,
            judul: "Multi-Criteria Assessment for City-Wide Rooftop Solar PV Deployment: A Case Study of Bandung, Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85132198540&doi=10.3390%2frs14122796&partnerID=40&md5=e2cf0c91f19c3dabd5a37f112320e246"
          },
          {
            tahun: 2022,
            judul: "Natural Dyes Utilization and Production Technology for Dye-Sensitized Solar Cell",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85131739179&doi=10.37934%2farfmts.91.2.154167&partnerID=40&md5=48da546569b2bbed241540181478866e"
          },
          {
            tahun: 2022,
            judul: "Optimum Microgrid Sizing for Rural Application in Bangko Island, Southeast Sulawesi",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149114310&doi=10.1109%2fICPERE56870.2022.10037551&partnerID=40&md5=19eea11d8abf6df0c09376932946699c"
          },
          {
            tahun: 2022,
            judul: "Organometallic Dyes Modification on the NiOx Hole Transport Layer for Organic Photovoltaic Application",
            link: "http://dx.doi.org/10.1109/ICRAMET56917.2022.9991192"
          },
          {
            tahun: 2022,
            judul: "Organometallic Dyes Modification on the NiOxHole Transport Layer for Organic Photovoltaic Application",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146425328&doi=10.1109%2fICRAMET56917.2022.9991192&partnerID=40&md5=fc6433c183f5be5c2c1d482f6e5ab796"
          },
          {
            tahun: 2022,
            judul: "Over 10% Efficient CuIn(S,Se)2Thin Film Solar Cells Fabricated from Molecular Precursor Ink",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146423316&doi=10.1109%2fICRAMET56917.2022.9991230&partnerID=40&md5=ae11b691a4074af418fa22c14c1cb83b"
          },
          {
            tahun: 2022,
            judul: "Panchromatic oxasmaragdyrin as dual functional hole-transporting material in all-inorganic CsPbIBr2 perovskite solar cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85135864918&doi=10.1002%2fjccs.202200281&partnerID=40&md5=1f08bfcfe4a48e874add354e15dfa347"
          },
          {
            tahun: 2022,
            judul: "PARAMETRIC STUDY OF A SOLAR DRYER SYSTEM FOR THE DEVELOPMENT AND APPLICATION OF SOLAR ENERGY IN SIERRA LEONE",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85131368116&doi=10.5937%2fjaes0-33614&partnerID=40&md5=e45f0923f46361122c9eb0322e21365c"
          },
          {
            tahun: 2022,
            judul: "Performance Analysis and Kinetic Modeling of Coffee Beans in Microwave Convective Dryer Integrated Photovoltaic System",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85138655734&doi=10.18280%2fmmep.090427&partnerID=40&md5=c66b519bc44295c62f31ad9b589d89ae"
          },
          {
            tahun: 2022,
            judul: "Performance of Solar Concentrator with and without Mirror Coating Paper",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85124834740&doi=10.48048%2ftis.2022.2171&partnerID=40&md5=4c0bbb92b6c715cc0e2950f7ec6a83b6"
          },
          {
            tahun: 2022,
            judul: "Performance Tests of Loadcell as Real-Time Moisture Content Sensor: Case Study Moringa Oleifera Leaves Drying",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85133364685&doi=10.1088%2f1755-1315%2f1024%2f1%2f012018&partnerID=40&md5=09d18d29f704834c9614b5ed7c9787d9"
          },
          {
            tahun: 2022,
            judul: "Pervaporation Membranes for Seawater Desalination Based on Geo-rGO-TiO2 Nanocomposites: Part 2-Membranes Performances",
            link: "http://dx.doi.org/10.3390/membranes12111046"
          },
          {
            tahun: 2022,
            judul: "Pervaporation Membranes for Seawater Desalination Based on Geo–rGO–TiO2 Nanocomposites: Part 2—Membranes Performances",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85141784398&doi=10.3390%2fmembranes12111046&partnerID=40&md5=79c22d835e4189f75d41b61ae9d24f94"
          },
          {
            tahun: 2022,
            judul: "Semi-monolithic Integration of All-Chalcopyrite Multijunction Solar Conversion Devices via Thin-Film Bonding and Exfoliation",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85143508836&doi=10.1021%2facsami.2c10578&partnerID=40&md5=5286c8bfd03aba88a4059a171d8c8957"
          },
          {
            tahun: 2022,
            judul: "Semi-transparent fullerene-based tandem solar cells with excellent light utilization efficiency enabled by careful selection of sub-cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85137023333&doi=10.1016%2fj.orgel.2022.106633&partnerID=40&md5=4c7c320109605ca99c5735cbd824c3c4"
          },
          {
            tahun: 2022,
            judul: "Simulation of Solar Flare Mechanism Based on Ideal Magnetohydrodynamics State by Disrupting the Stability of Magnetic Field Due to the Plasma Momentum Injection",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85140460983&doi=10.1007%2f978-981-19-0308-3_62&partnerID=40&md5=1ccd08a8408055b2d23a34122db30b46"
          },
          {
            tahun: 2022,
            judul: "Solution Processed Non-Fullerene All Small Molecules Solar Cell Using Perylene Diimide Acceptor Material",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146428045&doi=10.1109%2fICRAMET56917.2022.9991221&partnerID=40&md5=21a1ffc9aad07a31bada1f9c336621c5"
          },
          {
            tahun: 2022,
            judul: "Space debris flux on LAPAN satellites during Solar Cycle 25",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85127292341&doi=10.1088%2f1742-6596%2f2214%2f1%2f012020&partnerID=40&md5=18d30ee782b7c46d456455b891d32724"
          },
          {
            tahun: 2022,
            judul: "Spontaneous expression of the gene of KI67 and P53 in cynomolgus monkeys infected with papillomavirus",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85128473508&doi=10.14202%2fvetworld.2022.962-967&partnerID=40&md5=0e4b23602b26bbd44210cb224d352111"
          },
          {
            tahun: 2022,
            judul: "The Agrivoltaic System Development in Baron Technopark, Yogyakarta, Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85137525354&doi=10.1109%2fACEEE56193.2022.9851860&partnerID=40&md5=3024a8eb3ed784a3a1eb7aa588bca976"
          },
          {
            tahun: 2022,
            judul: "The Characteristic of Solar Flare and CMEs that Caused SPE During 24th Solar Cycle",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85140455610&doi=10.1007%2f978-981-19-0308-3_70&partnerID=40&md5=c8e1649308ed49c091d97996fe4f8c13"
          },
          {
            tahun: 2022,
            judul: "The Geographic Smoothing Potential of Solar Irradiation in Java, Madura, and Bali Electric Power System",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149110551&doi=10.1109%2fICPERE56870.2022.10037361&partnerID=40&md5=873b9c2c4c7b319085bcd0561bf2ec51"
          },
          {
            tahun: 2022,
            judul: "Thermal Design and Analysis of Deployable Solar Panel Low Earth Orbit Equatorial Constellation Satellite",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146423946&doi=10.1109%2fICARES56907.2022.9993478&partnerID=40&md5=e4186a0f6710d1141d995b122acabd7f"
          },
          {
            tahun: 2022,
            judul: "Thermal Efficiencies of Photovoltaic Thermal (PVT) with Bi-Fluid Cooling System",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85132555526&doi=10.18280%2fijht.400209&partnerID=40&md5=355941c596cb8ac31459b1902309cbcc"
          },
          {
            tahun: 2022,
            judul: "Thermo-electro-hydraulic analysis of jet impingement bifacial photovoltaic thermal (JIBPVT) solar air collector",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85130821448&doi=10.1016%2fj.energy.2022.124366&partnerID=40&md5=916452c37d7915d63dec2f978ae840a2"
          },
          {
            tahun: 2022,
            judul: "Trace Solvent Additives Enhance Charge Generation in Layer-by-Layer Coated Organic Solar Cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174948174&doi=10.1002%2fsstr.202100199&partnerID=40&md5=4ec89844ebe42e3fa9cf0a988ea11b67"
          },
          {
            tahun: 2022,
            judul: "Trap passivation and suppressed electrochemical dynamics in perovskite solar cells with C60 interlayers",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85138465949&doi=10.1016%2fj.electacta.2022.141215&partnerID=40&md5=6d3d006c086bd30194f76ef26fa6e390"
          },
          {
            tahun: 2021,
            judul: "18.4 % Organic Solar Cells Using a High Ionization Energy Self-Assembled Monolayer as Hole-Extraction Interlayer",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85105784740&doi=10.1002%2fcssc.202100707&partnerID=40&md5=ede1537f120b984aca94fca36a1c0c71"
          },
          {
            tahun: 2021,
            judul: "Adsorption of Metal Ion Manganese (Mn) in Sodium Silicate Solution using Chitosan",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85108642025&doi=10.1088%2f1742-6596%2f1912%2f1%2f012037&partnerID=40&md5=ce611f53c8ad2a13085012e74ee3eee4"
          },
          {
            tahun: 2021,
            judul: "Bi-fluid cooling effect on electrical characteristics of flexible photovoltaic panel",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116541775&doi=10.14203%2fj.mev.2021.v12.51-56&partnerID=40&md5=b2daf0bac096e7ee7822d25ff31137c4"
          },
          {
            tahun: 2021,
            judul: "Buoy Monitoring System in Lombok Strait for The Indonesian Tsunami Coastal Acoustic Tomography (Ina-CAT)",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85128348220&doi=10.1109%2fOETIC53770.2021.9733746&partnerID=40&md5=206acee1a807bd2895b809d6dd708d47"
          },
          {
            tahun: 2021,
            judul: "Chemical Design Rules for Non-Fullerene Acceptors in Organic Solar Cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116519456&doi=10.1002%2faenm.202102363&partnerID=40&md5=1428edec82e0f9a484989c01f372a449"
          },
          {
            tahun: 2021,
            judul: "Comparative Analysis of Conducted Emission of Off-Grid PV Inverter Using Different DC- LISN s",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123447037&doi=10.1109%2fAPEMC49932.2021.9596780&partnerID=40&md5=0162a72481a61419f9d606a17c46f3b5"
          },
          {
            tahun: 2021,
            judul: "Comparison of Renewable Energy Output Power Transmission to Loads Via HVAC and HVDC",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85126671909&doi=10.1109%2fISRITI54043.2021.9702761&partnerID=40&md5=3d9596f63e13a4f81974206538901d4f"
          },
          {
            tahun: 2021,
            judul: "Current status of solar-assisted greenhouse drying systems for drying industry (food materials and agricultural crops)",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85109108075&doi=10.1016%2fj.tifs.2021.05.035&partnerID=40&md5=ff057824d376e5efba5ebfb90643889d"
          },
          {
            tahun: 2021,
            judul: "Design A Low-cost PV Performance Ratio Data Monitoring",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123183582&doi=10.1109%2fICHVEPS53178.2021.9601032&partnerID=40&md5=29bbc47c46bd1826ff20a564fc5be580"
          },
          {
            tahun: 2021,
            judul: "Design and Application of PV Rooftop for Grid Feed in Residential House South Lampung",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85117369949&doi=10.1088%2f1755-1315%2f830%2f1%2f012078&partnerID=40&md5=b9cbfef93d29fef32567953256c8e208"
          },
          {
            tahun: 2021,
            judul: "Eco-design of portable solar-powered telescopic lamp for off-grid areas in Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85118952105&doi=10.11591%2fijpeds.v12.i4.pp2511-2522&partnerID=40&md5=d23e59289e7ecf6659c33484c451cd85"
          },
          {
            tahun: 2021,
            judul: "Effect of Silica Oxide SiO2/Water Nanofluids Volume Concentration Ratio on Photovoltaic Thermal (PVT) Collector Efficiency",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123318464&doi=10.18280%2fijht.390612&partnerID=40&md5=053d506ef3fd7e052a25b10a3c1057c6"
          },
          {
            tahun: 2021,
            judul: "Efficient Organic Photovoltaics Enabled by Aqueous Ammonia-Based Doped Copper Thiocyanate Hole Transport Layer",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85124301668&doi=10.1109%2fICRAMET53537.2021.9650453&partnerID=40&md5=10d1ea178bb03e409a1b2993db7c9268"
          },
          {
            tahun: 2021,
            judul: "Electrical and Electrochemical Properties of Sandwich- and Monolithic-Structured Dye-Sensitized Solar Cells with Various Counter Electrode Materials",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85114263600&doi=10.20964%2f2021.09.16&partnerID=40&md5=107f09f5e0c7096798d7ff9e58057997"
          },
          {
            tahun: 2021,
            judul: "Energy analysis of greenhouse dryer for Ficus carica L. leaves",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85111573958&doi=10.18280%2fijht.390314&partnerID=40&md5=a7bfca6da06a6f3e23e9b3190e580e91"
          },
          {
            tahun: 2021,
            judul: "Experimental and model validation of photovoltaic-thermal (PVT) air collector: exergy analysis",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197122287&doi=10.14203%2fj.mev.2021.v12.10-17&partnerID=40&md5=b7430a9219079ef9770c7f03b598b561"
          },
          {
            tahun: 2021,
            judul: "Fabrication and Electrical Performance of Monolithic Dye-sensitized Solar Module with Low-Temperature Carbon-based Counter Electrode",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85124299216&doi=10.1109%2fICRAMET53537.2021.9650345&partnerID=40&md5=42e063669be30b695eec49342448a4b1"
          },
          {
            tahun: 2021,
            judul: "Fabrication of ZnO/rGO nanocomposite as a compact layer in zinc chloride modified perovskite solar cell",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116499051&doi=10.1063%2f5.0064169&partnerID=40&md5=6865d99af2740365b201ae9e0b6f5590"
          },
          {
            tahun: 2021,
            judul: "Graphene oxide as an effective hole transport material for low-cost carbon-based mesoscopic perovskite solar cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85115241971&doi=10.1088%2f2043-6262%2fac204a&partnerID=40&md5=105ccb5caa6fa27af17f5cd045441564"
          },
          {
            tahun: 2021,
            judul: "Identification of Harmonic Current at Off-Grid PV Inverters Connected to the Load",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123396857&doi=10.1109%2fAPEMC49932.2021.9596675&partnerID=40&md5=3fe5e436e3ccdf56b414c20ec6684e44"
          },
          {
            tahun: 2021,
            judul: "Indonesia's Cable Based Tsunameter (CBT) System as an Earthquake Disaster Mitigation System in East Nusa Tenggara",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85128387962&doi=10.1109%2fOETIC53770.2021.9733734&partnerID=40&md5=c45d2208f36b5d91cee7d009aaf7eb5d"
          },
          {
            tahun: 2021,
            judul: "Mapping 30 years of sustainability of solar energy research in developing countries: Indonesia case",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85117687963&doi=10.3390%2fsu132011415&partnerID=40&md5=f8eef37a5f4c0ad1d54b6f58ffd56b55"
          },
          {
            tahun: 2021,
            judul: "Modeling of bifacial photovoltaic-thermal (PVT) air heater with jet plate",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116655062&doi=10.18280%2fijht.390409&partnerID=40&md5=2504035b8014e2c4bb8e4b2bf572cefe"
          },
          {
            tahun: 2021,
            judul: "Molecular detection of Xanthomonas oryzae pv. oryzae from West Java and its in vivo pathogenicity test",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85107311556&doi=10.1063%2f5.0052632&partnerID=40&md5=0bb9d1e4fb929a6da8d8838435303dde"
          },
          {
            tahun: 2021,
            judul: "Numerical Simulations of MAPbI3-based Perovskite Solar Cells with Carbon Back Contact and Various Hole Transport Materials",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85124331124&doi=10.1109%2fICRAMET53537.2021.9650480&partnerID=40&md5=0ba2f2401330885e0d3a2267a5fbe7c8"
          },
          {
            tahun: 2021,
            judul: "On the solar activity dependence of midnight equatorial plasma bubbles during June solstice periods",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85117451840&doi=10.26464%2fepp2021039&partnerID=40&md5=0432f7ddf062092588616aeb41f74f89"
          },
          {
            tahun: 2021,
            judul: "Overview on Recent PVT Systems with Jet Impingement",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123289432&doi=10.18280%2fijht.390633&partnerID=40&md5=c286945489790c92f6c8a09ea8e4c8f0"
          },
          {
            tahun: 2021,
            judul: "Performance analysis of carbon-based perovskite solar cells by graphene oxide as hole transport layer: Experimental and numerical simulation",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85115006476&doi=10.1016%2fj.optmat.2021.111584&partnerID=40&md5=541b1ca8bf1dda5b2ba715b177f77791"
          },
          {
            tahun: 2021,
            judul: "Performance of hybrid solar photovoltaic–diesel generator and battery storage design for rural electrification in Malaysia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85118610708&doi=10.18280%2fijsdp.160509&partnerID=40&md5=ece40775d8cf29e15a0f57d1a003c016"
          },
          {
            tahun: 2021,
            judul: "Performance of nanocomposites TiO2/rGO as compact layer in zinc chloride modified perovskite solar cell",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85113952258&doi=10.1063%2f5.0060013&partnerID=40&md5=c3fb823462d380084dd452d8149b7932"
          },
          {
            tahun: 2021,
            judul: "Performance of single-large simulated sunlight for indoor photovoltaic testing",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85121468287&doi=10.1063%2f5.0070718&partnerID=40&md5=dd12a696e1754d77faf282afcd915c17"
          },
          {
            tahun: 2021,
            judul: "Recent advances and rational design strategies of carbon dots towards highly efficient solar evaporation",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85105227774&doi=10.1039%2fd1nr00023c&partnerID=40&md5=9322598ccf9168093ec6ee9f83fa36ad"
          },
          {
            tahun: 2021,
            judul: "Relationship of solar activity with magnetosphere and ionosphere disturbance during Coronal Mass Ejection (CME) Event on September 6, 2017",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85103095134&doi=10.1088%2f1742-6596%2f1816%2f1%2f012096&partnerID=40&md5=7c81b00290f063e89f2ac3028f62b439"
          },
          {
            tahun: 2021,
            judul: "Solar Panel Design and Analysis of Equatorial LEO Microsatellite",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85127559081&partnerID=40&md5=edbb75d025e456e1ef5106a5ec62f924"
          },
          {
            tahun: 2021,
            judul: "Solar-Assisted Microwave Convective Dryer for Coffee Cherries",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85104061494&partnerID=40&md5=8a12014665bef6b3d927bfb8fa4ccea9"
          },
          {
            tahun: 2021,
            judul: "Sputtered transparent electrodes for optoelectronic devices: Induced damage and mitigation strategies",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85122696373&doi=10.1016%2fj.matt.2021.09.021&partnerID=40&md5=caf022d3d8e2cb100da2ca597ec26785"
          },
          {
            tahun: 2021,
            judul: "Substitution of energy needs with renewable energy sources",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85122210975&doi=10.1088%2f1755-1315%2f927%2f1%2f012032&partnerID=40&md5=d0914d46d871ea9b4dbfa2d406dfe621"
          },
          {
            tahun: 2021,
            judul: "Techno-Economic analysis of photovoltaic utilization for lighting and cooling system of ferry Ro/Ro ship 500 GT",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85099318562&doi=10.1051%2fe3sconf%2f202122600012&partnerID=40&md5=a2a17db4fccdbfd328eb6dfb2c844e9f"
          },
          {
            tahun: 2021,
            judul: "Techno-economic Analysis of Rooftop Photovoltaic System (RPVS) using Thin-Frameless Solar Panels for Household Customers in Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123345011&doi=10.53560%2fPPASA%2858-SP1%29750&partnerID=40&md5=46b26dc6cfc4ba3cc621b4a4a2ac295b"
          },
          {
            tahun: 2021,
            judul: "The Impact of Renewable Energy Generation on the Spot Market Price in Germany: Ex-Post Analysis using Boosting Method",
            link: "http://dx.doi.org/10.5547/01956574.42.S12.akee"
          },
          {
            tahun: 2021,
            judul: "The technical design concept of hi-tech cook stove for urban communities using non-wood agricultural waste as Fuel sources",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85099308659&doi=10.1051%2fe3sconf%2f202122600015&partnerID=40&md5=51ad15590c01d576fb53ad34a9475016"
          },
          {
            tahun: 2021,
            judul: "The Water Based Photovoltaic Thermal Fiberglass Collector: An Experimental Investigation",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123886135&partnerID=40&md5=d4704aedab84f0d245a80e4a2054feab"
          },
          {
            tahun: 2021,
            judul: "Transparent Dye-sensitized Module for Solar Windows",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85103668668&doi=10.20964%2f2021.03.61&partnerID=40&md5=c2561740e9ce67fbf67a5e8fae395d18"
          },
          {
            tahun: 2021,
            judul: "Using Two Compatible Donor Polymers Boosts the Efficiency of Ternary Organic Solar Cells to 17.7%",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85115639770&doi=10.1021%2facs.chemmater.1c01433&partnerID=40&md5=0cd5fd36cbaf0dd3d39f61701b5b75c6"
          },
          {
            tahun: 2021,
            judul: "Vocational high school as a part of Indonesian photovoltaics supply chain",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85121497805&doi=10.1088%2f1755-1315%2f926%2f1%2f012026&partnerID=40&md5=c7adfc9a5cb5ff4ca50789220135568a"
          },
          {
            tahun: 2020,
            judul: "A robust maximum power point tracking control for PV panel using adaptive PI controller based on fuzzy logic",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85097046185&doi=10.12928%2fTELKOMNIKA.v18i6.17271&partnerID=40&md5=3a9cba9f62ba1780cd9f49bd3917bc3d"
          },
          {
            tahun: 2020,
            judul: "Automatic detection process of solar active region based on SDO/AIA digital image",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092784537&doi=10.1088%2f1742-6596%2f1613%2f1%2f012001&partnerID=40&md5=8dd186e41f94d3d66ff88e6de2bd1d36"
          },
          {
            tahun: 2020,
            judul: "Characterization of DC Artificial Network Using Analytical Method for Conducted Emission Measurement of Photovoltaic Inverter",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85098697691&doi=10.1109%2fICITEE49829.2020.9271775&partnerID=40&md5=29e1239f11c7d4198b433020146986ff"
          },
          {
            tahun: 2020,
            judul: "Data Acquisition and Visualization for Solar Power Battery using IoT Open Source Stack Solution",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85125780108&doi=10.1109%2fICSECC51444.2020.9557548&partnerID=40&md5=023c74e0c1e8fe7d80a65266ca7526c3"
          },
          {
            tahun: 2020,
            judul: "Design and optimization of turbomachinery components for parabolic dish solar hybrid micro gas turbine",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85099886130&doi=10.1115%2fGT2020-15270&partnerID=40&md5=6224d71193cbdb97eedd5efdca68cd7f"
          },
          {
            tahun: 2020,
            judul: "Design Bluetooth Low Energy for Battery and Photovoltaic Monitoring at Solar Powered Street Lamp System",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85090836116&doi=10.1088%2f1755-1315%2f537%2f1%2f012028&partnerID=40&md5=39c5f8b95947edd22318f4d1bf43ff50"
          },
          {
            tahun: 2020,
            judul: "Design of constant output voltage DC-AC inverter for batteryless solar PV system",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85085600108&doi=10.11591%2feei.v9i4.2350&partnerID=40&md5=878af5b70eedb1f65964f747fb235b7f"
          },
          {
            tahun: 2020,
            judul: "Design of Energy Harvesting System Based on Building Integrated Photovoltaic at Academic Building ITERA",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85090832440&doi=10.1088%2f1755-1315%2f537%2f1%2f012026&partnerID=40&md5=f119ea1ec112033a845d3f81133c6d1c"
          },
          {
            tahun: 2020,
            judul: "Effect of counter electrode materials on the performance of dye-sensitized solar cell",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85099373773&doi=10.1063%2f5.0001601&partnerID=40&md5=c97493b121495ae28360bb37d5fa3205"
          },
          {
            tahun: 2020,
            judul: "Energy Management System for Sustainable Operation of Robot in Disaster Response",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85099558031&doi=10.1109%2fICSEEA50711.2020.9306114&partnerID=40&md5=bc60715fee2a28f508e3d5f3c3ad50e6"
          },
          {
            tahun: 2020,
            judul: "Implementation of Photovoltaic Water Spray Cooling System and Its Feasibility Analysis",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85099577443&doi=10.1109%2fICSEEA50711.2020.9306133&partnerID=40&md5=9a9514d26f5c308fde2e95db4210b957",
        },
        {
            tahun: 2020,
            judul: "Integration of reduced graphene oxide in platinum-free counter electrode of dye-sensitized solar cell",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85088284381&doi=10.4028%2fwww.scientific.net%2fMSF.1000.12&partnerID=40&md5=be3ee1327f789a0d4cecea96a9ae38e8",
        },
        {
            tahun: 2020,
            judul: "Investigation on a macro bending based-fiber extensometer as displacement sensor with light source modulation for power supply efficiency",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85091893701&doi=10.1063%2f5.0014754&partnerID=40&md5=00a933e66be205c0d3424a2d7f5f7fc1",
        },
        {
            tahun: 2020,
            judul: "Last deglaciation-holocene Australian-Indonesian monsoon rainfall changes off southwest Sumba, Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092407097&doi=10.3390%2fatmos11090932&partnerID=40&md5=a596a0257aa8c5c2fd3c5dca4062f854",
        },
        {
            tahun: 2020,
            judul: "Optical wireless power transmission to moving object using Galvano mirror",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85098006395&doi=10.1117%2f12.2547424&partnerID=40&md5=1b0b2a5c91a921b5e6af9edad5378136",
        },
        {
            tahun: 2020,
            judul: "Optoelectronic properties of zno nanorods thin films derived from chemical bath deposition with different growth times",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092037659&doi=10.1063%2f5.0015869&partnerID=40&md5=d7025860f9c6820f9e0334ae0bb31501",
        },
        {
            tahun: 2020,
            judul: "Performance analysis and evaluation of a 10.6 kWp grid-connected photovoltaic system in Serpong",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85098330369&doi=10.1088%2f1757-899X%2f909%2f1%2f012019&partnerID=40&md5=f53fea93d3c94f8ebfe34ff159af8f56",
        },
        {
            tahun: 2020,
            judul: "Photospheric magnetic field properties of active region 12740",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85086805338&doi=10.1088%2f1742-6596%2f1523%2f1%2f012014&partnerID=40&md5=29f6854a732618637f994a168e033897",
        },
        {
            tahun: 2020,
            judul: "Photovoltaic Performance and up Scaling of Monolithic Dye-Sensitized Solar Module",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85099372092&doi=10.1109%2fICRAMET51080.2020.9298663&partnerID=40&md5=f845a05d323699f0b9fea939774487de",
        },
        {
            tahun: 2020,
            judul: "Phytotechnology for eutrophic waters: Ecological approach to increase benefits. A review",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85090857930&doi=10.1088%2f1755-1315%2f535%2f1%2f012011&partnerID=40&md5=b3b903ffc786fa5019f6fec118a75af6",
        },
        {
            tahun: 2020,
            judul: "Potential Energy Efficiency and Solar Energy Applications in a Small Industrial Laundry: A Practical Study of Energy Audit",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092502306&doi=10.1051%2fe3sconf%2f202019000008&partnerID=40&md5=2a56e1a5804d0f94e503cfe47bbb0757",
        },
        {
            tahun: 2020,
            judul: "Problem analysis of solar water pump installations in Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85084121750&doi=10.1063%2f5.0000674&partnerID=40&md5=d3890a97f1c2f345d279d0bd936d9a6a",
        },
        {
            tahun: 2020,
            judul: "Revealing the charge carrier kinetics in perovskite solar cells affected by mesoscopic structures and defect states from simple transient photovoltage measurements",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85095127851&doi=10.1038%2fs41598-020-74603-x&partnerID=40&md5=5223bf15e0ea80a34e19d66e62368882",
        },
        {
            tahun: 2020,
            judul: "Rotordynamics analysis of solar hybrid microturbine for concentrated solar power",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85150911018&doi=10.14203%2fj.mev.2020.v11.38-44&partnerID=40&md5=c0597c11f09863fdd5b19611d2c9cfe0",
        },
        {
            tahun: 2020,
            judul: "Short-term solar power forecasting using svr on hybrid pv power plant in indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85071476948&doi=10.1007%2f978-3-030-29035-1_23&partnerID=40&md5=42efd1495078068a434745ca6d382561",
        },
        {
            tahun: 2020,
            judul: "Study on performance characteristics of thermoelectric generator string",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85087806411&doi=10.1088%2f1742-6596%2f1568%2f1%2f012017&partnerID=40&md5=25cf3b9d2f229ff08fa1d74371ac08a0",
        },
        {
            tahun: 2020,
            judul: "Synthesis of titanium oxysulfate from ilmenite through hydrothermal, water leaching and sulfuric acid leaching routes",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092041406&doi=10.1063%2f5.0015864&partnerID=40&md5=09f6c9434dd68e6579682955b378a525",
        },
        {
            tahun: 2020,
            judul: "Techno-economic analysis of an optimized hybrid energy system implementation using PV-wind turbine-diesel generator at Indonesia's remote telecommunication base",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85086760345&doi=10.1088%2f1755-1315%2f483%2f1%2f012035&partnerID=40&md5=fe41d017e7d28b0cc487c18f50e6ff60",
        },
        {
            tahun: 2020,
            judul: "Techno-Economic of Photovoltaic Rooftop in Indonesia for Commercial and Residential Customer",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85105874869&doi=10.1109%2fICCED51276.2020.9415847&partnerID=40&md5=e7ff448c5c5f8b6e4d453914f0996618",
        },
        {
            tahun: 2020,
            judul: "The effect of screen printed blocking layer on the performance of monolithic DSSC",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85091912164&doi=10.1063%2f5.0022671&partnerID=40&md5=c9cf6637b05a08cfbcd7b67475022c6e",
        },
        {
            tahun: 2020,
            judul: "Thermal behavior and structure stability analysis of Indonesian natural zeolite",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092071272&doi=10.1063%2f5.0014649&partnerID=40&md5=c9d95d71a027281bf12cb52d1adabed9",
        },
        {
            tahun: 2020,
            judul: "Titanium Dioxide Nanorods as An Effective Blocking Layer in Solar Cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85097530201&doi=10.18517%2fijaseit.10.5.11142&partnerID=40&md5=ebf0a2126b9124be541d40713cf47a20",
        },
        {
            tahun: 2020,
            judul: "Validation of International Reference Ionosphere model (IRI-2016) for F-region peak electron density height (hmF2): Comparison with Incoherent Scatter Radar (ISR) and ionosonde measurements at Millstone Hill",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85083016613&doi=10.1016%2fj.asr.2020.03.017&partnerID=40&md5=4e8b3d931b927df08f384fdf9495635f",
        },
        {
            tahun: 2020,
            judul: "ZnO nanostructured materials for emerging solar cell applications",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85097817836&doi=10.1039%2fd0ra07689a&partnerID=40&md5=9a3b409f34690358437e6248db8f9ca8",
        },
        {
            tahun: 2019,
            judul: "A Statistical Analysis of Spread F Occurrence during Minimum and Maximum Solar Activities in Low Latitude Region",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85077693295&doi=10.1109%2fIGARSS.2019.8899082&partnerID=40&md5=90ada54dae6e97e1f5c1d3eeae6334af",
        },
        {
            tahun: 2019,
            judul: "A study on transfer element in single switched capacitor battery balancer system",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85062589824&doi=10.1109%2fICSEEA.2018.8627085&partnerID=40&md5=ea7d097a4fb136cef342924542d43d6e",
        },
        {
            tahun: 2019,
            judul: "Au-spotted zinc oxide nano-hexagonrods structure for plasmon-photoluminescence sensor",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85063740078&doi=10.1016%2fj.snb.2019.03.020&partnerID=40&md5=85eca146dca0bee24b872383aab47a07",
        },
        {
            tahun: 2019,
            judul: "Comparative Study for PV Power Stabilization Technology using Matlab Simulink",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85080908699&doi=10.1109%2fMoRSE48060.2019.8998693&partnerID=40&md5=5d88c42ef5f05606334caf4f27756672",
        },
        {
            tahun: 2019,
            judul: "Control of Surface Defects in ZnO Nanorod Arrays with Thermally Deposited Au Nanoparticles for Perovskite Photovoltaics",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85066130661&doi=10.1021%2facsaem.9b00452&partnerID=40&md5=6499da428ff29e7b14be7c6c0178f651",
        },
        {
            tahun: 2019,
            judul: "Design and Performance of Solar-powered Telescopic Lamp",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078241634&doi=10.1109%2fICSEEA47812.2019.8938646&partnerID=40&md5=ef1a571a6e396f25139db1be94aeb4ee",
        },
        {
            tahun: 2019,
            judul: "Development and analysis characteristic solar powered system on lapan surveillance UAV 03 (LSU 03)",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85064386127&doi=10.1063%2f1.5095328&partnerID=40&md5=01d2bd5f5b8d1fa7b19e310f79611f8b",
        },
        {
            tahun: 2019,
            judul: "Development of monolithic dye sensitized solar cell fabrication with polymer-based counter electrode",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85065570337&doi=10.1088%2f1742-6596%2f1191%2f1%2f012029&partnerID=40&md5=251013d0d5e46ff2b071cd48ae45c64b",
        },
        {
            tahun: 2019,
            judul: "Dynamic power injection for solar PV constant power generation",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85076156646&doi=10.1109%2fICITACEE.2019.8904141&partnerID=40&md5=b4ff031cbb6cbd1b4be03c8fbc6160e7",
        },
        {
            tahun: 2019,
            judul: "Ecological and physiological characterization of ACC deaminase-producing bacteria isolated from specific sites in Yogyakarta, Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85072911274&doi=10.1088%2f1755-1315%2f308%2f1%2f012046&partnerID=40&md5=0f945cd4909beb9a1acf547c66c64b9d",
        },
        {
            tahun: 2019,
            judul: "Effect of reduced graphene oxide addition on the performance of zinc oxide nanorod based dye-sensitized solar cell",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85077818199&doi=10.1088%2f1742-6596%2f1402%2f6%2f066017&partnerID=40&md5=9575e002f615d8e31d8a84e991b892a0",
        },
        {
            tahun: 2019,
            judul: "Effect of Tracking System Configurations to Beam Aperture Irradiance of Parabolic Dish in Bandung, Indonesia",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078230632&doi=10.1109%2fICSEEA47812.2019.8938650&partnerID=40&md5=0ec175614950bae876a32dc16c03fe78",
        },
        {
            tahun: 2019,
            judul: "Fabrication of anti-reflection coating TiO2-SiO2 on silicon substrate with pulsed laser deposition method",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85065626387&doi=10.1117%2f12.2503241&partnerID=40&md5=87f24806ba931b459d12b2dabc8969bf",
        },
        {
            tahun: 2019,
            judul: "Fabrication of Titanium Dioxide-reduced Graphene Oxide (TiO2/rGO) nanocomposites as the Photoanode in Dye Sensitized Solar Cells",
            link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85077823290&doi=10.1088%2f1742-6596%2f1402%2f5%2f055101&partnerID=40&md5=650785acc6c5c31a523cbd45c8564249",
        },
        {
          tahun: 2019,
          judul: "Flare Identification by Forecasting Sunspot Numbers Using Fuzzy Time Series Markov Chain Model",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078469251&doi=10.1109%2fISITIA.2019.8937242&partnerID=40&md5=3733533b194b3add9de9de4748cf8828",
        },
        {
          tahun: 2019,
          judul: "Impurity Gettering by Boron- and Phosphorus-Doped Polysilicon Passivating Contacts for High-Efficiency Multicrystalline Silicon Solar Cells",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85069884688&doi=10.1002%2fpssa.201900321&partnerID=40&md5=5635c02f988007b3b6d68e38a8c4dd13",
        },
        {
          tahun: 2019,
          judul: "Influence of Inorganic Binder Composition on the Structure-Property Relationship of Monolithic Dye-sensitized Solar Cells with Carbon-based Counter Electrode",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85076163860&doi=10.1088%2f1757-899X%2f622%2f1%2f012033&partnerID=40&md5=25a4c4330f80c8a9267440853f65b20b",
        },
        {
          tahun: 2019,
          judul: "Modeling and Performance Analysis of a Parallel Solar Hybrid Micro Gas Turbine",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078269415&doi=10.1109%2fICSEEA47812.2019.8938652&partnerID=40&md5=fe8eccbb9c584db3f6cee87037a24e0f",
        },
        {
          tahun: 2019,
          judul: "Modelling and simulation of closed loop buck converter to supply constant DC load for single solar PV panel",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85062632488&doi=10.1109%2fICSEEA.2018.8627105&partnerID=40&md5=1a1033df18f31e2912acbe05d9fe7150",
        },
        {
          tahun: 2019,
          judul: "Performance of 10 kWp PV Rooftop System Based on Smart Grid in Energy Building PUSPIPTEK",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078277198&doi=10.1109%2fICSEEA47812.2019.8938615&partnerID=40&md5=6e6e863b6ff13544912310e0cdfaee18",
        },
        {
          tahun: 2019,
          judul: "Photovoltaic Power Stabilization using Dynamic Power Injection Method",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078297646&doi=10.1109%2fICSEEA47812.2019.8938622&partnerID=40&md5=966074062d95a34ebf080ea222302c65",
        },
        {
          tahun: 2019,
          judul: "Power produced analysis of solar arrays in nadir pointing mode for low-earth equatorial micro-satellite conceptual design",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85067071230&doi=10.1088%2f1755-1315%2f284%2f1%2f012048&partnerID=40&md5=4cd9a9869c7bda36e7bbd2b7d7e9d7b1",
        },
        {
          tahun: 2019,
          judul: "Prediction of maximum amplitude of solar cycle 25 using machine learning",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85068795892&doi=10.1088%2f1742-6596%2f1231%2f1%2f012022&partnerID=40&md5=f68d7104fb94e319efe30ed73dd38f70",
        },
        {
          tahun: 2019,
          judul: "Simulation of Dye-Sensitized Solar Cells (DSSC) Performance for Various Local Natural Dye Photosensitizers",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85065651165&doi=10.1088%2f1757-899X%2f515%2f1%2f012048&partnerID=40&md5=de1c9f7b812d8d55342f93aa1345f220",
        },
        {
          tahun: 2019,
          judul: "Simulation of Enhancement PV Power Stabilization with Dynamic Power Injection",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078236335&doi=10.1109%2fICSEEA47812.2019.8938649&partnerID=40&md5=d4ece3b8e4dcdea271a129159828aeb6",
        },
        {
          tahun: 2019,
          judul: "Simulation of PV-biogas integration on hybrid power plant using homer: Study case of superior livestock breeding center and forage of animal feed (BBPTU-HPT) Baturraden",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85062641573&doi=10.1109%2fICSEEA.2018.8627132&partnerID=40&md5=e94f8dcdacbe09b592dec7b247172314",
        },
        {
          tahun: 2019,
          judul: "Simulation-based energy balance analysis of SAR micro-satellite",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85079231304&doi=10.1117%2f12.2541875&partnerID=40&md5=c25fd981686d05627dacf5293fbea7af",
        },
        {
          tahun: 2019,
          judul: "Solar air heater for preheating the air of broiler house",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85062592570&doi=10.1109%2fICSEEA.2018.8627106&partnerID=40&md5=5744fcb07437f242ba4fc6d9782ff321",
        },
        {
          tahun: 2019,
          judul: "Solar coronal holes and their geo-effectiveness",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85062484724&doi=10.1088%2f1742-6596%2f1127%2f1%2f012052&partnerID=40&md5=149f9ddaa5d2e54bdcd618d394c64236",
        },
        {
          tahun: 2019,
          judul: "Study on the effect of PVDF and TiO2 composition on quasi-solid state DSSC",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85074797948&doi=10.1088%2f1742-6596%2f1245%2f1%2f012068&partnerID=40&md5=c12967bf437f4adcb556084883554382",
        },
        {
          tahun: 2019,
          judul: "Surface modification of poly (ethylene terephthalate) via hydrolysed erosion process",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078021372&doi=10.1063%2f1.5134616&partnerID=40&md5=fb69791384b9351af03c52b1c882b0c3",
        },
        {
          tahun: 2019,
          judul: "Synthesis and application of TiO2 nanorods as photo-anode in dye-sensitized solar cells",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85065563479&doi=10.1088%2f1742-6596%2f1191%2f1%2f012023&partnerID=40&md5=8a04cfcbf1ccfed67fa8b76319288491",
        },
        {
          tahun: 2019,
          judul: "Synthesis of TiO2 nanoparticles at low hydrothermal temperature and its performance for DSSC sensitized using natural dye extracted from Melastoma malabathricum L. seeds",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85068755869&doi=10.1002%2fer.4710&partnerID=40&md5=1a07f8ec7587822894d9ccadcbd4ddd0",
        },
        {
          tahun: 2019,
          judul: "The Effect of deposition times on preparation of SnO2:F conductive glass by Indonesian local stannic chloride precursors",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85068962965&doi=10.1088%2f1757-899X%2f541%2f1%2f012022&partnerID=40&md5=6568cb938caef09b269c1609bd023410",
        },
        {
          tahun: 2019,
          judul: "The effect of photovoltaic penetration on frequency response of distribution system",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85062614133&doi=10.1109%2fICSEEA.2018.8627080&partnerID=40&md5=2792427b6d959e54e4e7c1b9246dfd2e",
        },
        {
          tahun: 2019,
          judul: "The influence of carbon counter electrode composition on the performance of monolithic dye-sensitized solar cells",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85065577913&doi=10.1088%2f1742-6596%2f1191%2f1%2f012021&partnerID=40&md5=eb83ba98e31d5623c439493070c2bcc6",
        },
        {
          tahun: 2019,
          judul: "The Vulnerability of Climate Change in Indonesia to Renewable Energy",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85070575482&doi=10.1088%2f1755-1315%2f303%2f1%2f012029&partnerID=40&md5=2b59495569681c87668c314fd39e629a",
        },
        {
          tahun: 2019,
          judul: "Thermal behavior and characteristic of Pangandaran natural Zeolite",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85073465601&doi=10.5109%2f2349298&partnerID=40&md5=04cf88f61369f8a19dc7c8d5ca1a4efd",
        },
        {
          tahun: 2019,
          judul: "Visibility study of Optimized Hybrid Energy System Implementation on Indonesia's Telecommunication Base Station",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85086308118&doi=10.1109%2fIEEECONF48524.2019.9102483&partnerID=40&md5=2e75ee8bef2a271fd36f71d973352539",
        },
        {
          tahun: 2019,
          judul: "Wireless telemetry for real-Time monitoring of photovoltaic application system using monopole antenna 3drobotics radio 915 mhz",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85080956452&doi=10.1109%2fTSSA48701.2019.8985518&partnerID=40&md5=a5078883fceac626df54b8e9f7a07a28",
        },
        {
          tahun: 2018,
          judul: "A comparative study between titania and zirconia as material for scattering layer in dye-sensitized solar cells",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85047739173&doi=10.1088%2f1742-6596%2f1011%2f1%2f012003&partnerID=40&md5=8adf1c2d556f53f7c1bb0116247ba2d9",
        },
        {
          tahun: 2018,
          judul: "A comparative study of the equatorial spread-f occurrence between post-sunset and post-midnight during minimum solar activity",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85058275437&doi=10.1117%2f12.2325123&partnerID=40&md5=756af5567fd584a41bf8cfea11e952e5",
        },
        {
          tahun: 2018,
          judul: "A NEW CASCADE SOLAR DESALINATION SYSTEM WITH INTEGRATED THERMOSYPHONS",
          link: "http://dx.doi.org/10.14716/ijtech.v9i2.990",
        },
        {
          tahun: 2018,
          judul: "A technique to track maximum power-point of grid-connected single-stage inverter photovoltaic system",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85050011146&doi=10.1109%2fICAMIMIA.2017.8387610&partnerID=40&md5=8adb3634e1bdfc0ebe46c489178d8f0b",
        },
        {
          tahun: 2018,
          judul: "Correlating the Photoelectrode Thickness with the Performance and Stability of Dye-sensitized Solar Cells",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85065055830&doi=10.1109%2fEECCIS.2018.8692868&partnerID=40&md5=ec47c4705f4bcd5ee4598fcfc64cd5e6",
        },
        {
          tahun: 2018,
          judul: "Design and Implementation of Effective Electrical Power System for Surya Satellite-1",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85047730924&doi=10.1088%2f1755-1315%2f149%2f1%2f012059&partnerID=40&md5=0608de658229de7c654bf4c74b8fb2ed",
        },
        {
          tahun: 2018,
          judul: "Design, development and performance prediction of solar heater for regeneration of adsorbent chamber",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85041692699&doi=10.1088%2f1755-1315%2f105%2f1%2f012004&partnerID=40&md5=43178e1f7b3508973b237a486c4bd2f8",
        },
        {
          tahun: 2018,
          judul: "Development of battery performance data acquisition system for monitoring battery performance inside solar cell system",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85057846622&doi=10.1088%2f1757-899X%2f432%2f1%2f012057&partnerID=40&md5=2e3d82eb14063399f21c85a550eb2e7c",
        },
        {
          tahun: 2018,
          judul: "Digital portable morse code signaling device based on intermittent light",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85064763430&doi=10.1109%2fICRAMET.2018.8683937&partnerID=40&md5=4008ad5fc7cfe549bbce52a291507729",
        },
        {
          tahun: 2018,
          judul: "Efficient and Stable Photovoltaic Characteristics of Quasi-Solid State DSSC using Polymer Gel Electrolyte Based on Ionic Liquid in Organosiloxane Polymer Gels",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85047765396&doi=10.1088%2f1742-6596%2f1011%2f1%2f012020&partnerID=40&md5=6d628f3f177950cdc1ce4c2f60e9bd38",
        },
        {
          tahun: 2018,
          judul: "Electrochemical analysis of dye sensitized solar cell employing indoline-based and ruthenium-based dye combined with volatile and low-volatility solution-based electrolyte",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85053508637&doi=10.1007%2fs10854-018-0051-8&partnerID=40&md5=9cfe8cbaadeb4189adb9775e49cc8fcc",
        },
        {
          tahun: 2018,
          judul: "Enhancing the efficiency of dye-sensitized solar cells by hydrothermal post-treatment in acidic environment",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85045665636&doi=10.1088%2f1742-6596%2f985%2f1%2f012055&partnerID=40&md5=2632e5facadc32c219d253b0c97f1079",
        },
        {
          tahun: 2018,
          judul: "ENSO and PDO Influence to Climate Variability in Monsoon Region of Indonesia",
          link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85050013841&doi=10.1088%2f1755-1315%2f166%2f1%2f012044&partnerID=40&md5=9f92caad04f50bdab8440fc8dd9b04dd",
        },
        {
          tahun: 2018,
          judul:
            "Fuel Saving on Diesel Genset using PV/Battery Spike Cutting in Remote Area Microgrid",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85046737088&doi=10.1051%2fmatecconf%2f201816401045&partnerID=40&md5=68ccd657ed55f03b77f5c008361c9ee6",
        },
        {
          tahun: 2018,
          judul:
            "Highly Accurate Daily Solar Radiation Forecasting using SW-SVR for Hybrid Power Plant in Indonesia",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85063524611&doi=10.1109%2fICNERE.2018.8642593&partnerID=40&md5=572a805f4108dc8f100c23a0e9c0b004",
        },
        {
          tahun: 2018,
          judul:
            "Improving the efficiency of perovskite solar cell through the addition of compact layer under tio2 electron transfer material",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85055563743&doi=10.4028%2fwww.scientific.net%2fMSF.929.218&partnerID=40&md5=b1201e07e4db5e39d98787a5f7633aee",
        },
        {
          tahun: 2018,
          judul:
            "Ionospheric earthquake effects detection based on Total Electron Content (TEC) GPS Correlation",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85045623736&doi=10.1088%2f1755-1315%2f132%2f1%2f012014&partnerID=40&md5=73e5d82f6be036587b700f870cefc0f3",
        },
        {
          tahun: 2018,
          judul:
            "Iron and boron removal from sodium silicate using complexation methods",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85047802527&doi=10.1063%2f1.5038303&partnerID=40&md5=79714c1af33c46e7a052ceba3cc97f64",
        },
        {
          tahun: 2018,
          judul:
            "Performance of 7-cells Dye Sensitized Solar Module in Z-type Series Interconnection",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85046280999&doi=10.1088%2f1757-899X%2f299%2f1%2f012088&partnerID=40&md5=e3607f0c35f5b2acf86d5b958c8a2e7b",
        },
        {
          tahun: 2018,
          judul:
            "Performance prediction of vaccine carrier using adsorption process and 13x/cacl2 composite zeolite as adsorbent",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85041651797&doi=10.1088%2f1755-1315%2f105%2f1%2f012003&partnerID=40&md5=759af1e43c224a18545a0f06ac7e05c8",
        },
        {
          tahun: 2018,
          judul:
            "Power Generation Forecasting of Dual-Axis Solar Tracked PV System Based on Averaging and Simple Weighting Ensemble Neural Networks",
          link: "http://dx.doi.org/10.24003/emitter.v6i2.341",
        },
        {
          tahun: 2018,
          judul:
            "Preliminary design of communication and power subsystem for micro-satellite with maritime surveillance mission",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85058218075&doi=10.1088%2f1742-6596%2f1130%2f1%2f012011&partnerID=40&md5=a300a8146f7ef5c9acdbdbe7ca54df78",
        },
        {
          tahun: 2018,
          judul:
            "Preliminary study of natural zeolite from Bayah for solar powered cooling application",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85041695550&doi=10.1088%2f1755-1315%2f105%2f1%2f012001&partnerID=40&md5=a4c36c6d39956cfa4346e1f4984e3a3b",
        },
        {
          tahun: 2018,
          judul:
            "Reliability performance of up-scaling DSSC into sub-module in series design using hermetic sealing",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85045616259&doi=10.1088%2f1742-6596%2f985%2f1%2f012052&partnerID=40&md5=6c507e7a3db55da9780b8953a1fc8e34",
        },
        {
          tahun: 2018,
          judul:
            "Simulation Approach to Determine Position of the Fixed Installed Deployable Solar Panel",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85061803275&doi=10.1109%2fICARES.2018.8547098&partnerID=40&md5=6d0a3d9dfd4de561fe2f9188a734194c",
        },
        {
          tahun: 2018,
          judul:
            "Stability of organic solar cells with PCDTBT donor polymer: An interlaboratory study",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85048888281&doi=10.1557%2fjmr.2018.163&partnerID=40&md5=c4d6f5a453007cc398cc2eef902e59ac",
        },
        {
          tahun: 2018,
          judul:
            "Storage system manufacturability, portability and modularity for a pico hydro turbine",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85056410145&partnerID=40&md5=7eee1755b60f02466b6d4cf68e4c964f",
        },
        {
          tahun: 2018,
          judul:
            "Turning renewable energy be a dispatchable electric generation through energy management system technology: Sumba smart micro grid case",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85068543377&doi=10.1109%2fICPERE.2018.8739691&partnerID=40&md5=0903acaad090e66506a7e368bd27ffb8",
        },
        {
          tahun: 2018,
          judul:
            "V2G Development on Public Vertical Parking Lot to Support Community Energy Management System",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85046820126&doi=10.1051%2fmatecconf%2f201816401046&partnerID=40&md5=c0fe2b62a4be5c0a2087d41133bc1603",
        },
        {
          tahun: 2018,
          judul:
            "Validation of Solar Inverter Testing Procedure for Stand-Alone PV Systems",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85065102698&doi=10.1109%2fEECCIS.2018.8692977&partnerID=40&md5=6143810b2d03019955775dbc75e990a3",
        },
        {
          tahun: 2018,
          judul:
            "Vertical profile variations of ozone in lower stratosphere in Indonesia and influence to upper troposphere ozone based on satellite",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85050038151&doi=10.1088%2f1755-1315%2f166%2f1%2f012038&partnerID=40&md5=fa085e2215f48aa8f706b992f50c138a",
        },
        {
          tahun: 2017,
          judul:
            "Comparative performance testing of solar panels for smart city micro-grids",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85047464388&doi=10.1109%2fICON-SONICS.2017.8267826&partnerID=40&md5=f1ca274d4c4e6d7fbfab37c2e7cd9176",
        },
        {
          tahun: 2017,
          judul:
            "Correlation analysis of solar constant, solar activity and cosmic ray",
          link: "http://dx.doi.org/10.1088/1742-6596/817/1/012045",
        },
        {
          tahun: 2017,
          judul:
            "Development of wireless sensor network for landslide monitoring system",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85028554600&doi=10.1088%2f1742-6596%2f853%2f1%2f012010&partnerID=40&md5=651663833524f619d95a4b839908c64a",
        },
        {
          tahun: 2017,
          judul:
            "Dual-axis solar tracking system: A combined astronomical estimation and visual feedback",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85016931440&doi=10.1109%2fICSEEA.2016.7873573&partnerID=40&md5=459ea7478d5e74f71f5d3441447a4abb",
        },
        {
          tahun: 2017,
          judul:
            "Electrical properties of dye-sensitized solar module with integrated parallel connections",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85045912022&doi=10.1109%2fQIR.2017.8168468&partnerID=40&md5=9fdc163a4ebb528b006294897f575faa",
        },
        {
          tahun: 2017,
          judul:
            "Experimental investigation of serial parallel and total-cross-tied configuration photovoltaic under partial shading conditions",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85050759923&doi=10.1109%2fICSEEA.2017.8267699&partnerID=40&md5=d465fd5860c493f6df99400468be6c45",
        },
        {
          tahun: 2017,
          judul:
            "Forecasting of power output of 2-Axis solar tracked PV systems using ensemble neural network",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85048555112&doi=10.1109%2fELECSYM.2017.8240394&partnerID=40&md5=ffba6efc284c050070bff64c8caaea8f",
        },
        {
          tahun: 2017,
          judul:
            "From Cell to Module: Fabrication and Long-term Stability of Dye-sensitized Solar Cells",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85026252545&doi=10.1088%2f1757-899X%2f214%2f1%2f012007&partnerID=40&md5=9010a456d01ced9c5bd11cd6253b13a6",
        },
        {
          tahun: 2017,
          judul:
            "Hybrid energy system design of micro hydro-PV-biogas Based micro-grid",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85016636936&doi=10.1088%2f1757-899X%2f180%2f1%2f012080&partnerID=40&md5=b9e8d082cc16b0ea25ebd734376e3e9d",
        },
        {
          tahun: 2017,
          judul:
            "Impact of the Seed Layer Morphology On the Initial Growth of HPMC-Si Ingot",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85029352065&doi=10.1002%2fpssc.201700177&partnerID=40&md5=3834af1aeca2677f67450bcf7a36fae2",
        },
        {
          tahun: 2017,
          judul:
            "Load sharing control between PV power plant and diesel generator to mitigate effect of PV fluctuation using PID algorithm",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85042793975&doi=10.1109%2fICHVEPS.2017.8225930&partnerID=40&md5=887aa9dff898f8b9adfea97fb581f2e8",
        },
        {
          tahun: 2017,
          judul:
            "Low-cost monolithic dye-sensitized solar cells fabricated on single conductive substrate",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85049610466&doi=10.1109%2fICRAMET.2017.8253168&partnerID=40&md5=6b15c3484db14c0d1ff9765ca69bc1d7",
        },
        {
          tahun: 2017,
          judul:
            "Performance analysis of photovoltaic modules in Baiturrahman Islamic boarding school",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85017014855&doi=10.1109%2fICSEEA.2016.7873566&partnerID=40&md5=c8a4fffbbf3f8d6794df7319f1769462",
        },
        {
          tahun: 2017,
          judul:
            "Post-treatments to enhance vertical alignment of ZnO nanorods on glass substrates by hydrothermal deposition",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85027359153&doi=10.4028%2fwww.scientific.net%2fMSF.901.44&partnerID=40&md5=174e9a27ec5ccff49f14f9b2897191b6",
        },
        {
          tahun: 2017,
          judul:
            "Simulation of Buck-Boost Converter for Solar Panels using PID Controller",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85028544775&doi=10.1016%2fj.egypro.2017.05.011&partnerID=40&md5=c5248e61b8d2db909ea94b9d15104adb",
        },
        {
          tahun: 2017,
          judul:
            "Smart Diesel Generator to compensate on-grid PV fluctuation: A case study in Sumba Island Indonesia",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85019241200&doi=10.1109%2fICPERE.2016.7904847&partnerID=40&md5=087569f811c8afcf422f63072a62a18d",
        },
        {
          tahun: 2017,
          judul:
            "The effect of initial growth interface on the grain structure in HPMC-Si ingot",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85050795324&doi=10.1109%2fICSEEA.2017.8267705&partnerID=40&md5=c6b080b426b2aaeab42852a776babb91",
        },
        {
          tahun: 2017,
          judul:
            "The effect of substrate heating temperature upon spray pyrolysis process on the morphological and functional properties of fluorine tin oxide conducting glass",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85017654832&doi=10.1063%2f1.4979219&partnerID=40&md5=6dc3c01cb37e49c5b6eae02d2f3f4b9b",
        },
        {
          tahun: 2017,
          judul:
            "The effect of various precursors and solvents on the characteristics of fluorine-doped tin oxide conducting glass fabricated by ultrasonic spray pyrolysis",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85039071204&doi=10.14716%2fijtech.v8i7.693&partnerID=40&md5=831f3cc03338e106a7444b0661296fa8",
        },
        {
          tahun: 2017,
          judul:
            "The influence of the addition of dye surface modifier on the performance of transparent dye sensitized solar cells",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85038963720&doi=10.1063%2f1.5011907&partnerID=40&md5=e982173ed5658833ea726427ef0f4d94",
        },
        {
          tahun: 2017,
          judul:
            "The Temperature Effect on the Working Characteristics of Solar Cells Based on Organometal Halide Perovskite Crystals",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85030159141&doi=10.1088%2f1742-6596%2f877%2f1%2f012043&partnerID=40&md5=2ca02a450033f51cb548558051385de0",
        },
        {
          tahun: 2017,
          judul:
            "TiO2 Nanorods Preparation from Titanyl Sulphate Produced by Dissolution of Ilmenite",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85016606045&doi=10.1088%2f1757-899X%2f176%2f1%2f012042&partnerID=40&md5=05309f71e39cb58fa39741b9cddc3664",
        },
        {
          tahun: 2017,
          judul:
            "Vertical facade PV installation to optimize microgrid system on high rise EV parking lot with AC and DC charging station",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85046754257&doi=10.1109%2fICSEEA.2017.8267703&partnerID=40&md5=69adecc3d75aeed1f8d24b265bb2c286",
        },
        {
          tahun: 2016,
          judul:
            "Architecture and engineering of hydrogen fuel cell power generation based on renewable energy",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84998723961&doi=10.4028%2fwww.scientific.net%2fKEM.708.110&partnerID=40&md5=99ce192122149466cdfa2ad0b0b226e3",
        },
        {
          tahun: 2016,
          judul:
            "Comparative performance testing of photovoltaic modules in tropical climates of Indonesia",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84984560568&doi=10.1063%2f1.4941865&partnerID=40&md5=4cb8fc38927a728a6927846805760be7",
        },
        {
          tahun: 2016,
          judul:
            "Coronal structure analysis based on the potential field source surface modeling and total solar eclipse observation",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85007044379&doi=10.1088%2f1742-6596%2f771%2f1%2f012034&partnerID=40&md5=accb2b044e52799dc77a41ad53630ac9",
        },
        {
          tahun: 2016,
          judul: "Critical condition in CuInAlSe2 solar cell absorbers",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84994643781&doi=10.12928%2fTELKOMNIKA.v14i3.3644&partnerID=40&md5=8b91aa7083354468566d393110214160",
        },
        {
          tahun: 2016,
          judul:
            "Effect of sintering temperatures and screen printing types on TiO2 layers in DSSC applications",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84984582361&doi=10.1063%2f1.4943444&partnerID=40&md5=84376bd5b00b3c09d09b2e08cd0dddc0",
        },
        {
          tahun: 2016,
          judul:
            "Enhancement ZnO nanofiber as semiconductor for dye-sensitized solar cells by using Al doped",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84984559358&doi=10.1063%2f1.4943449&partnerID=40&md5=c3845b12c7f3c7482ffc0a9b99c0ff25",
        },
        {
          tahun: 2016,
          judul:
            "Fabrication of organic solar cells with design blend P3HT: PCBM variation of mass ratio",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84959875179&doi=10.1088%2f1757-899X%2f107%2f1%2f012050&partnerID=40&md5=fe9093f1a237812de6d736be08aec1ea",
        },
        {
          tahun: 2016,
          judul:
            "Flexible polymer solar cells sub-modules using different cells dimension",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84984588798&doi=10.1063%2f1.4941619&partnerID=40&md5=673cd26a0ff538afff98f7bb3452d07f",
        },
        {
          tahun: 2016,
          judul:
            "Influences mass concentration of P3HT and PCBM to application of organic solar cells",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85012964584&doi=10.1088%2f1742-6596%2f776%2f1%2f012012&partnerID=40&md5=4e30e5e1cd2eeb6220390922e95acadd",
        },
        {
          tahun: 2016,
          judul:
            "Ludendorff coronal flattening index of the total solar eclipse on March 9, 2016",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85007028314&doi=10.1088%2f1742-6596%2f771%2f1%2f012005&partnerID=40&md5=0b5d6ce8b772dd7aa54595fdbb38ce24",
        },
        {
          tahun: 2016,
          judul:
            "Optical transmittance, electrical resistivity and microstructural characteristics of undoped and fluorine-doped tin oxide conductive glass fabricated by spray pyrolysis technique with modified ultrasonic nebulizer",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85010295374&doi=10.14716%2fijtech.v7i8.6885&partnerID=40&md5=4acc6b3861d847ae9c98e864ef9a3b27",
        },
        {
          tahun: 2016,
          judul:
            "Optimization of TiO2 photoelectrode with titanium isopropoxide for flexible dye sensitized solar cells",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84984538772&doi=10.1063%2f1.4946918&partnerID=40&md5=0f4efda7a0f3b8584443e25119179c62",
        },
        {
          tahun: 2016,
          judul:
            "Performance analysis of crystalline (poly-Si) and thin film (a-Si/μc-Si) photovoltaic systems",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84962653182&partnerID=40&md5=bb5facbcfdd1743d49dab798e30de0e1",
        },
        {
          tahun: 2016,
          judul: "Performance Analysis of Flexible DSSC with Binder Addition",
          link: "http://dx.doi.org/10.1063/1.4945504",
        },
        {
          tahun: 2016,
          judul:
            "Perovskite/polymer solar cells prepared using solution process",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85012970427&doi=10.1088%2f1742-6596%2f776%2f1%2f012010&partnerID=40&md5=fb842f809d8ae6c99a1db2a82a0d599b",
        },
        {
          tahun: 2016,
          judul:
            "Stability optimization of TiO2 dye-sensitized solar sub-modules in Z-type series interconnection",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84990895517&doi=10.1109%2fSMELEC.2016.7573647&partnerID=40&md5=87ee865c155ab8e9ac20c5c65ed47fb9",
        },
        {
          tahun: 2016,
          judul:
            "The influence of deposition time and substrate temperature during the spray pyrolysis process on the electrical resistivity and optical transmittance of 2 wt% fluorine-doped tin oxide conducting glass",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85010465875&doi=10.14716%2fijtech.v7i8.7065&partnerID=40&md5=fb9801d010114d016eaa358fd431e620",
        },
        {
          tahun: 2016,
          judul:
            "The influence of material type and composition of TiO2- ZnO on manufacturing of paste for the application of DSSC",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85012951272&doi=10.1088%2f1742-6596%2f776%2f1%2f012009&partnerID=40&md5=fcc66a1bd6c93c472e02081e7f834fd5",
        },
        {
          tahun: 2016,
          judul:
            "The influence of material type and composition of TiO2-ZnO on manufacturing of paste for the application of DSSC",
          link:
            "http://dx.doi.org/10.1088/1742-6596/776/1/012009",
        },
        {
          tahun: 2016,
          judul:
            "The influence of the composition of P3HT:TiO2 on the characteristics of hybrid polymer solar cell",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84959887721&doi=10.1088%2f1757-899X%2f107%2f1%2f012037&partnerID=40&md5=f2602b301a38b4c3cf042b6f9ca43b95",
        },
        {
          tahun: 2016,
          judul:
            "The influence of the organic solar cell open-circuit voltage and short-circuit current parameters on the porosity of titanium electrode",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84966550932&doi=10.1109%2fICACOMIT.2015.7440187&partnerID=40&md5=70025d9a959e37b5f1efe1ed9c8eff68",
        },
        {
          tahun: 2016,
          judul:
            "The Result of Synthesis Analysis of the Powder TiO2/ZnO as a layer of Electrodes for Dye Sensitized Solar Cell",
          link: "http://dx.doi.org/10.1063/1.4945523",
        },
        {
          tahun: 2016,
          judul:
            "The result of synthesis analysis of the powder TiO2/ZnO as a layer of electrodes for dye sensitized solar cell applications",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84984576811&doi=10.1063%2f1.4945523&partnerID=40&md5=028a2831d636dd04a3200829fd961591",
        },
        {
          tahun: 2016,
          judul:
            "The study of FTO surface texturing fabrication using Argon plasma etching technique for DSSC applications",
          link: "http://dx.doi.org/10.1088/1757-899X/107/1/012028",
        },
        {
          tahun: 2015,
          judul:
            "Astronomy algorithm simulation for two degrees of freedom of solar tracking mechanism using Clanguage",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84947427857&doi=10.1016%2fj.egypro.2015.03.233&partnerID=40&md5=917e6f11759f91c51b998b6c4d495ee6",
        },
        {
          tahun: 2015,
          judul:
            "Correlation between solar activity and El Niño Southern Oscillation (ENSO)",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84984577715&doi=10.1063%2f1.4930679&partnerID=40&md5=9049539617f8187f0a49f0467c6043b9",
        },
        {
          tahun: 2015,
          judul:
            "Design of single phase inverter using microcontroller assisted by data processing applications software",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84960153654&doi=10.1088%2f1757-899X%2f100%2f1%2f012009&partnerID=40&md5=dc22c7610209cd6487465dd881e7ff08",
        },
        {
          tahun: 2015,
          judul:
            "Engineering nanostructural routes for enhancing thermoelectric performance: Bulk to nanoscale",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84969542838&doi=10.3389%2ffchem.2015.00063&partnerID=40&md5=7a7f512591f36e3a4c04c3c0b9fdf4a3",
        },
        {
          tahun: 2015,
          judul:
            "Fabrication of dye sensitized solar cells with spray coated carbon nano tube (CNT) based counter electrodes",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84945173626&doi=10.1016%2fj.egypro.2015.03.230&partnerID=40&md5=271a660d36889237ce55ef5e50e7a37c",
        },
        {
          tahun: 2015,
          judul:
            "Factors influencing the behavioral intention of public transport passengers",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84938694483&doi=10.1108%2fIJQRM-01-2013-0002&partnerID=40&md5=1c4f7978e257654935a5ae65c5171408",
        },
        {
          tahun: 2015,
          judul:
            "The Investigation of CuOx Anode Interlayer Effect in Working Performance and Charge Carrier Transport in Hybrid Solar Cells with Inverted Structure",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84937909480&doi=10.1002%2fmasy.201550316&partnerID=40&md5=b403942afa64590a0f9f9dbe5d4ca094",
        },
        {
          tahun: 2015,
          judul:
            "Tropical marine Chlorella sp. PP1 as a source of photosynthetic pigments for dye-sensitized solar cells",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84937573247&doi=10.1016%2fj.algal.2015.04.009&partnerID=40&md5=60cf31e2682ddab76e6d4f169744591a",
        },
        {
          tahun: 2014,
          judul: "Development of two axis solar tracking using five photodiodes",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84949923203&doi=10.1109%2fEECCIS.2014.7003716&partnerID=40&md5=152b097e7549840bfdbb8a0da3e3da75",
        },
        {
          tahun: 2014,
          judul:
            "Formation of solar cells based on Ba0.5 Sr0.5 TiO3 (BST) ferroelectric thick film",
          link:
            "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84906485305&doi=10.1063%2f1.4866724&partnerID=40&md5=231cd453e5652031a2ea72321d75f8b1",
        },
        {
          tahun: 2014,
          judul:
            "FORMATION of SOLAR CELLS BASED ON Ba0.5Sr0.5TiO3 (BST) FERROELECTRIC THICK FILM",
          link: "http://dx.doi.org/10.1063/1.4866724",
        },
        {
          tahun: 2014,
          judul:
            "Series-Interconnected Plastic Dye-Sensitized Solar Cells Prepared by Low-Temperature Binder-Free Titania Paste",
          link: "http://dx.doi.org/10.7454/mst.v18i2.2949",
        },
    ];



    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Surya</h1>
                <h3 className="display-6 text-secondary">Riset</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiSuryaRiset;
