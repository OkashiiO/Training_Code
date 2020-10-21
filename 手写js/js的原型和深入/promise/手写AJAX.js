function makeRequest(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == XMLHttpRequest.DONE){
            if(httpRequest.status == 200){
                alert(httpRequest.responseText);
            }else{
                alert('请求出错');
            }
        }
    }
    httpRequest.open('GET','url');
    httpRequest.send();
}

