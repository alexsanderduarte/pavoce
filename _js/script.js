const imgProducts = document.querySelectorAll(".img-product");
const descriptions = document.querySelectorAll(".description");

imgProducts.forEach((imgProduct, index)=>{

    var description = descriptions[index];    
    imgProduct.addEventListener("click", event =>{

        event.preventDefault();
        imgProduct.style.animation = "hide-img 0.5s forwards";

        setTimeout(function disableImg(){
        imgProduct.style.display = "none";

        description.style.display = "block";
        description.style.animation = "show-text 0.5s backwards 100ms";
    }, 500);  
    });

    description.addEventListener("click", event =>{
        event.preventDefault();
        description.style.animation = "hide-text 0.5s forwards";

        setTimeout(function enableImg(){
        description.style.display = "none"

        imgProduct.style.display = "block";
        imgProduct.style.animation = "show-img 0.5s backwards 100ms"
        
    }, 500);  
    });
});
