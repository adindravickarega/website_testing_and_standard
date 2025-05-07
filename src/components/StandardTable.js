import React from 'react';

// Table Component to display energy services
function StandardTable({ data }) {
    return (
        <div className="relative overflow-x-auto px-10">
            <table className="bg-white w-full text-sm text-left">
                <thead className="text-xs text-gray-800 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Item
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nama
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.no} className="border-2 border-gray-100 text-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                {item.no}
                            </td>
                            <td className="px-3 py-4 font-medium">
                                {item.link ? (
                                    <a
                                        className="text-blue-600"
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.item}
                                    </a>
                                ) : (
                                    <span>{item.item}</span>
                                )}
                            </td>
                            <td className="px-6 py-4 font-medium">
                                {item.nama}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StandardTable;