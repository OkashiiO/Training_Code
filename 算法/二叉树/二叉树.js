//定义一个节点
function Node(data,left,right){
    this.left = left;
    this.right = right;
    this.data = data;
    this.show = () =>{return this.data}
}

//二叉树
function BST(){
    this.root = null;
    this.insert = insert;
}

//插入数据
function insert(data){
    let node = new Node(data,null,null);
    if(this.root === null){
        this.root = node;
    }else{
        let current = this.root;
        let parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current === null){
                    parent.left = node;
                    break;
                }
            }
            else{
                current = current.right;
                if(current === null){
                    parent.right = node;
                    break;
                }
            }
        }
    }
}
//前序遍历
function preOrder(node){
    if(node !== null){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}
//中序遍历
function inOrder(node){
    if(node !== null){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}
//后序遍历
function postOrder(node){
    if(node !== null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

//判断是否为二叉树
function isValidBST(root){
    if(!root) return true;
    if(root.left && root.left.data >= root.left.data) return false;
    if(root.right && root.right.data <= root.right.data) return false;
    return isValidBST(root.left)&&isValidBST(root.right);
}