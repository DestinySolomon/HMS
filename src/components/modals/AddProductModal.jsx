import { useState } from "react";


export default function AddProductModal({
    closeModal,
    saveProduct
}) {


const [product,setProduct] = useState({

    name:"",
    category:"",
    quantity:"",
    unit:"",
    status:"In Stock"

});



function handleChange(e){

    setProduct({

        ...product,

        [e.target.name]:e.target.value

    });

}



function submit(){

    saveProduct({

        ...product,

        id:Date.now(),

        quantity:Number(product.quantity)

    });

    closeModal();

}



return (

<div
className="
fixed
inset-0
bg-black/60
flex
items-center
justify-center
z-50
"
>


<div
className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-8
w-full
max-w-lg
"
>


<h2 className="
text-white
text-2xl
font-bold
mb-6
">

Add Product

</h2>



<div className="space-y-4">


<input

name="name"

placeholder="Product name"

onChange={handleChange}

className="
w-full
bg-[#101317]
text-white
p-3
rounded-lg
"

/>



<input

name="category"

placeholder="Category"

onChange={handleChange}

className="
w-full
bg-[#101317]
text-white
p-3
rounded-lg
"

/>



<input

name="quantity"

placeholder="Quantity"

type="number"

onChange={handleChange}

className="
w-full
bg-[#101317]
text-white
p-3
rounded-lg
"

/>



<input

name="unit"

placeholder="Unit (Pieces, Cartons...)"

onChange={handleChange}

className="
w-full
bg-[#101317]
text-white
p-3
rounded-lg
"

/>



</div>




<div className="
flex
gap-4
mt-8
">


<button

onClick={closeModal}

className="
flex-1
border
border-gray-600
text-white
py-3
rounded-lg
"

>

Cancel

</button>



<button

onClick={submit}

className="
flex-1
bg-[#C8A45D]
text-black
py-3
rounded-lg
font-semibold
"

>

Save Product

</button>



</div>



</div>


</div>

);

}