import React from 'react';
import MapWithProvider from './MapWithProvider';

// Table Component to display energy services
function TestingTable({ data }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead className="bg-info text-white">
                    <tr>
                        <th>No</th>
                        <th>Testing/Jasa Layanan</th>
                        <th>Deskripsi Singkat</th>
                        <th>Service Provider</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.no}>
                            <td>{item.no}</td>
                            <td>{item.service}</td>
                            <td>{item.description}</td>
                            <td
                                colSpan={item.provider ? 1 : 2}
                                className={item.provider ? '' : 'text-center'}
                            >
                                {item.provider ? (
                                    <React.Fragment>
                                        <p><strong>{item.provider.name}</strong></p>
                                        {item.provider.contact && (
                                            <div>
                                                {item.provider.contact.phone && <p>Telp: {item.provider.contact.phone}</p>}
                                                {item.provider.contact.fax && <p>Fax: {item.provider.contact.fax}</p>}
                                                {item.provider.contact.email && <p>Email: {item.provider.contact.email}</p>}
                                            </div>
                                        )}
                                        <p>{item.provider.address}</p>
                                        <MapWithProvider
                                            coordinates={item.provider.coordinates} />
                                    </React.Fragment>
                                ) : (
                                    <p className="text-center">-</p>
                                )}
                            </td>
                            {item.provider && (
                                <td>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        className="btn btn-outline-info w-100 px-3 py-2 rounded-pill"
                                        rel="noopener noreferrer"
                                    >
                                        Link
                                    </a>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TestingTable;

