function reformat(str){
    if(str.length <=1) return str;
    var num = str.match(/[0-9]/g),
        letter = str.match(/[a-z]/g),
        res = [];

    if(num == null || letter == null || Math.abs(num.length-letter.length) > 1)
        return "";
    while(num.length > 0 && letter.length > 0){
        num.length >=letter.length ?
            res.push(num.shift(),letter.shift())
            : res.push(letter.shift(),num.shift());
    }
    return res.concat(num,letter).join(" ");
}