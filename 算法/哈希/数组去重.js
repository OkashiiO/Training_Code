//利用indexOf判断数组
function unique1(arr){
    let tmpArr = [];
    for(let i=0; i<arr.length; i++ ){
        if(arr.indexOf(arr[i] == i))
            tmpArr.push(arr[i]);
    }
    return tmpArr;
}
//利用hash查找
function unique2(arr){
    let tmpArr = [], hash = {};
    for(var i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
            hash[arr[i]] = true;
            tmpArr.push(arr[i]);
        }
    }
    return tmpArr;
}

//使用set
function unique3(arr){
    return [... new Set(arr)];
}