
	function validateForm(){
	alert("ok");
	var a=document.getElementById("pass").value;
    var n=document.getElementById("fname").value;
    if(typeof(Storage)!=="undefined"){
    	//alert("ok");
    	var a=document.getElementById("pass").value;
		var b=document.getElementById("repass").value;
    	var n=document.getElementById("fname").value;	
    	if(a!=b){
	  		alert("password should match");
		}
		else{
			alert("ok"+localStorage.setItem("name" , n));
			localStorage.setItem("name" , n);
			localStorage.setItem("pass" , b);
		}
    }
    else{
    	alert("Storage not supported");
    }
	

   
}
