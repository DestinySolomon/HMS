import EmptyState from "../ui/EmptyState";
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

                    <tr className="border-b border-[#2A2F38] hover:bg-[#1C222B] transition duration-200">

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


{

data.length === 0

?

<tr>

<td

colSpan={columns.length}

>

<EmptyState

title="No Records Found"

description="There are currently no records available."

/>

</td>

</tr>


:

data.map((row,index)=>(

<tr

key={index}

className="
border-b
border-[#2A2F38]
hover:bg-[#1C222B]
transition
"

>

{

columns.map(column=>(

<td

key={column.key}

className="
px-6
py-4
text-gray-300
"

>

{row[column.key]}

</td>

))

}

</tr>

))

}


</tbody>

            </table>

        </div>

    );

}