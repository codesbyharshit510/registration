function rollnumber(num,delay,nextroll){
    setTimeout(() =>{
        console.log("rollnumber is",num);
        if(nextroll) nextroll();
    },delay)
   }
rollnumber(1212,1000,()=>{
    rollnumber(12312,2000,()=>{
        rollnumber(12412,3000,()=>{
            rollnumber(12512,4000);

})
})
});


