import React from 'react';
import TestingTable from '../../components/RisetTable';

const EnergiBiomassaRiset = () => {
    const data = [
        {
            tahun: 2024,
            judul: 'A comparison of the physicochemical properties of microalgae biodiesel with other oilseed feedstocks for sustainable energy production: A meta-analysis',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197571923&doi=10.22201%2ficat.24486736e.2024.22.3.2329&partnerID=40&md5=1d53f41dc768c7773d3be8243c81dbf4',
        },
        {
            tahun: 2024,
            judul: 'A comprehensive study on transparent conducting oxides in compact microbial fuel cells: Integrated spectroscopic and electrochemical analyses for monitoring biofilm growth',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85183957743&doi=10.1016%2fj.bios.2024.116067&partnerID=40&md5=742ae68702c67ae221d4dc125093afd4',
        },
        {
            tahun: 2024,
            judul: 'Analysis of combustion characteristics and chemical properties for biocoke fuel',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85194823667&doi=10.1016%2fj.engeos.2024.100331&partnerID=40&md5=ade6a7990ba81ffb1ed9c404ab197fd8',
        },
        {
            tahun: 2024,
            judul: 'Characterization of Indonesian Sugar Palm Bunch (Arenga longipes Mogea) Properties for Various Utilization Purposes',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185837055&doi=10.3390%2ff15020239&partnerID=40&md5=f7e7cefadba8839a6e0a43d5abf966d2',
        },
        {
            tahun: 2024,
            judul: 'Characterization of sago tree parts from Sentani, Papua, Indonesia for biomass energy utilization',
            link: 'http://dx.doi.org/10.1016/j.heliyon.2024.e23993',
        },
        {
            tahun: 2024,
            judul: 'Enhancing biogas production with fungi from oil palm empty fruit bunches: Isolation and innovative application',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198080292&doi=10.1016%2fj.cscee.2024.100845&partnerID=40&md5=d1658506f6e4eda98ccdfa5baabc74c3',
        },
        {
            tahun: 2024,
            judul: 'Evaluation of readiness to commercialize research results with the IRL framework: a case study of ORC turbines in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85179305259&doi=10.11591%2fijpeds.v15.i1.pp530-539&partnerID=40&md5=9300944d682d85bad39679e6cc10d13e',
        },
        {
            tahun: 2024,
            judul: 'Evolving Paradigms in Sorghum Research: A Bibliometric and Content Analysis of Global Trends and Future Directions',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196956037&doi=10.18280%2fijdne.190318&partnerID=40&md5=feaf647d1e944ea6e9538cc4690966cb',
        },
        {
            tahun: 2024,
            judul: 'Genetic characterization of Indonesian sorghum landraces (Sorghum bicolor (L.) Moench) for yield traits',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85193001853&doi=10.3934%2fAGRFOOD.2024008&partnerID=40&md5=d7d10c2cdfddf753f2416082023c8297',
        },
        {
            tahun: 2024,
            judul: 'Hybrid Biopellets Characterization of Gamal Wood (Gliricidia sepium) and Robusta Coffee Husk at Various Compositions',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198858586&doi=10.23960%2fjsl.v12i3.913&partnerID=40&md5=ff13d0a88d3d835d1cdac62a3e933196',
        },
        {
            tahun: 2024,
            judul: 'Improving the calorific value of nyamplung (Calophyllum inophyllum l.) seed shell pellets by torrefaction treatment for their use as a renewable energy resource',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85202948662&doi=10.5658%2fWOOD.2024.52.4.363&partnerID=40&md5=ee019f393fc6a1141d249cb49e019b85',
        },
        {
            tahun: 2024,
            judul: 'Interconnected hierarchical 3D porous carbon derived from Saccharum officinarum L. leaf based on the synergistic effect of KOH for high performance supercapacitor',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203143361&doi=10.1080%2f15567036.2024.2397511&partnerID=40&md5=4395c31f83093598cb198bb136feb5ea',
        },
        {
            tahun: 2024,
            judul: 'Kinetics and thermodynamic parameters of palm empty fruit bunch pyrolysis promoted by calcium-rich wastes from coastal-marine residue',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85181685495&doi=10.1016%2fj.biteb.2023.101735&partnerID=40&md5=4b58cbd672abfc4c2deba7a72afd5430',
        },
        {
            tahun: 2024,
            judul: 'Metabolite Compounds of Euglena sp. on Mass Cultivation System under MgCl2 and CaCl2 Salt Stress',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197438079&doi=10.18517%2fijaseit.14.3.19820&partnerID=40&md5=7884d1a807136dc0728551c03ccefe99',
        },
        {
            tahun: 2024,
            judul: 'Physical, chemical, and thermal properties of branches mangrove wood of Bruguiera gymnorhiza during conversion into charcoal and charcoal briquette',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196063721&doi=10.1088%2f1755-1315%2f1352%2f1%2f012038&partnerID=40&md5=41f1cdc5262f11aef81a3296fd397b66',
        },
        {
            tahun: 2024,
            judul: 'Quality of Biopellet from Rice By-Products Valorisation by Application of Appropriate Technology in Densification',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185820877&doi=10.1063%2f5.0184471&partnerID=40&md5=f1df7301798190a8e78414734cb92e05',
        },
        {
            tahun: 2024,
            judul: 'Starch – carrageenan based low-cost membrane permeability characteristic and its application for yeast microbial fuel cells',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85188460166&doi=10.61435%2fijred.2024.59160&partnerID=40&md5=5f58f0d5f096cfff1966c6dcaa215293',
        },
        {
            tahun: 2024,
            judul: 'Study on Palm Oil Cultivation and Processing Technology to Support the Biofuel Program (Optimization for the Development of Palm Oil-Based Energy Plantation in Indonesia)',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197744599&doi=10.1088%2f1755-1315%2f1364%2f1%2f012011 &partnerID=40&md5=e9492694dd5546657439cf60bf9238a8',
        },
        {
            tahun: 2024,
            judul: 'The impact of shade net use on total nitrogen removal by duckweed (Lemna perpusilla) at different levels of catfish farming effluent',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85202190711&doi=10.1016%2fj.aquaeng.2024.102456&partnerID=40&md5=9b30d875a8589ef718381e0cdc4a1387',
        },
        {
            tahun: 2024,
            judul: 'The Processing of Fatty Acid Methyl Ester (FAME) from Waste Cooking Palm Oil using Coconut Coir Dust Ash Catalyst',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185784893&doi=10.1063%2f5.0184207&partnerID=40&md5=a3071ad2d6572af66dbeaedbae5a9749',
        },
        {
            tahun: 2024,
            judul: 'Variability of pod and seed traits on candidate plus tree Pongamia pinnata in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189970388&doi=10.1080%2f21580103.2024.2328051&partnerID=40&md5=341d7b3f7741caa2d262ea39c62a7302',
        },
        {
            tahun: 2024,
            judul: 'A comprehensive study on transparent conducting oxides in compact microbial fuel cells: Integrated spectroscopic and electrochemical analyses for monitoring biofilm growth',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85183957743&doi=10.1016%2fj.bios.2024.116067&partnerID=40&md5=742ae68702c67ae221d4dc125093afd4',
        },
        {
            tahun: 2023,
            judul: 'Agricultural residues biomass as a solid fuel for co-combustion in Indonesia - A review',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85178005167&doi=10.1063%2f5.0150445&partnerID=40&md5=65e15087b20e2b8dc39263ced816722c',
        },
        {
            tahun: 2023,
            judul: 'Bioengineering strategies of microalgae biomass for biofuel production: recent advancement and insight',
            link: 'http://dx.doi.org/10.1080/21655979.2023.2252228',
        },
        {
            tahun: 2023,
            judul: 'Briquettes Made of Branches Wood of Three Mangrove Species Bonded by Starch Adhesive',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85167836347&doi=10.3390%2fma16155266&partnerID=40&md5=94d0505396923b54a32087b2e2988a04',
        },
        {
            tahun: 2023,
            judul: 'Carbon credit and economic feasibility analysis of biomass-solar PV-battery power plant for application in Indonesia remote area',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85173497417&doi=10.1016%2fj.renene.2023.119383&partnerID=40&md5=6f139877d34157a210686946aed160c3',
        },
        {
            tahun: 2023,
            judul: 'Characteristics of Utilization of Palm Fronds, Oil Palm Stems and Empty Fruit Bunches as Biomass Co-Firing Fuels on Coal-Fired Power plant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85187555705&doi=10.1109%2fICSGTEIS60500.2023.10424181&partnerID=40&md5=b1efdff10cd0fe444b56ecca2b2a8869',
        },
        {
            tahun: 2023,
            judul: 'Degradation Rate of Brown Macroalgae Sargassum sp. Conversion to Bio-Oil via A Slow Pyrolysis',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85165158089&doi=10.20508%2fijrer.v13i2.13807.g8749&partnerID=40&md5=afc1bde8c83327058790b9225fb4a810',
        },
        {
            tahun: 2023,
            judul: 'Determination of optimum technologies implementation scenarios toward net zero emissions in palm oil biodiesel production',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85164770592&doi=10.1088%2f1755-1315%2f1187%2f1%2f012029&partnerID=40&md5=ae9bae74d5f99f55ef44bde5f9bf8e18',
        },
        {
            tahun: 2023,
            judul: 'Eucalyptus pellita and Acacia hybrid species: Potential bioenergy plantation in managing the risk of invasive in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85164574003&doi=10.1088%2f1755-1315%2f1182%2f1%2f012019&partnerID=40&md5=68d800ff0bb18135482bf8847ac6d79d',
        },
        {
            tahun: 2023,
            judul: 'Increase biomass production of Navicula salinicola in photobioreactors by carbon dioxide applications at different levels of harvesting',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85177887438&doi=10.1063%2f5.0175053&partnerID=40&md5=667abc75924ff37fa1f984a1761b5cb7',
        },
        {
            tahun: 2023,
            judul: 'Insight into the pyrolysis behavior of the drained Sumatra peat soil and the characteristics of the resulting biochar for carbon dioxide (CO2) capture',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85175457360&doi=10.1016%2fj.biteb.2023.101680&partnerID=40&md5=d57cad00e83d36eed238a8a4502532fa',
        },
        {
            tahun: 2023,
            judul: 'Introducing a new variety of interspecific Acacia hybrid (Acacia mangium × A. auriculiformis) for renewable biomass energy',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85164595605&doi=10.1088%2f1755-1315%2f1182%2f1%2f012020&partnerID=40&md5=3aee9fa9885f827546bbc9d5b74b7798',
        },
        {
            tahun: 2023,
            judul: 'Optimizing Local Renewable Energy Resources for Reducing Energy Dependency on An Isolated Island: A Case Study of Saumlaki Island, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174609306&doi=10.1109%2fICHVEPS58902.2023.10257316&partnerID=40&md5=1705b6709e5f60fefe4989dd112bc106',
        },
        {
            tahun: 2023,
            judul: 'Optimizing the role of new renewable energy (including nuclear power plant) on the expansion planning of power generation in West Kalimantan',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85159884802&doi=10.1063%2f5.0126502&partnerID=40&md5=18b46754223b7dbd8b3b352af0aaed3d',
        },
        {
            tahun: 2023,
            judul: 'Renewable energy from secondary wood products contributes to local green development: the case of small-scale privately owned forests in Ciamis Regency, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85148454860&doi=10.1186%2fs13705-023-00383-7&partnerID=40&md5=394abce5d1df6340f32cd219a98879ac',
        },
        {
            tahun: 2023,
            judul: 'Restoring ex mining area using Pongamia pinnata in Central Kalimantan: a reclamation program alternative base on bioenergy species',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85181561370&doi=10.1088%2f1755-1315%2f1282%2f1%2f012044&partnerID=40&md5=e07f264ca3e44271f55dd45f5bf15550',
        },
        {
            tahun: 2023,
            judul: 'Review of Smart Grids Advancements of Energy Mix Sources',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85177564875&doi=10.1063%2f5.0153036&partnerID=40&md5=e7034618dae9653ef6bf3ac784b05446',
        },
        {
            tahun: 2023,
            judul: 'Sustainability assessment of palm oil mills effluent utilization for electricity conversion',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85152897315&doi=10.1088%2f1755-1315%2f1151%2f1%2f012038&partnerID=40&md5=fb6757caa6e9a927cd6dc1d8845bb309',
        },
        {
            tahun: 2023,
            judul: 'Sustainable Long-Term Energy Supply and Demand: The Gradual Transition to a New and Renewable Energy System in Indonesia by 2050',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149456691&doi=10.14710%2fijred.2023.50361& partnerID=40&md5=258c28d93335bcb1f4935d9e2676334e',
        },
        {
            tahun: 2023,
            judul: 'The effectiveness of pretreated biomass using autoclave heat shock with H2SO4 for bioethanol production in simultaneous saccharification and fermentation',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85177821155&doi=10.1063%2f5.0176076&partnerID=40&md5=310a11c650eaeebd660eba2a47b1ea20',
        },
        {
            tahun: 2023,
            judul: 'Valorization of Banana Bunch Waste as a Feedstock via Hydrothermal Carbonization for Energy Purposes',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85160317222&doi=10.12911%2f22998993%2f163350&partnerID=40&md5=487f2b5121c8bc339183e7d3b955b2d1',
        },
        {
            tahun: 2022,
            judul: 'Allometric Equations for the Biomass Estimation of Calophyllum inophyllum L. in Java, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85133973565&doi=10.3390%2ff13071057&partnerID=40&md5=3ccadf584a4d6be8c2c717f83f7e1ab6',
        },
        {
            tahun: 2022,
            judul: 'Analysis of methyl compounds variation in the crude Pongamia pinnata oil from Banten, West Java and North Java populations',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85145600439&doi=10.1088%2f1755-1315%2f1115%2f1%2f012050&partnerID=40&md5=b349d5e511980a9bdd204a78d0fc1b4c',
        },
        {
            tahun: 2022,
            judul: 'Caffeic Acid Phenethyl Ester as a DHODH Inhibitor and Its Synergistic Anticancer Properties in Combination with 5-Fluorouracil in a Breast Cancer Cell Line',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85134628901&doi=10.2147%2fJEP.S365159&partnerID=40&md5=4ed7a547e5387c2e6b83326f0dc8b93a',
        },
        {
            tahun: 2022,
            judul: 'Enabling Factors of NTFP Business Development for Ecosystem Restoration: The Case of Tamanu Oil in Indonesian Degraded Peatland',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85137909413&doi=10.3390%2fsu141710681&partnerID=40&md5=a2426b4d429a7cc0172cc90204b8f767',
        },
        {
            tahun: 2022,
            judul: 'Finding the context indigenous innovation in village enterprise knowledge structure: a topic modeling',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85125352367&doi=10.1186%2fs13731-022-00220-9&partnerID=40&md5=573b290b107b240463772256a6e24d4a',
        },
        {
            tahun: 2022,
            judul: 'Indonesian urban forest policies, practice and bioenergy potential of urban forest tree species',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85123499575&doi=10.1080%2f03071375.2021.2014706&partnerID=40&md5=67c2ebeaeb397ea5fa12062596d0aba1',
        },
        {
            tahun: 2022,
            judul: 'Limiting silicon supply alters lignin content and structures of sorghum seedling cell walls',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85130775530&doi=10.1016%2fj.plantsci.2022.111325&partnerID=40&md5=cebea127bea84a088716928b5b720d3c',
        },
        {
            tahun: 2022,
            judul: 'Mainstreaming Smart Agroforestry for Social Forestry Implementation to Support Sustainable Development Goals in Indonesia: A Review',
            link: 'http://dx.doi.org/10.3390/su14159313',
        },
        {
            tahun: 2022,
            judul: 'Palm oil-based bioenergy sustainability and policy in Indonesia and Malaysia: A systematic review and future agendas',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85139316327&doi=10.1016%2fj.heliyon.2022.e10919&partnerID=40&md5=8fb9216140b514cef07ae1045596b27a',
        },
        {
            tahun : 2022,
            judul: 'Slow Pyrolysis of Ulva lactuca (Chlorophyta) for Sustainable Production of Bio-Oil and Biochar',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85126302663&doi=10.3390%2fsu14063233&partnerID=40&md5=712c34e7f854bb78d823372a2475e94a',
        },
        {
            tahun: 2022,
            judul: 'The Scientometric Evaluation of The Research on Yeast Microbial Fuel Cells as A Promising Sustainable Energy Source',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85137562053&partnerID=40&md5=e27cbc34a250513de975b93f72f23c67',
        },
        {
            tahun: 2022,
            judul: 'Utilization of anaerobically digested dairy manure wastewater for Spirulina maxima cultivation',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85134227852&doi=10.1088%2f1755-1315%2f1038%2f1%2f012022&partnerID=40&md5=0c98884e09e53e5f30f9f81d84acfaf7',
        },
        {
            tahun: 2021,
            judul: 'A novel application of simple submersible yeast-based microbial fuel cells as dissolved oxygen sensors in environmental waters',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85107277373&doi=10.1016%2fj.enzmictec.2021.109831&partnerID=40&md5=e5979a5e2aaae203b375e4c02f13e233',
        },
        {
            tahun: 2021,
            judul: 'Design of rotary dryer for sand drying using biomass energy sources',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85099300607&doi=10.1051%2fe3sconf%2f202122600024&partnerID=40&md5=a21c95b39b3084c1e61dc3bf1648a8dd',
        },
        {
            tahun: 2021,
            judul: 'Enhancement of bioethanol production from palm sap (Arenga pinnata (Wurmb) Merr) through optimization of Saccharomyces cerevisiae as an inoculum',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85109480446&doi=10.1016%2fj.jmrt.2021.06.085&partnerID=40&md5=2f3738edc11879536c87203a726a36b9',
        },
        {
            tahun: 2021,
            judul: 'Nitrogen deficiency results in changes to cell wall composition of sorghum seedlings',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85120879236&doi=10.1038%2fs41598-021-02570-y&partnerID=40&md5=29d3e22f2793bbab3afc5ebbd7c27263',
        },
        {
            tahun: 2021,
            judul: 'Sustainable electricity generation from photo-bioelectrochemical cell based on carbon nanotubes and chlorophyll anode',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85098887836&doi=10.1016%2fj.egyr.2019.11.030&partnerID=40&md5=8035523ddc7ef675016a27935adcf0d8',
        },
        {
            tahun: 2020,
            judul: 'A review of technology assessment of green gasoline processing',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092041204&doi=10.1063%2f5.0014567&partnerID=40&md5=f6c5abb08ae0e414ceaf2410e572d5be',
        },
        {
            tahun: 2020,
            judul: 'Analysis of utilization of low grade bioethanol and oxygenated additives to COV and heat release rate on SI engine',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85080863908&doi=10.1088%2f1755-1315%2f439%2f1%2f012004&partnerID=40&md5=8b5e91078b20b8825de469b82ca69230',
        },
        {
            tahun: 2020,
            judul: 'Dark fermentative hydrogen production from cheese whey using hydrogen-producing bacteria isolated from Mount Pancar hot spring, West Java',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85091899520&doi=10.1051%2fe3sconf%2f202018800018&partnerID=40&md5=295caf27ba990000d6ffeec3fb75e8e0',
        },
        {
            tahun: 2020,
            judul: 'Enhancement the added value of sengon wood waste pulp as bioenergy raw material for bioethanol production',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85091838314&doi=10.18331%2fBRJ2020.7.3.2&partnerID=40&md5=8118bc2ae68a48e96711f652f35bcead',
        },
        {
            tahun: 2020,
            judul: 'Examination of the usability of leaf chlorophyll content and gene expression analyses as nitrogen status biomarkers in Sorghum bicolor',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85091784767&doi=10.1016%2fj.biteb.2020.100562&partnerID=40&md5=23e5cc39385c737b1daf21c1c31cc3cf',
        },
        {
            tahun: 2020,
            judul: 'Life Cycle Impact Assessment on Electricity Production from Biomass Power Plant System through Life Cycle Assessment (LCA) Method using Biomass from Palm Oil Mill in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85080863908&doi=10.1088%2f1755-1315%2f439%2f1%2f012004&partnerID=40&md5=8b5e91078b20b8825de469b82ca69230',
        },
        {
            tahun: 2020,
            judul: 'Production of sorghum pellets for electricity generation in Indonesia: A life cycle assessment',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85092041204&doi=10.1063%2f5.0014567&partnerID=40&md5=f6c5abb08ae0e414ceaf2410e572d5be',
        },
        {
            tahun: 2020,
            judul: 'Sequential production of ligninolytic, xylanolytic, and cellulolytic enzymes by Trametes hirsuta AA-017 under different biomass of Indonesian sorghum accessions-induced cultures',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85080863908&doi=10.1088%2f1755-1315%2f439%2f1%2f012004&partnerID=40&md5=8b5e91078b20b8825de469b82ca69230',
        },
        {
            tahun: 2019,
            judul: 'Analysis of the feasibility of small-biomass power generation from the palm oil mill-study case: Palm oil mill in Riau-Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85074628836&doi=10.1088%2f1755-1315%2f336%2f1%2f012018&partnerID=40&md5=87ec572182654ee7240a69b5bd6d844d',
        },
        {
            tahun: 2019,
            judul: 'Review on biogas from palm oil mill effluent (POME): Challenges and opportunities in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85069050237&doi=10.1088%2f1755-1315%2f293%2f1%2f012004&partnerID=40&md5=7757c765dbae8a954469b88eaeb4e84c',
        },
        {
            tahun: 2018,
            judul: 'Environmental load assessment for an integrated design of microalgae system of palm oil mill in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85049554465&doi=10.1016%2fj.energy.2018.03.144&partnerID=40&md5=f514176df38424c84c8503361c44620a',
        },
        {
            tahun: 2018,
            judul: 'Estimating the age of oil palm trees using remote sensing technique',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85059536552&doi=10.1088%2f1755-1315%2f209%2f1%2f012046&partnerID=40&md5=1eb2cc5df98c9c10ef097d425ef1cab5',
        },
        {
            tahun: 2018,
            judul: 'High-value chemicals from marine macroalgae: Opportunities and challenges for marine-based bioenergy development',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85046091791&doi=10.1088%2f1755-1315%2f141%2f1%2f012039&partnerID=40&md5=9095330b5f6aca2f45d23c1d5ed84e54',
        },
        {
            tahun: 2018,
            judul: 'Review on Bamboo Utilization as Biocomposites, Pulp and Bioenergy',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85059543639&doi=10.1088%2f1755-1315%2f209%2f1%2f012042&partnerID=40&md5=58d8a462322db7edfe8368ef41c1d237',
        },
        {
            tahun: 2018,
            judul: 'Risk analysis and mitigation strategy for sugar cane production processes (Case Study: X Sugar Cane Factory - West Java)',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85017642360&doi=10.1016%2fj.forpol.2017.03.022&partnerID=40&md5=bd93944b1a259852c049b1fb0f0bfe7a',
        },
        {
            tahun: 2017,
            judul: 'Potential forest biomass resource as feedstock for bioenergy and its economic value in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84963576859&doi=10.1016%2fj.jclepro.2016.03.096&partnerID=40&md5=88a090503e11feec00affe1ed6e35e7c',
        },
        {
            tahun: 2016,
            judul: 'Effect of biogenic carbon inventory on the life cycle assessment of bioenergy: Challenges to the neutrality assumption',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84969792750&doi=10.18517%2fijaseit.6.2.742&partnerID=40&md5=8ec3a77763066dc5ecbf815dbca7be4b',
        },
        {
            tahun: 2016,
            judul: 'Farm household preferences and evaluation of land use change policies for agro-forestry plantations in Central Kalimantan, Indonesia: A choice experiment',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84905574701&doi=10.1016%2fj.jclepro.2014.06.044&partnerID=40&md5=a6ae5659ecd14df1944b97d465bcf6d8',
        },
        {
            tahun: 2014,
            judul: 'A novel life cycle impact assessment method on biomass residue harvesting reckoning with loss of biomass productivity',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84888020749&doi=10.1016%2fj.indcrop.2013.10.024&partnerID=40&md5=12150a17ac8ebef6b9dd628f14ce121d',
        },
        {
            tahun: 2014,
            judul: 'Preparation and properties of binderless boards from Jatropha curcas L. seed cake',
            link: 'https://www.scopus.com/inward/record .uri?eid=2-s2.0-84900804215&doi=10.1016%2fj.biombioe.2014.04.022&partnerID=40&md5=70a160f81d0de23524d99de48c1233f1',
        },
        {
            tahun: 2014,
            judul: 'Production of anhydrous ethanol using oil palm empty fruit bunch in a pilot plant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84897075862&doi=10.1016%2fj.egypro.2013.05.016&partnerID=40&md5=1fe8c02d179971fed9da56fa09ea670c',
        },
        {
            tahun: 2013,
            judul: 'Development of small scale concentrated solar power plant using organic Rankine cycle for isolated region in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84857239423&doi=10.1016%2fj.biortech.2011.12.082&partnerID=40&md5=203c72f284ccbedd13c2876e584f8c47',
        },
        {
            tahun: 2012,
            judul: 'Oil productivity of the tropical marine diatom Thalassiosira sp.',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84867916998&doi=10.1252%2fkakoronbunshu.38.299&partnerID=40&md5=9c00955692c87548460865c24783bbf1',
        },
        {
            tahun: 2012,
            judul: 'Reduction of greenhouse gas emissions by biogas utilization in a tapioca starch factory',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85053619715&doi=10.17146%2faij.2010.6&partnerID=40&md5=b0d46b8120b14d1a5a4d671c65f6d8ae',
        },
        {
            tahun: 2010,
            judul: 'Development of sorghum tolerant to acid soil using induced mutation with gamma irradiation',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-65649152681&doi=10.1016%2fj.enconman.2009.03.001&partnerID=40&md5=9694d202ee3355f5d241447f3f4a33f3',
        },
        {
            tahun: 2009,
            judul: 'Review on biofuel oil and gas production processes from microalgae',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85074628836&doi=10.1088%2f1755-1315%2f336%2f1%2f012018&partnerID=40&md5=87ec572182654ee7240a69b5bd6d844d',
        }
    ];


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Biomassa</h1>
                <h3 className="display-6 text-secondary">Riset</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiBiomassaRiset;
