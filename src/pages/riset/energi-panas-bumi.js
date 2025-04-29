import React from 'react';
import TestingTable from '../../components/RisetTable';

const EnergiPanasBumiRiset = () => {
    const data = [
        {       
            tahun: 2024,
            judul: 'On-Stream Pipe Scale Inspection Using Gamma-Ray Tomography Technique: Field Experiment in Karaha Geothermal Power Plant, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196405152&doi=10.1088%2f1755-1315%2f1344%2f1%2f012018&partnerID=40&md5=2bfddf0db5115f3851522894013241ff',
        },
        
        {       
            tahun: 2024,
            judul: 'Design of the 100 kW Hermetic Turbine for Waste Power Plant at Soreang, West Java, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203556653&doi=10.15866%2firecon.v12i3.24768&partnerID=40&md5=49181f2280f38709aa298759fb260922',
        },
        
        {       
            tahun: 2024,
            judul: 'Performance pressure control system for inlet turbine using neural network backpropagation and NARX model in the geothermal power plant 3 MW Kamojang-Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201153553&doi=10.1063%2f5.0205821&partnerID=40&md5=263c5c7980ad14b750fd2bd99f9efb50',
        },
        
        {       
            tahun: 2024,
            judul: 'A study of the temperature distribution in the OTEC cold water pipe using a heat and mass transfer approach',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85199369988&doi=10.1088%2f1755-1315%2f1372%2f1%2f012018&partnerID=40&md5=746c46d69b7ea981285078ffd343c1dd',
        },
        
        {       
            tahun: 2024,
            judul: 'Design optimization of stiffening system for ocean thermal energy conversion (OTEC) cold water pipe (CWP)',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203276697&doi=10.1016%2fj.rineng.2024.102863&partnerID=40&md5=01c079b95123eb95d4991421a3d5aeb9',
        },
        
        {       
            tahun: 2024,
            judul: 'Study Paraffin wax, palm wax as phase change materials for thermal energy storage in solar water heater',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201139712&doi=10.1063%2f5.0207886&partnerID=40&md5=efc9b8247ab87b3b45f6a73be46c5333',
        },
        
        {       
            tahun: 2024,
            judul: 'Design and construction of compressor heat recovery utilization of ice machine for drying system',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201144660&doi=10.1063%2f5.0206057&partnerID=40&md5=47699fc315530a58d98c6352915815cf',
        },
        
        {       
            tahun: 2024,
            judul: 'Investigating the reasons of main steam pressure drop in the main pipe of performance test geothermal power plant of 3 MW Kamojang Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201153255&doi=10.1063%2f5.0208875&partnerID=40&md5=cb4f4bd407d4745c15ca0b21945c429d',
        },
        
        {       
            tahun: 2024,
            judul: 'The influence of ovalization on OTEC cold water pipe subjected to bending moment',
            link: 'https://www.scopus.com/inward/record.uri?eid=2 -s2.0-85201148753&doi=10.1063%2f5.0215183&partnerID=40&md5=6780ac2ac86b6de9cee2b4935d386566',
        },
        
        {       
            tahun: 2023,
            judul: 'Identification for Thermal Energy Optimization in the Process of Esterification Through the Evaluation of Combustion Reactions in Thermal Oil Heater',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174566041&doi=10.5109%2f7151742&partnerID=40&md5=888bab68e07ebd68e493f1e739a69edd',
        },
        
        {       
            tahun: 2023,
            judul: 'Internal flow effects in OTEC cold water pipe: Finite element modelling in frequency and time domain approaches',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174031507&doi=10.1016%2fj.oceaneng.2023.116056&partnerID=40&md5=ce6bf1e1528187af12e6c848d87da204',
        },
        
        {       
            tahun: 2023,
            judul: 'Investigation The Effect of Various Temperature-Measuring Configurations on The Thermal Efficiency of Liquid Petroleum Gas Stoves',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174612702&doi=10.5109%2f7151713&partnerID=40&md5=7ab3d701d03354e778c010f4eed89d95',
        },
        
        {       
            tahun: 2023,
            judul: 'FLORISTIC COMPOSITION AND STRUCTURE OF VEGETATION IN GUNUNG SALAK GEOTHERMAL POWER PLANT, WEST JAVA, INDONESIA',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85168136490&doi=10.55981%2freinwardtia.2023.4565&partnerID=40&md5=e2518ebe53a1bee0e2287f2986581a8d',
        },
        
        {       
            tahun: 2023,
            judul: 'Assessment of the stiffened panel performance in the OTEC seawater tank design: Parametric study and sensitivity analysis',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85153966585&doi=10.1016%2fj.taml.2023.100452&partnerID=40&md5=0b0cad5f42c466c12daf9c446c3a9e67',
        },
        
        {       
            tahun: 2023,
            judul: 'Assessment of the OTEC cold water pipe design under bending loading: A benchmarking and parametric study using finite element approach',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85171564354&doi=10.1515%2fjmbm-2022-0298&partnerID=40&md5=5a3428c24a72e08c59799c90a4937753',
        },
        
        {       
            tahun: 2023,
            judul: 'Preliminary characterization and thermal evaluation of a direct contact cascaded immiscible inorganic salt/high-density polyethylene as moderate temperature heat storage material',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85168323425&doi=10.1016%2fj.rinma.2023.100443&partnerID=40&md5=a1000e3eed5fc56c62421dad9309b3fb',
        },
        
        {       
            tahun: 2023,
            judul: 'Geothermal Direct Use for Silkworm Cultivation as a CSR Program in Wayang Windu Geothermal Field: Thermal Energy Calculation Approach',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174482533&doi=10.5109%2f7151689&partnerID=40&md5=3bb4ad7f3ef310bbcee8c5c1905e93d2',
        },
        
        {       
            tahun: 2023,
            judul: 'Encapsulation of paraffin-magnetite, paraffin, and polyethylene glycol in concretes as thermal energy storage material',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85159360096&doi=10.1016%2fj.est.2023.107684&partnerID=40&md5=0aa81581568191c282b48de4cc97ace6',
        },
        
        {       
            tahun: 2023,
            judul: 'Analytical and experimental study of hybrid photovoltaic–thermal–thermoelectric systems in sustainable energy generation',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85173560834&doi=10.1016%2fj.csite.2023.103522&partnerID=40&md5=1a52c16da785ac5367f949f797b44648',
        },
        
        {       
            tahun: 2023,
            judul: 'Three-point bending assessment of cold water pipe (CWP) sandwich material for ocean thermal energy conversion (OTEC)',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85171617900&doi=10.1016%2fj.prostr.2023.07.004&partnerID=40&md5=57ed1b556b5ad3f56a6bc6917993cdf8',
        },
        
        {       
            tahun: 2023,
            judul: 'Mathematical modeling and experimental validation of bifacial photovoltaic–thermal system with mirror reflector',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85150038195&doi=10.1016%2fj.csite.2023.102800&partnerID=40&md5=6b4ef181d2b9242b1eef3946d96b04a8',
        },
        
        {       
            tahun: 2023,
            judul: 'Generation expansion planning with a renewable energy target and interconnection option: A case study of the Sulawesi region, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85163881540&doi=10.1016%2fj.rser.2023.113489&partnerID=40&md5=f2fdd20bad855cda53d10f4c24b5d86c',
        },
        
        {       
            tahun: 2023,
            judul: 'Performance Review of Solar-Assisted Heat Pump Systems Using Solar Collectors, PV, and PVT Technologies',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85168002487&doi=10.18280%2fijht.410318&partnerID=40&md5=0a2abb8efc150095620daa922db1b628',
        },
        
        {       
            tahun: 2023,
            judul: 'Life cycle engineering (LCE) study for Synechococcus HS-9 biomass production as potential raw material for a third generation biodiesel production',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85172325044&doi=10.1016%2fj.seta.2023.103484&partnerID=40&md5=495db729b28c9391cd27b35eecd0d0d3',
        },
        
        {       
            tahun: 2023,
            judul: 'Gamma scanning technique on geothermal pipe scale thickness measurement',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85160397978&doi=10.1063%2f5.0114380&partnerID=40&md5=ef04bfdff32ea152309cba4807291b75',
        },
        
        {       
            tahun: 2023,
            judul: 'Modelling and Simulation of Existing Geothermal Power Plant: A Case Study of Darajat Geothermal Power Plant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85165474919&doi=10.5541%2fijot.1118778&partnerID=40&md5=373194aead73eba6cf0788ce8d2fc86f',
        },
        
        {       
            tahun: 2023,
            judul: 'Non-linear assessment of cold water pipe (CWP) on the ocean thermal energy conversion (OTEC) installation under bending load',
            link: 'https://www.scopus .com/inward/record.uri?eid=2-s2.0-85171626135&doi=10.1016%2fj.prostr.2023.07.005&partnerID=40&md5=ad2cf7112492d65ae300d346f9d99cce',
        },
        
        {       
            tahun: 2023,
            judul: 'Sustainable Long-Term Energy Supply and Demand: The Gradual Transition to a New and Renewable Energy System in Indonesia by 2050',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149456691&doi=10.14710%2fijred.2023.50361&partnerID=40&md5=258c28d93335bcb1f4935d9e2676334e',
        },
        
        {       
            tahun: 2023,
            judul: 'Small-Scale Organic Rankine Cycle Performance Using an Additional Heat Exchanger',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174612060&doi=10.5109%2f7151720&partnerID=40&md5=42b0e3db7ef6d7e73cd41afd566ea5af',
        },
        
        {       
            tahun: 2023,
            judul: 'Two-dimensional MHD simulation of the Earth’s magnetosphere',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85178934823&doi=10.1007%2fs10509-023-04256-5&partnerID=40&md5=e5ca6d74995297ed04da2f3331f68657',
        },
        
        {       
            tahun: 2023,
            judul: 'On the Dynamic Stability of OTEC Cold Water Pipe (CWP) under Variations of Force Balance Descriptions at the Free Inlet',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174637342&doi=10.5109%2f7151716&partnerID=40&md5=e724aff92959ad39356e14895cfad709',
        },
        
        {       
            tahun: 2023,
            judul: 'Assessment of the stiffened panel performance in the OTEC seawater tank design: Parametric study and sensitivity analysis',
            link: 'http://dx.doi.org/10.1016/j.taml.2023.100452',
        },
        
        {       
            tahun: 2023,
            judul: 'Mathematical modeling and experimental validation of bifacial photovoltaic-thermal system with mirror reflector',
            link: 'http://dx.doi.org/10.1016/j.csite.2023.102800',
        },
        
        {       
            tahun: 2023,
            judul: 'Assessment of the OTEC cold water pipe design under bending loading: A benchmarking and parametric study using finite element approach',
            link: 'http://dx.doi.org/10.1515/jmbm-2022-0298',
        },
        
        {       
            tahun: 2022,
            judul: 'FINITE ELEMENT MODELLING of OCEAN THERMAL ENERGY CONVERSION (OTEC) COLD WATER PIPE (CWP)',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85135110785&doi=10.1115%2fOMAE2022-78135&partnerID=40&md5=631ff5cac0637867ef0214fce85396e8',
        },
        
        {       
            tahun: 2022,
            judul: 'The Effect of Copper Coating on the Hot-Side on the Performance of a Thermoelectric Generator Using the Electroforming Method',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146882761&doi=10.18280%2fijdne.170602&partnerID=40&md5=2e6b3233d3532e7355fbb87a54cb0116',
        },
        
        {       
            tahun: 2022,
            judul: 'Effect of Operating Conditions on Lithium Recovery from Synthetic Geothermal Brine Using Electrodialysis Method',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123077618&doi=10.1007%2fs40831-021-00488-3&partnerID=40&md5 =0230130e45089c6c207f6858259fbfe9',
        },
        
        {       
            tahun: 2022,
            judul: 'Economic value of carbon sequestration in conservation forests for geothermal power plant development areas',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85143237384&doi=10.1088%2f1755-1315%2f1108%2f1%2f012025&partnerID=40&md5=f2f39a21f9d8ef5808d2d4b6bc91a231',
        },
        
        {       
            tahun: 2022,
            judul: 'Fabrication and characterization of FITC-modified natural-based silica nanoparticles using sol-gel method',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85124103493&doi=10.1088%2f1755-1315%2f963%2f1%2f012025&partnerID=40&md5=fc60779c0106d9fc3d16e844bc4c8270',
        },
        
        {       
            tahun: 2022,
            judul: 'Thermo-electro-hydraulic analysis of jet impingement bifacial photovoltaic thermal (JIBPVT) solar air collector',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85130821448&doi=10.1016%2fj.energy.2022.124366&partnerID=40&md5=916452c37d7915d63dec2f978ae840a2',
        },
        
        {       
            tahun: 2022,
            judul: 'Mathematical Model of the Thermal Performance of Double-Pass Solar Collector for Solar Energy Application in Sierra Leone',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85124710703&doi=10.14710%2fIJRED.2022.41349&partnerID=40&md5=f5089927151153b7ae67ff77739fa998',
        },
        
        {       
            tahun: 2022,
            judul: 'Comparison of GUM and Monte Carlo Methods for Measurement Uncertainty Estimation of the Energy Performance Measurements of Gas Stoves',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85131224385&doi=10.2478%2fmsr-2022-0020&partnerID=40&md5=b6959c646c38cfda5a56b4e5c2db2d4a',
        },
        
        {       
            tahun: 2022,
            judul: 'Implementation SCADA Web Client For Monitoring Geothermal Power Plant 3 MW Kamojang - Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85147324062&doi=10.1109%2fICE3IS56585.2022.10010311&partnerID=40&md5=e85e2c43b76dffe1a6047075f3b6d291',
        },
        
        {       
            tahun: 2022,
            judul: 'Thermal Efficiencies of Photovoltaic Thermal (PVT) with Bi-Fluid Cooling System',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85132555526&doi=10.18280%2fijht.400209&partnerID=40&md5=355941c596cb8ac31459b1902309cbcc',
        },
        
        {       
            tahun: 2022,
            judul: 'Comparison of GUM and Monte Carlo Methods for Measurement Uncertainty Estimation of the Energy Performance Measurements of Gas Stoves',
            link: 'http://dx.doi.org/10.2478/msr-2022-0020',
        },
        
        {       
            tahun: 2022,
            judul: 'Thermal Efficiencies of Photovoltaic Thermal (PVT) with Bi-Fluid Cooling System',
            link: 'http://dx.doi.org/10.18280/ijht.400209',
        },
        
        {       
            tahun: 2022,
            judul: 'Mathematical Model of the Thermal Performance of Double-Pass Solar Collector for Solar Energy Application in Sierra Leone',
            link: 'http://dx.doi.org/10.14710/ijred.2022.41349',
        },
        
        {       
            tahun: 2021,
            judul: 'Measurement of scale thickness in geothermal pipeline using gamma transmission method: A preliminary study in Kamojang geothermal power plant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85119339100&doi=10.1063%2f5.0066496&partnerID=40&md5=7a188dadac8c4bce03f9f70348496229',
        },
        
        {       
            tahun: 2021,
            judul: 'Corrosion behavior of ca6nm in simulated geothermal brine highlighted by electrochemical impedance spectroscopy (Eis)',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85108996723&doi=10.14456%2feasr.2021.38&partnerID=40&md5=d98e91b0dea3dedf8705193836632e16',
        },
        
        {       
            tahun: 2021,
            judul: 'Conjugation of E.coli antibody with fluorescent natural silica-based nanoparticles: Preparation and characterization',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85113970232&doi=10.1063%2f5.0060386&partnerID=40&md5=3526f6fd663e514aed2666daa851a1a0',
        },
        
        {       
            tahun: 2021,
            judul: 'Lesson learned – The operation of the pilot scale geothermal power plant 3MW – Kamojang, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85098461483&doi=10.1016%2fj.geothermics.2020.102025&partnerID=40&md5=f426205f24f4f0902817406ca2d91932',
        },
        
        {       
            tahun: 2021,
            judul: 'Experimental and model validation of photovoltaic-thermal (PVT) air collector: exergy analysis',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197122287&doi=10.14203%2fj.mev.2021.v12.10-17&partnerID=40&md5=b7430a9219079ef9770c7f03b598b561',
        },
        
        {       
            tahun: 2021,
            judul: 'Double nuclear spin relaxation in hybrid quantum Hall systems',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85115221957&doi=10.1103%2fPhysRevB.104.L121402&partnerID=40&md5=140a27f6705b0b7efb560a0cb53c3c92',
        },
        
        {       
            tahun: 2021,
            judul: 'A Preliminary Study of Internal Corrosion in Condensate Pipelines at Geothermal Power Plants',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85107765284&doi=10.30880%2fijie.2021.13.04.011&partnerID=40&md5=9bae4db0c7504423d84df397f33ac48c',
        },
        
        {       
            tahun: 2021,
            judul: 'Occurrence of Geothermal Features Based on Surface Roughness and Geobotanical Analyses derived by ALOS-2 PALSAR-2 and Sentinel-2 Images',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85126093762&doi=10.1109%2fAPSAR52370.2021.9688361&partnerID=40&md5=b86411d535a978b3c53eb6af18e46f1d',
        },
        
        {       
            tahun: 2021,
            judul: 'EARTHQUAKE EARLY WARNING SYSTEM FOR GEOTHERMAL BINARY POWER PLANT IN INDONESIA',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85143396956&partnerID=40&md5=fadd5b6305b4457d83682f44b96c9948',
        },
        
        {       
            tahun: 2021,
            judul: 'Decarbonizing the electricity system in Sumatra region using nuclear and renewable energy based power generation',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85109919044&doi=10.1088%2f1755-1315%2f753%2f1%2f012011&partnerID=40&md5=dcb2a13c049f4170fe9ebd2f46e858ab',
        },
        
        {       
            tahun: 2021,
            judul: 'Energy analysis of greenhouse dryer for Ficus carica L. leaves',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85111573958&doi=10.18280%2fijht.390314&partnerID=40&md5=a7bfca6da06a6f3e23e9b3190e580e91',
        },
        
        {       
            tahun: 2021,
            judul: 'Recent advances and rational design strategies of carbon dots towards highly efficient solar evaporation',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85105227774&doi=10.1039%2fd1nr00023c&partnerID=40&md5=9322598ccf9168093ec6ee9f83fa36ad',
        },
        
        {       
            tahun: 2021,
            judul: 'CORROSION RATE AND CORROSION BEHAVIOUR ANALYSIS OF CARBON STEEL PIPE AT CONSTANT CONDENSED FLUID',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85130240213&doi=10.30544%2f591&partnerID=40&md5=1d7f441f84c55a66d66194319dff72da',
        },
        
        {       
            tahun: 2021,
            judul: 'The effect of flow rate and temperature on corrosion rate of carbon steel pipe in condensate solution from geothermal power plant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116556607&doi=10.36547%2fAMS.27.3.1005&partnerID=40&md5=d921e9634a1e023a00005ad181c42877',
        },
        
        {       
            tahun: 2021,
            judul: 'THE EFFECT OF FLOW RATE AND TEMPERATURE ON CORROSION RATE OF CARBON STEEL PIPE IN CONDENSATE SOLUTION FROM GEOTHERMAL POWER PLANT',
            link: 'http://dx.doi.org/10.36547/ams.27.3.1005',
        },
        
        {       
            tahun: 2021,
            judul: 'A Preliminary Study of Internal Corrosion in Condensate Pipelines at Geothermal Power Plants',
            link: 'http://dx.doi.org/10.30880/ijie.2021.13.04.011',
        },
        
        {       
            tahun: 2021,
            judul: 'CORROSION RATE AND CORROSION BEHAVIOUR ANALYSIS OF CARBON STEEL PIPE AT CONSTANT CONDENSED FLUID',
            link: 'http://dx.doi.org/10.30544/591',
        },
        
        {       
            tahun: 2021,
            judul: 'Energy Analysis of Greenhouse Dryer for Ficus Carica L. Leaves',
            link: 'http://dx.doi.org/10.18280/ijht.390314',
        },
        
        {       
            tahun: 2020,
            judul: 'Study on performance characteristics of thermoelectric generator string',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85087806411&doi=10.1088%2f1742-6596%2f1568%2f1%2f012017&partnerID=40&md5=25cf3b9d2f229ff08fa1d74371ac08a0',
        },
        
        {       
            tahun: 2020,
            judul: 'Geothermal silica-based fluorescent nanoparticles for the visualization of latent fingerprints',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85081277541&doi=10.1166%2fmex.2020.1551&partnerID=40&md5=9e24471a7a2aac7b45cc0c47a3870b8d',
        },
        
        {       
            tahun: 2020,
            judul: 'The low-medium enthalpy geothermal power plant at lahendong, indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092618124&doi=10.1063%2f5.0018757&partnerID=40&md5=1325aee8e74293bf7ba10882c5692472',
        },
        
        {       
            tahun: 2020,
            judul: 'Development of real-time monitoring system in organic rankine cycle operation of lahendong geothermal field',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85095685874&partnerID=40&md5=c5a3334b99276cca29bc55eb9e660fcf',
        },
        
        {       
            tahun: 2020,
            judul: 'Effect of projections number on the image quality of industrial parallel beam gamma tomography',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85080943085&doi=10.1088%2f1742-6596%2f1436%2f1%2f012030&partnerID=40&md5=57d155937f7214cb81eb2c2ac7bcbaa1',
        },
        
        {       
            tahun: 2020 ,
            judul: 'Performance analysis of cogeneration energy conversion system design for RDE',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85086322021&doi=10.1088%2f1757-899X%2f830%2f3%2f032092&partnerID=40&md5=d3ae84106bc8fc2a70c97e97e7f123f5',
        },
        
        {       
            tahun: 2020,
            judul: 'Silica from geothermal waste as reinforcing filler in artificial leather',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85088299545&doi=10.4028%2fwww.scientific.net%2fKEM.849.78&partnerID=40&md5=e760d5a209ed6c5bfa839eaee103e07c',
        },
        
        {       
            tahun: 2020,
            judul: 'Emission Spectrochemical Analysis of Soft Samples including Raw Fish by Employing Laser-Induced Breakdown Spectroscopy with a Subtarget at Low-Pressure Helium Gas',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85087628404&doi=10.1021%2facsomega.0c01904&partnerID=40&md5=c3ddf7da8a8fbccddbc5d3628f19cb89',
        },
        
        {       
            tahun: 2020,
            judul: 'Pitting Corrosion Resistance of CA6NM and 410 Martensitic Stainless Steels in Various Environments',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85087881053&doi=10.1088%2f1757-899X%2f858%2f1%2f012049&partnerID=40&md5=fb403097b05ed1ced4dafce71c77f9a1',
        },
        
        {       
            tahun: 2020,
            judul: 'Performance analysis of cogeneration energy conversion system design for RDE',
            link: 'http://dx.doi.org/10.1088/1757-899X/830/3/032092',
        },
        
        {       
            tahun: 2020,
            judul: 'Emission Spectrochemical Analysis of Soft Samples Including Raw Fish by Employing Laser-Induced Breakdown Spectroscopy with a Subtarget at Low-Pressure Helium Gas',
            link: 'http://dx.doi.org/10.1021/acsomega.0c01904',
        },
        
        {       
            tahun: 2019,
            judul: 'Effect of Superheated Steam Pressure on the Performance of RDE Energy Conversion System',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85066336586&doi=10.1088%2f1742-6596%2f1198%2f2%2f022045&partnerID=40&md5=04c7e742d56b265f52da40095bff6a19',
        },
        
        {       
            tahun: 2019,
            judul: 'Testing of Early Stage of BPPT-3MW Condensing Type Small Scale Geothermal Power Plant - Kamojang - Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85076723888&doi=10.1088%2f1742-6596%2f1376%2f1%2f012014&partnerID=40&md5=ef52d404480d13e62a4106bf852a6ec2',
        },
        
        {       
            tahun: 2019,
            judul: 'The development of the IHL wave-current turbine to convert the ocean energy from both wave and current',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85072105221&doi=10.1088%2f1757-899X%2f588%2f1%2f012008&partnerID=40&md5=6fb0c9aaaab87a340e3a2e8f0559f46d',
        },
        
        {       
            tahun: 2019,
            judul: 'Design, construction and preliminary test operation of BPPT-3MW condensing turbine geothermal power plant',
            link: 'https://www.scopus.com/inward.uri?eid=2-s2.0-85069633702&doi=10.5109%2f2321012&partnerID=40&md5=a02aef1a301a3e6fd934b2ebc98831da',
        },
        
        {       
            tahun: 2019,
            judul: 'Theoretical study of fluidization and heat transfer on fluidized bed coffee roaster',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85064994386&doi=10.1063%2f1.5098287&partnerID=40&md5=592e1291db4bf5ff91d0a16d85a36122',
        },
        
        {       
            tahun: 2019,
            judul: 'Influence of rapid thermal annealing at varied temperatures on conductivity activation energy and structural properties of Si-doped β-Ga2O3 film grown by pulsed laser deposition',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85054129903&doi=10.1016%2fj.ceramint.2018.09.240&partnerID=40&md5=1568362f54677ab835adb59c1e94388e',
        },
        
        {       
            tahun: 2019,
            judul: 'The effect of calcination temperature on the synthesis of magnetic silica nanoparticles from geothermal sludge',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078033952&doi=10.1063%2f1.5134644&partnerID=40&md5=77f56869bdba0273454207e89161de1c',
        },
        
        {       
            tahun: 2019,
            judul: 'Performance analysis on the design of the energy conversion system of the Indonesia experimental power reactor',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85076774824&doi=10.1063%2f1.5135540&partnerID=40&md5=03963999f09a90aac702157521d51197',
        },
        
        {       
            tahun: 2019,
            judul: 'Review application of ORC in lahendong geothermal field',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85088763735&doi=10.2118%2f196278-ms&partnerID=40&md5=12d63016ced6826cedcaf3a3c7a0445c',
        },
        
        {       
            tahun: 2019,
            judul: 'Performance Analysis on The Design of The Energy Conversion System of The Indonesia Experimental Power Reactor',
            link: 'http://dx.doi.org/10.1063/1.5135540',
        },
        
        {       
            tahun: 2019,
            judul: 'Effect of Superheated Steam Pressure on the Performance of RDE Energy Conversion System',
            link: 'http://dx.doi.org/10.1088/1742-6596/1198/2/022045',
        },
        
        {       
            tahun: 2018,
            judul: 'Rock geochemistry related to mineralization processes in geothermal areas',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85043272021&doi=10.1088%2f1755-1315%2f118%2f1%2f012071&partnerID=40&md5=6a920c17bb8899bcccbbcaea6c6e1729',
        },
        
        {       
            tahun: 2018,
            judul: 'Preparation of silica nanoparticles from geothermal sludge via sol-gel method',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85056283047&doi=10.1063%2f1.5064968&partnerID=40&md5=ff5def2c9ff6c64907d6d5955a0965e9',
        },
        
        {       
            tahun: 2018,
            judul: 'Grid synchronization test of the local development 3 MW geothermal power plant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85068573568&doi=10.1109%2fICPERE.2018.8739667&partnerID =40&md5=992c0f6ce51944ae338b0ee023bdc848',
        },
        
        {       
            tahun: 2018,
            judul: 'Mini Distillation Column Control Using Model Predictive Control',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85062874779&doi=10.1109%2fIC3INA.2018.8629541&partnerID=40&md5=c46cb519caf22d33a0289dce7bf96aef',
        },
        
        {       
            tahun: 2018,
            judul: 'Geothermal and volcanism in west Java',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85043245904&doi=10.1088%2f1755-1315%2f118%2f1%2f012074&partnerID=40&md5=e826f93b7f03dabd1278873aa9e65ee0',
        },
        
        {       
            tahun: 2018,
            judul: 'Major Bifurcations, Slip Rates, and A Creeping Segment of Sumatran Fault Zone in Tarutung-Sarulla-Sipirok-Padangsidempuan, Central Sumatra, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85090164662&doi=10.17014%2fIJOG.5.2.137-160&partnerID=40&md5=afef4671ec39747266b39eec74e34e56',
        },
        
        {       
            tahun: 2018,
            judul: 'Major Bifurcations, Slip Rates, and A Creeping Segment of Sumatran Fault Zone in Tarutung-Sarulla-Sipirok-Padangsidempuan, Central Sumatra, Indonesia',
            link: 'http://dx.doi.org/10.17014/ijog.5.2.137-160',
        },
        
        {       
            tahun: 2017,
            judul: 'Portable gamma ray tomography system for investigation of geothermal power plant pipe scaling',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85045943269&doi=10.1109%2fQIR.2017.8168474&partnerID=40&md5=27775d7ad954427ecdcba28bdfe8055d',
        },
        
        {       
            tahun: 2017,
            judul: 'Modeling of reservoir structure by using magnetotelluric method in the area of Mt. Argopuro, East Java, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85041303946&doi=10.5614%2fj.eng.technol.sci.2017.49.6.9&partnerID=40&md5=64ec56a1a6f1e5df54a3b83d77f74444',
        },
        
        {       
            tahun: 2017,
            judul: 'Modeling of Reservoir Structure by Using Magnetotelluric Method in the Area of Mt. Argopuro, East Java, Indonesia',
            link: 'http://dx.doi.org/10.5614/j.eng.technol.sci.2017.49.6.9',
        },
        
        {       
            tahun: 2016,
            judul: 'Functionalized HgTe nanoparticles promote laser-induced solid phase ionization/dissociation for comprehensive glycan sequencing',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84991806374&doi=10.1039%2fc6an00923a&partnerID=40&md5=4d5e5c9c91bd4db2e96b70d58c74f717',
        },
        
        {       
            tahun: 2016,
            judul: 'Modeling and control of temperature dynamics in induction furnace system',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84969962228&doi=10.1109%2fICSEngT.2015.7412436&partnerID=40&md5=3e4940e9cf770ec0f0b9f51b66f0673f',
        },
        
        {       
            tahun: 2016,
            judul: 'Potential of geothermal energy for electricity generation in Indonesia: A review',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84943329375&doi=10.1016%2fj.rser.2015.09.032&partnerID=40&md5=4e9327813f48036ce8b28cae47a2a5fd',
        },
        
        {       
            tahun: 2014,
            judul: 'Rotor-dynamic characteristic evaluation of generator geothermal power plant using finite element method',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84921689313&doi=10.4028%2fwww.scientific.net%2fAMM.664.170&partnerID=40&md5=d92765b580102688ccd4189f9f14404d',
        },
        
        {       
            tahun: 2014,
            judul: 'Rotor-dynamic Characteristic Evaluation of Generator Geothermal Power Plant using Finite Element Method',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85067762411&partnerID=40&md5=6522a8b7047a9fc1c8df6d7d6cefc702',
        },
        
        {       
            tahun: 2013,
            judul: 'Development of CSP plants in Wallacea region: Solar intensity resource assessment and CSP plant design specification',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84897051498&doi=10.1016%2fj.egypro.2013.05.030&partnerID=40&md5=2756cc87dd7634586c9645899cda2109',
        },
        
        {       
            tahun: 2013,
            judul: 'Absorber layer addition and thermal storage media comparison for concentrated solar power plant optimization',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84897035817&doi=10.1016%2fj.egypro.2013.05.010&partnerID=40&md5=85beac51d894d16cb7b8cbad4f48ac57',
        },
        
        {       
            tahun: 2013,
            judul: 'Remote sensing application on geothermal exploration',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84885009152&doi=10.1063%2f1.4820335&partnerID=40&md5=742687fc10ec1b04f1c288291f0a594f',
        },
        
        {       
            tahun: 2013,
            judul: 'Absorber layer addition and thermal storage media comparison for concentrated solar power plant optimization',
            link: 'http://dx.doi.org/10.1016/j.egypro.2013.05.010',
        },
        
        {       
            tahun: 2013,
            judul: 'Development of CSP plants in Wallacea region: solar intensity resource assessment and CSP plant design specification',
            link: 'http://dx.doi.org/10.1016/j.egypro.2013.05.030',
        },
        
        {       
            tahun: 2007,
            judul: 'Volcanic hazard analysis for proposed nuclear power plant siting in Central Java, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84902576920&partnerID=40&md5=792a6a08983f25b32764ae42a8a01be2',
        },
        
        {       
            tahun: 2006,
            judul: 'Design of a geothermal energy dryer for beans and grains drying in Kamojang geothermal field, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-34548155935&partnerID=40&md5=3a792a3bdcc91554dd4444cecf102cbc',
        },
        
        {       
            tahun: 2003,
            judul: 'Numerical modeling of a hydrothermal system around Waita volcano, Kyushu, Japan, based on resistivity and self-potential survey results',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-0037314833&doi=10.1016%2fS0375-6505%2802%2900048-2& partnerID=40&md5=902011f92c44d3d7b72cdfa40b17c934',
        },
        
        {       
            tahun: 1996,
            judul: 'Radioactivity standards for 192Ir brachytherapy sources',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-0000800908&doi=10.1016%2fS0168-9002%2896%2980081-7&partnerID=40&md5=0b7e15d1a1e298d0844f8a1d689e54ac',
        },
    ];


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Panas Bumi</h1>
                <h3 className="display-6 text-secondary">Riset</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiPanasBumiRiset;
