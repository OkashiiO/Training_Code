var request = new XMLHttpRequest();
request.open('GET','url');
request.onreadystatechange = function(){
    if(request.readyState == 4){
        console.log('请求完成');
        if(request.response.status >= 200 && request.response.status < 300){
            console.log('请求成功')
        }
    }
}
request.send();