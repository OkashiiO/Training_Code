// 简易版，内存消耗较大
function quickSort(arr,low,high){
    if(arr.length <=1)
        return arr;

    let left=[],
        right=[],
        pivot=arr[0];
    
    for(let i=1;i<arr.length;i++){
        if(arr[i] < pivot)
            left.push(arr[i]);
        else
            right.push(arr[i]);
    }

    return quickSort(left).concat(pivot,quickSort(right));
}

// ************************************
// 改进版，减少内存消耗
function quickSort(arr,low,high){
    if(low < high){
        let pivot = partition(arr,low,high);
        quickSort(arr, low,pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

function partition(arr,low,high){
    let pivot = arr[low];
    while(low < high){
        while(low < high && arr[high] > pivot){
            --high;
        }
        arr[low] = arr[high];
        while(low < high && arr[low]<=pivot){
            ++low;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}