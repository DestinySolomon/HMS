export default function PageHeader({
    title,
    description,
    action
}) {

    return (

        <div
            className="
            flex
            justify-between
            items-center
            mb-8
            "
        >

            <div>

                <h1
                    className="
                    text-white
                    text-3xl
                    font-bold
                    "
                >

                    {title}

                </h1>


                <p
                    className="
                    text-gray-400
                    mt-2
                    "
                >

                    {description}

                </p>


            </div>


            {action}

        </div>

    );

}