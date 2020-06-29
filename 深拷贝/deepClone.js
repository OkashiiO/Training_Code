//JSON
function deepClone(source){
    return JSON.parse(JSON.stringify(source));
}

function deepClone(source){
    if(typeof source !== "object") return source;
    let target = source instanceof Array ? [] : {};
    for(let key in source){
        target[key] = typeof source[key] === 'object' ? deepClone(source[key]) : source[key];
    }
    return target;
}

