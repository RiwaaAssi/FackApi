const getProducts= async() =>{
    const {data} = await axios.get(`https://dummyjson.com/products`);
    return data;

}


const displayProducts= async()=>{
    const data=await getProducts();
    const products=data.products;

    const result=products.map((product)=>{
         return `
         <div class="product">
           <h2>${product.title}</h2>
           <img src="${product.thumbnail}"/>
           <a href='details.html?id=${product.id}'>details</a>
         
         </div>
         
         
         `;
    }).join(' ');

    document.querySelector(".products").innerHTML=result;
    document.querySelector(".overlay").classList.add('d-none');

}

displayProducts();