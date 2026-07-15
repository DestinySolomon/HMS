import { ArrowUpRight } from "lucide-react";

export default function StatCard({
    title,
    value,
    icon,
    trend
}) {

    return (

        <div
            className="
            bg-[#181C23]
            border
            border-[#2A2F38]
            rounded-xl
            p-6
            "
        >

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-gray-400 text-sm">
                        {title}
                    </p>

                    <h2 className="
                    text-white
                    text-3xl
                    font-bold
                    mt-3
                    ">
                        {value}
                    </h2>

                </div>


                <div
                    className="
                    text-[#C8A45D]
                    bg-[#101317]
                    p-3
                    rounded-lg
                    "
                >

                    {icon}

                </div>

            </div>


            {
                trend &&

                <div className="
                flex
                items-center
                gap-2
                text-green-400
                text-sm
                mt-5
                ">

                    <ArrowUpRight size={16}/>

                    {trend}

                </div>

            }


        </div>

    );
}