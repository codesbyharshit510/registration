let url ='https://api.github.com/users/codesbyharshit510';
let b=fetch(url);
b.then((data)=>{
    console.log(data)
    return data.json();
}).then((data)=>{
    console.log(data);
   
}).catch((data)=>{
    console.log("error");
   
}).finally((data)=>{
    console.log("first");
   
})
async function fetchh(){
    let url='https://api.github.com/users';
    let b=await fetch(url);
    let data= await b.json();
    console.log(data);
}
    fetchh()
    