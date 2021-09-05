function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  if(!email){
      alert("email not present");
  }else if(!pass){
  alert("NO Password");
  }else if(email || pass){
      alert("Logged In");
  }
}
