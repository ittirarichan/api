// mypro=new Promise(function(res,rej) {
//     if(10==10){
//         res('hello')
//     }else{
//         rej('hi')
//     }
// })
// mypro.then(function(value){
//     console.log(value);
    
// }).catch(function(error){
//     console.log(error);
    
// })


const main =async(url)=>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data);
        return[data,null]        
    }catch(error){
        return[null,error]
    }
}
const fetchdata = async()=>{
    const[response,error] = await main('https://dummyjson.com/products')
    if(response){
        console.log(response);
        
    }
    else{
        console.log(error);
        
    }
}
fetchdata()