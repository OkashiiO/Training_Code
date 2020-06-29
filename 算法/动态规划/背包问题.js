// **********题目***********
// 在M件物品里取出若干件放在大小为W的背包里，
// 每件物品的体积为W1，W2，W3····Wn，
// 与这些物品对应的价值分别对应为P1，P2，P3·····Pn，
// 如何求出这个背包能装的最大价值


function beibao(M,W,arrP,arrW){
    let result = [];
    for(let i=0;i <=M; i++){
        result[i] = [];
        for(let j = 0; j <= W; j++){
            if( i == 0 )
                result[i][j] = 0;
            else if(arrW[i-1] > j)
                result[i][j] = result[i-1][j];
            else{
                let price = arrP[i-1]+result[i-1][j - arrW[i-1]];
                result[i][j] = Math.max(price,result[i-1][j]);
            }
        }
    }
    return result[i-1][j-1];

}