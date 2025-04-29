import React from 'react';
import TestingTable from '../../components/RisetTable';

const EnergiAirRiset = () => {
    const data = [
        {
            tahun: 2024,
            judul: 'Comparative Study of Wave Forces on a Spar-Type FOWT Under Free Floating Conditions: The Role of Slenderness',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196619416&doi=10.1007%2f978-981-97-0106-3_97&partnerID=40&md5=24263876afc63de11f140c615a3e2ef3'
        },
        {
            tahun: 2024,
            judul: 'Navigating challenges on the path to net zero emissions: A comprehensive review of wind turbine technology for implementation in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85187794298&doi=10.1016%2fj.rineng.2024.102008&partnerID=40&md5=e1dc7caad2dd81474ab789e7333815eb'
        },
        {
            tahun: 2024,
            judul: 'Optimal planning of renewable energy park for green hydrogen production using detailed cost and efficiency curves of PEM electrolyzer',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198231770&doi=10.1016%2fj.ijhydene.2024.07.107&partnerID=40&md5=61bfce62eb761098456cf35c3921fca7'
        },
        {
            tahun: 2024,
            judul: 'Promoting Wind Energy by Robust Wind Speed Forecasting Using Machine Learning Algorithms Optimization',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189069897&partnerID=40&md5=503e2a307fa6b1a13e6efd88fdcc0164'
        },
        {
            tahun: 2024,
            judul: 'Technical and performance assessments of wind turbines in low wind speed areas using numerical, metaheuristic and remote sensing procedures',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85180368920&doi=10.1016%2fj.apenergy.2023.122503&partnerID=40&md5=0e612d08b6531cbd7e7c2ea8e33c0a71'
        },
        {
            tahun: 2024,
            judul: 'The development and performance of green hydrogen production combined hybrid PV-wind-battery system in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201147721&doi=10.1063%2f5.0214679&partnerID=40&md5=7c41434aa77c5e81c69f7a93c4ab07c3'
        },
        {
            tahun: 2024,
            judul: 'The Tendency of Failure Probability on Offshore Wind Turbine Components: A Review',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196650747&doi=10.1007%2f978-981-97-0106-3_96&partnerID=40&md5=b33b2b0b91411217b92c71637f1de8b7'
        },
        {
            tahun: 2023,
            judul: 'Wind-powered water pumping system for corn plantations under the food estate program on Sumba Island, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201062865&doi=10.11591%2fijece.v14i5.pp4940-4955&partnerID=40&md5=6d2f1332aacf6287df46be4548482254'
        },
        {
            tahun: 2023,
            judul: 'Generation expansion planning with a renewable energy target and interconnection option: A case study of the Sulawesi region, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85163881540&doi=10.1016%2fj.rser.2023.113489&partnerID=40&md5=f2fdd20bad855cda53d10f4c24b5d86c'
        },
        {
            tahun: 2023,
            judul: 'Impacts of industrial production and air quality by remote sensing on nitrogen dioxide concentration and related effects: An econometric approach',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85165169545&doi=10.1016%2fj.envpol.2023.122212&partnerID=40&md5=3e9526bea81b7d4404d96d2e8f68df23'
        },
        {
            tahun: 2023,
            judul: 'Life cycle engineering (LCE) study for Synechococcus HS-9 biomass production as potential raw material for a third generation biodiesel production',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85173076815&doi=10.20508%2fijrer.v13i3.14070.g8806&partnerID=40&md5=3dd45bc4ab82876105aa2c91017c6f71'
        },
        {
            tahun: 2023,
            judul: 'Optimizing Turbine Siting and Wind Farm Layout in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85159152082&doi=10.14716%2fijtech.v14i3.5803&partnerID=40&md5=b3f6b493c021c2e77e63919ae95349c7'
        },
        {
            tahun: 2022,
            judul: 'Adaptive robust control design to enhance smart grid power system stabilization using wind characteristics in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85118920092&doi=10.11591%2fijpeds.v12.i4.pp2182-2190&partnerID=40&md5=89301567ba1d499be396559f05d424f5'
        },
        {
            tahun: 2022,
            judul: 'Anisotropic double-Gaussian analytical wake model for an isolated horizontal-axis wind turbine',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85126706140&doi=10.1109%2fISRITI54043.2021.9702760&partnerID=40&md5=27fbe27c478c5e64b67437c2ae6e0c78'
        },
        {
            tahun: 2022,
            judul: 'Impact of DFIG Inertia on Short Circuit Fault Current Components',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85127378136&doi=10.1002%2fese3.1120&partnerID=40&md5=bd133e491b43053bf46bc9ab84b47b90'
        },
        {
            tahun: 2022,
            judul: 'Performance Comparison of Different Building Shapes Using a Wind Tunnel and a Computational Model',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85121000174&doi=10.37934%2farfmts.88.3.2030&partnerID=40&md5=bf10c1acc47d88cca49b6339c6b6d47f'
        },
        {
            tahun: 2021,
            judul: 'Adaptive robust control design to enhance smart grid power system stabilization using wind characteristics in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85118920092&doi=10.11591%2fijpeds.v12.i4.pp2182-2190&partnerID=40&md5=89301567ba1d499be396559f05d424f5'
        },
        {
            tahun: 2021,
            judul: 'Comparison of Renewable Energy Output Power Transmission to Loads Via HVAC and HVDC',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85126671909&doi=10.1109%2fISRITI54043.2021.9702761&partnerID=40&md5=3d9596f63e13a4f81974206538901d4f'
        },
        {
            tahun: 2021,
            judul: 'Influence of Wind Turbine Pitch Angle on DFIG Output Stability under Load Changes',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85126706140&doi=10.1109%2fISRITI54043.2021.9702760&partnerID=40&md5=27fbe27c478c5e64b67437c2ae6e0c78'
        },
        {
            tahun: 2021,
            judul: 'Wind Energy Potential on A Highrise Building: A Preliminary Study',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85121000174&doi=10.37934%2farfmts.88.3.2030&partnerID=40&md5=bf10c1acc47d88cca49b6339c6b6d47f'
        },
        {
            tahun: 2019,
            judul: 'A Preliminary Experimental Study on an Axial Flux Permanent Magnet Generator for Regenerative Braking',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85078222597&doi=10.1109%2fICSEEA47812.2019.8938636&partnerID=40&md5=0ce04ef221aeacd1e5dc4eccb3630798'
        },
        {
            tahun: 2019,
            judul: 'Performance and productivity enhancements on vertical axis wind turbines with a novel multi-stages contra-rotating technique',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85062619095&doi=10.1109%2fICSEEA.2018.8627119&partnerID=40&md5=1e58723b831604f3771c2d236ba33d9c'
        },
        {
            tahun: 2018,
            judul: 'Selecting and testing of wind turbine blades of the local-wood growing fastly on local wind characteristics',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85041690622&doi=10.1088%2f1755-1315%2f105%2f1%2f012095&partnerID=40&md5=240ba04fe836006cafbb8077f456ee52'
        },
        {
            tahun: 2015,
            judul: 'Measurement of the Influence of Roof Pitch to Increasing Wind Power Density',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84943602442&doi=10.1016%2fj.egypro.2015.01.029&partnerID=40&md5=282eb3a338160dc18975e5a184f804ff'
        },
        {
            tahun: 2014,
            judul: 'A technical review of building integrated wind turbine system and a sample simulation model in central java, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84894116697&doi=10.1016%2fj.egypro.2014.01.193&partnerID=40&md5=b1eb40a2f3004c57808d976400fb4945'
        },
        {
            tahun: 2013,
            judul: 'Robust PI control of smart controllable load for frequency stabilization of microgrid power system',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84875495518&doi=10.1016%2fj.renene.2012.10.032&partnerID=40&md5=20b89cdfa8fde52c17d11b640610b08f'
        },
        {
            tahun: 2012,
            judul: 'Design of a yaw positioning control system for 100kW horizontal axis wind turbines based on on/off control with dead band and hysteresis',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84867269794&partnerID=40&md5=003484d0cebf662927b2fe6f2175af4c'
        },
        {
            tahun: 2011,
            judul: 'Robust PI-based frequency control of isolated wind-diesel power system with coordinated governor, pitch and battery controller',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-80055010883&doi=10.1541%2fieejeiss.131.1679&partnerID=40&md5=9e5cab23f478cdde4847351d8e9cfe35'
        }
    ];


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Air</h1>
                <h3 className="display-6 text-secondary">Riset</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiAirRiset;
