function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  if(!email && !pass){
      alert("email and password are required");
  }else if(!pass){
  alert("Password is required");
  }else if(!email){
      alert("Email is required");
  }else{
    alert("Login successful");
  }
}

function emailbg(){
  var emailbg=document.body.style.backgroundColor="Green";
}

function passbg(){
  var passbg=document.body.style.backgroundColor="red";
}
