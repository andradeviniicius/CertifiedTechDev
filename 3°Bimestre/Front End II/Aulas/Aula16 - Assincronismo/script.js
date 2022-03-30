
let val = true

let promise = new Promise((res,rej)=>{
    if(val){
        res("Promise ok")
    } else {
        rej("Promise não ok")
    }
});

promise.then(
    (res)=>{
        console.log("ó o then ai"+res);
    }
    ).catch(
    (err)=>{
        console.log("ó o err ai"+err);
    })

