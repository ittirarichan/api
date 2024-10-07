fetch('https://dummyjson.com/products').then(res => res.json()).then (data=>{
    data.products.forEach(element => {
        // console.log(element.title);
        const row=document.querySelector('.row')
        const col=document.createElement('div')

        col.classList.add('col-lg-4' )

        col.innerHTML=`
        <div class='card'>
            <img class='card-img-top' src='${element.thumbnail}' alt="Card image" style="width:100%"
            <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.description}</p>
                <p class="card-text">${element.price}</p>
                <a href='#' class="btn btn-primary see-more-btn" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#productModel">See More</a>
            </div>
        </div>        
        `
            row.appendChild(col)
    });
    document.querySelectorAll('.see-more-btn').forEach(btn=>{
        btn.addEventListener('click',(e) =>{
            const productId = e.target.getAttribute('data-id');
            // console.log(productId);
            
            const product = data.products.find(p=> p.id == productId);
            if(product){
                document.getElementById('modalImage').src= product.thumbnail;
                document.getElementById('modalTitle').textContent = product.title;
                document.getElementById('modalDescription').textContent = product.description;
                document.getElementById('modalPrice').textContent = `price: ${product.price}`;
            }
        });
    });
})



.catch(error=> {
    console.error('Error fetching the date:',error); //handling any errors
    
});