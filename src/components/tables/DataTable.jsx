import { useMemo, useState } from "react";
import { Search } from "lucide-react";

export default function DataTable({
    columns,
    data
}) {

    const [search, setSearch] = useState("");

    const filteredData = useMemo(() => {

        if (!search) return data;

        return data.filter(row =>
            Object.values(row)
                .join(" ")
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [search, data]);

    return (

        <div className="bg-[#181C23] rounded-xl border border-[#2A2F38]">

            <div className="p-5 border-b border-[#2A2F38]">

                <div className="flex items-center gap-3 bg-[#101317] rounded-lg px-4">

                    <Search size={18} className="text-gray-400"/>

                    <input
                        placeholder="Search..."
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className="bg-transparent w-full p-3 outline-none text-white"
                    />

                </div>

            </div>

            <table className="w-full">

                <thead>

                    <tr className="text-left text-gray-400 border-b border-[#2A2F38]">

                        {columns.map(col=>(
                            <th
                                key={col.key}
                                className="p-4"
                            >
                                {col.label}
                            </th>
                        ))}

                    </tr>

                </thead>

                <tbody>

                    {filteredData.map((row,index)=>(

                        <tr
                            key={index}
                            className="border-b border-[#2A2F38] hover:bg-[#101317]"
                        >

                            {columns.map(col=>(

                                <td
                                    key={col.key}
                                    className="p-4 text-gray-200"
                                >
                                    {row[col.key]}
                                </td>

                            ))}

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}