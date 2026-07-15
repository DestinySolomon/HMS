export default function Button({

children,
variant="primary",
onClick

}) {


const styles = {

primary:
"bg-[#C8A45D] text-black",

secondary:
"bg-[#181C23] text-white border border-[#2A2F38]"

};


return (

<button

onClick={onClick}

className={`
px-5
py-3
rounded-xl
font-semibold
transition
duration-300
hover:-translate-y-1
${styles[variant]}
`}

>

{children}

</button>

);

}