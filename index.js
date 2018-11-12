// JavaScript File
window.onload = () => {
    const searchbutton = document.getElementById("search");
    let httpRequest = new XMLHttpRequest();
    let url = "https://info2180-lab6-kayonmarie.c9users.io/request.php";
    
    searchbutton.addEventListener('click', search);
    
    function search(){
        url += '?q=definition';
        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url, true);
        httpRequest.send();
    }
    
    function doSomething(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                let response = httpRequest.responseText;
                alert(response);
            }
            else{
                alert('There is a problem with the request');
            }
        }
    }
}