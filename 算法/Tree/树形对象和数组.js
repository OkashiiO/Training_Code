// 将一个扁平化的对象数组，转化为树形结构
// 现在有一个对象组成的数组，每个元素有id属性和parent_id属性，根据其id属性和parent_id属性，将其转换为树结构的对象
const arr = [
    {
        id: '1',
        parent_id: 'root',
        name:'abc'
    },
    {
        id: '2',
        parent_id: 'root',
        name:'abc'
    },
    {
        id: '1-1',
        parent_id: '1',
        name:'abc'
    },
    {
        id: '1-2',
        parent_id: '1',
        name:'abc'
    },
    {
        id: '1-1-1',
        parent_id: '1-1',
        name:'abc'
    },
    {
        id: '1-1-2',
        parent_id: '1-1',
        name:'abc'
    },
    {
        id: '1-2-1',
        parent_id: '1-2',
        name:'abc'
    },
    {
        id: '2-1',
        parent_id: '2',
        name:'abc'
    },
    {
        id: '2-2',
        parent_id: '2',
        name:'abc'
    },
    {
        id: '2-1-1',
        parent_id: '2-1',
        name:'abc'
    },
    {
        id: '2-2-1',
        parent_id: '2-2',
        name:'abc'
    },
    {
        id: '2-2-1-1',
        parent_id: '2-2-1',
        name:'abc'
    },
    {
        id: '2-2-1-2',
        parent_id: '2-2-1',
        name:'abc'
    },
     {
        id: '2-2-1-2-1',
        parent_id: '2-2-1-2',
        name:'abc'
    },
    {
        id: '2-3',
        parent_id: '2',
        name:'abc'
    },
    {
        id: '2-3-1',
        parent_id: '2-3',
        name:'abc'
    },
    {
        id: '3',
        parent_id: 'root',
        name:'abc'
    },   
 ];
 
// 将这样一个数组，变成能够以树形展示的对象

//先将数组中的每一个节点放到temp对象中（创建set）
//即数组中有{id: '2-3', parent_id: '2',...}这样一个节点，需要将他放到temp中变成 '2-3': {id: '2-3', parent_id: '2',...}这种JSON结构
//直接遍历整个temp对象，通过这句代码   temp[temp[i].parent_id].children[temp[i].id] = temp[i];  
//将当前子节点与父节点建立连接。是因为我们保证了父节点一定在子节点前，
//那么当子节点出现的时候就直接可以用temp[temp[i].parent_id]来查找到父节点这个时候先父节点的children对象中添加一个引用即可。
function buildTree(array,id,parent_id){
    let temp = {};
    let tree = {};
    for(let i in array){
        temp[array[i][id]] = array[i];
    }

    for(let i in temp){
        if(temp[i][parent_id] != 'root'){
            if(!temp[temp[i][parent_id]].children){
                temp[temp[i][parent_id]].children = [];
            }
            temp[temp[i][parent_id]].children.push(temp[i]);
        }else{
            tree[temp[i][id]] = temp[i];
        }
    }
    return tree;
}

const obj = buildTree(arr,'id','parent_id');
console.log(obj);