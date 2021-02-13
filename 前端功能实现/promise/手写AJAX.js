function makeRequest(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','url');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                alert(xhr.response);
            }else{
                alert(xhr.status);
            }
        }
    }
}

