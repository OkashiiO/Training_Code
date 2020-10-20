// nums为一个数组，找出数组中的三个数使他们等于target
function threeSun(nums,target){
    let res = [];
    let len = nums.length;
    if(len < 3) return res;
    nums.sort(function(a,b){ return  a - b });
    for(let i=0;i<len;i++){
        if(nums[i]>target) break;
        if(nums[i] === nums[i-1] ) continue;
        let L = i+1;
        let R = len-1;
        while(L < R){
            let sum = nums[i] + nums[L] + nums[R];
            if(sum === target){
                res.push([nums[i], nums[L], nums[R]]);
                while(L < R && nums[L] === nums[L+1]) L++;
                while(L < R && nums[R] === nums[R-1]) R--;
                L++;
                R--;
            }
            else if(sum < target) L++;
            else if(sum > target) R++;
        }
    }
    return res;
}

function HashNum(nums,target){
    let res = [];
    let hash = {};
    for(let i=0; i < nums.length -2; i++){
        for(let j=i+1; j<nums.length -1; j++){
            if(hash[nums[j]] !== undefined){
                res.push([nums[j]].concat(hash[nums[j]]))
                hash[nums[j]] = undefined;
            }else{
                let mark = target - nums[i] - nums[j];
                hash[mark] = [nums[i],nums[j]];
            }
        }

    }
}