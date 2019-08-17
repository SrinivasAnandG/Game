function validateForm(){
	var a=document.getElementById("pass").value;
    var n=document.getElementById("fname").value;
	alert("Login Success");
	if(a==Window.localStorage.get("name") && n==Window.localStorage.get("pass")){
		alert("Login Success");
	}

   
}

