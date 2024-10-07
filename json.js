fetch('https://dummyjson.com/products').then(res => res.json()).then (data=>{
    data.products.forEach(element => {
        // console.log(element.title);
        const row=document.querySelector('.row')
        const col=document.createElement('div')
        col.classList.add('col-lg-4' )
        col.innerHTML=`
        <img src="${element.thumbnail}" width='100%'>
            <h3>${element.title}</h3>
            <h6>${element.price}</h6>
            `
            row.appendChild(col)
    });
})
