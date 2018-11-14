// JavaScript File
window.onload = () => {
    const searchbutton = document.getElementById("search");
    const textfield = document.getElementById("field");
    const result = document.getElementById("result");
    const allbutton = document.getElementById("all-searches");
    let httpRequest = new XMLHttpRequest();
    let url = "https://info2180-lab6-kayonmarie.c9users.io/request.php";
    
    searchbutton.addEventListener('click', search);
    allbutton.addEventListener('click', searchAll);
    
    function search(){
        let data = textfield.value;
        let ext = '?q='+data;
        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url+ext, true);
        httpRequest.send();
    }
    
    function searchAll(){
        let ext = '?q=&all=true';
        result.innerHTML = '';
        httpRequest.onreadystatechange = doSomethingXML;
        httpRequest.open('GET', url+ext, true);
        httpRequest.send();
    }
    
    function searchResults(responseData){
        let data = responseData.getElementsByTagName('definition');
        let list = document.createElement('ol');
        for(let x = 0; x < data.length; x++){
            let listElement = document.createElement('li');
            let html = `<h3>${data[x].getAttribute('name')}</h3>`.toUpperCase()+`<p>${data[x].innerHTML}</p><p>-${data[x].getAttribute('author')}</p>`;
            listElement.innerHTML = html;
            list.appendChild(listElement);
        }
        return list;
    }
    
    function doSomething(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                let response = httpRequest.responseText;
                result.innerHTML = response;
            }
            else{
                alert('There is a problem with the request');
            }
        }
    }
    
    function doSomethingXML(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                let response = httpRequest.responseXML;
                result.appendChild(searchResults(response));
            }
            else{
                alert('There is a problem with the request');
            }
        }
    }
}