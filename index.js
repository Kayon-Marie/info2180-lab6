// JavaScript File
window.onload = () => {
    const searchbutton = document.getElementById("search");
    const textfield = document.getElementById("field");
    const result = document.getElementById("result");
    let httpRequest = new XMLHttpRequest();
    let url = "https://info2180-lab6-kayonmarie.c9users.io/request.php";
    
    searchbutton.addEventListener('click', search);
    
    function search(){
        let data = textfield.value;
        let ext = '?q='+data;
        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url+ext, true);
        httpRequest.send();
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
}