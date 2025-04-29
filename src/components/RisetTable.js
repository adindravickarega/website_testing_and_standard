import React from 'react';

// Table Component to display energy services
function StandardTable({ data }) {
    return (
        

<div class="relative overflow-x-auto px-10">
    <table class="bg-white  w-full text-sm text-left ">
        <thead class="text-xs text-gray-800 uppercase bg-gray-100">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Tahun
                </th>
                <th scope="col" class="px-6 py-3">
                    Judul
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item) => (
            <tr key={item.no} class=" border-2 border-gray-100">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowra">
                    {item.tahun}
                </th>
                <td class="px-6 py-4 text-gray-800">
                    {item.judul}
                </td>
            </tr>
        ))}
        </tbody>
    </table>
</div>
    );
}

export default StandardTable;

