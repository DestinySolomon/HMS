export default function StatusBadge({ status }) {

    const colors = {

        Available: "bg-green-500/20 text-green-400",

        Occupied: "bg-red-500/20 text-red-400",

        Cleaning: "bg-blue-500/20 text-blue-400",

        Maintenance: "bg-yellow-500/20 text-yellow-400",

        Pending: "bg-yellow-500/20 text-yellow-400",

        Confirmed: "bg-green-500/20 text-green-400",

        Cancelled: "bg-red-500/20 text-red-400"

    };

    return (

        <span

            className={`
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                ${colors[status] || "bg-gray-700 text-gray-300"}
            `}

        >

            {status}

        </span>

    );

}