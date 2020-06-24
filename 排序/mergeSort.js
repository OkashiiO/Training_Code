function mergeSort(arr){
    let len = arr.length;

    if(!(arr instanceof Array)) return;
    if(len < 2) return arr;

    let mid = Math.floor(len / 2),
        left = arr.slice(0,mid),
        right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }

    while(left.length)
        result.push(left.shift());

    while(right.length)
        result.push(right.shift());

    return result;
}