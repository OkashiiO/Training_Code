//最短循环子串
function matchNext(s){
    let Next = [],j=0;
    Next[0] = 0;
    for(let i=1;i<s.length;i++){
        while(j && s[i] != s[j]) j=Next[j-1];
        if(s[i] == s[j]) j++;
        Next[i] = j;
    }
    
}