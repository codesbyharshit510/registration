function food(num,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Included foods are "+num);
            resolve();
        },delay)

    })
}
