import React from 'react';

// Table Component to display energy services
function StandardTable({ data }) {
    return (
        <div class="relative w-full px-10">
    <table class="bg-white  w-full text-sm text-left ">
        <thead class="text-xs text-gray-800 uppercase bg-gray-100">
            <tr>
                <th scope="col" class="px-6 py-3">
                    No
                </th>
                <th scope="col" class="px-6 py-3">
                    item
                </th>
                <th scope="col" class="px-6 py-3">
                    nama
                </th>
                <th scope="col" class="px-6 py-3">
                    Deskripsi Singkat
                </th>
                </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.no} class=" border-2 border-gray-100 text-gray-700">
                            <td class="px-6 py-4 font-medium text-gray-900">
                                {item.no}
                            </td>                            
                            <td class="px-6 py-4 font-medium ">
                                {item.link ? (
                                    <a className='text-blue-600' href={item.link} target="_blank"  alt={item.item}>{item.item}</a>
                                ) : (
                                    <span>{item.item}</span>
                                )}
                            </td>
                            <td class="px-6 py-4 font-medium ">
                                {item.nama}
                            </td>
                            <td class="px-6 py-4 font-medium text-blue-600 ">
                                {item.description.map((link) => (
                                <p><a href={`link`}>{link}</a></p>
                            ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StandardTable;

