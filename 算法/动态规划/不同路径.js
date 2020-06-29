// *****************题目****************
// 一个机器人位于一个 m x n 网格的左上角(0,0)
// 机器人每次只能向下或者向右移动一步。
// 机器人试图达到网格的右下角(n,m)
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径
function uniquePath(arr){
    let n = arr.length,
        m = arr[0].length,
        tmp = [];

    //初始化将格子填充为0
    for(let i=0;i<n;i++){
        tmp[i] = Array(m).fill(0);
    }

    //如果起点或终点有障碍物，直接返回0
    if(arr[0][0] == 1 || arr[n-1][m-1] == 1)
        return 0;

    for(i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i==0 && j==0)
                temp[i][j] = 1;

            //第一种边界情况：1行n列
            else if(i==0){
                if(arr[i][j] != 1 && temp[i][j-1] != 0){
                    temp[i][j] = 1;
                }else{
                    temp[i][j] = 0;
                }
            }

            //第二种边界情况：m行1列
            else if(j == 0){
                if(arr[i][j] != 1 && tmep[i-1][j] != 0){
                    temp[i][j] = 1;
                }else{
                    temp[i][j] = 0;
                }
            }
            
            //如果不是上述的两种边界情况，终止的到达方式是（i-1，j）的和以及（i，j-1）的和
            else if(arr[i][j] != 1){
                temp[i][j] = temp[i-1][j]+temp[i][j-1];
            }
        }
    }
    return temp[n-1][m-1];
}