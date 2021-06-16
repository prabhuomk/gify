let first="https://api.giphy.com/v1/gifs/search?api_key=SHkvltZP2ky5bVErX6iwxM610YkGlDl5&limit=5&offset=0&rating=g&lang=en&q=";
let second="https://random-word-api.herokuapp.com/word?number=1";
fetch(second)
.then((res)=>{
    return res.json();
})
.then((ress)=>
{
    return fetch(first+ress[0]);
})
.then((result)=>{
    
    return result.json();
    
})
 .then((final)=>{

    final.data.forEach((element)=>{
        foo(element.images.original.url);
    });
})
.catch((err)=>
{
    console.log(err);
});

function foo(param){
    let a= document.createElement("object");
a.data=param;
document.body.append(a);
}
