function validate(){
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="password"){
    window.open("home.html")
    return false;
}
else{
    alert("login failed");
}
}