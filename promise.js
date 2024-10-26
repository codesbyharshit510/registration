// const promise=new Promise(function(resolve,reject){

//     console.log("My First Promise")
//     resolve("Resolved");
// });
// promise.then(( )=>{
//     console.log("my first then")
// }).catch(()=>{
//     console.log("My first catch")
// })


// let promise = new Promise((resolve, reject) => {

//     resolve({ user: "hr", pass: "12345" });
// })
// promise.then((data) => {
//     console.log(data);
//     return data;


// }).then(
//     (res) => {
//         console.log(res.user);

//     }).catch(() => {
//         console.log("error");
//     }).finally(() => {
//         console.log("finally");
//     })
function roll(num,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Roll no is "+num);
            resolve();
        },delay)

    })
}
async function getRoll(){
    let roll1=await roll(1212,1000);
    let roll2=await roll(1213,2000);
}
console.log(getRoll());

// by call back
// roll(12131,1000).then(()=>{
//     roll(12132,2000).then(()=>{
//         roll(12133,3000).then(()=>{
//             console.log("All rolls are called");
    
//         })
//     })
// })
