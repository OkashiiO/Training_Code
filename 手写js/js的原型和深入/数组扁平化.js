function flatten(arr){
    let res = [];
    arr.forEach((value) =>{
        if(Array.isArray(value)){
            res = res.concat(flatten(value));
        }else{
            res.push(value);
        }
    })
    return res;
}