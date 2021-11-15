/*Coding for active buttons and form*/
$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");

	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
	});
$(window).trigger("hashchange");

/*Login form coding*/
/*NOT USED HERE ONLY TESTED - Password is 12345678 anything else returns error msg*/
/*NOT USED HERE ONLY TESTED - Production website would NOT have login/password credentials listed here*/
function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	/*If nothing entered in mandatory fields popup message displays*/
	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	/*If password entered is less than 8 characters display error msg*/	
	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}

	else {
	
/*NOT USED HERE ONLY TESTED - if (name=="admin" && password =="12345678")*/
	
		alert("Successsfully logged in");
/*Allow access to main page*/
		window.open('index.html');
		return true;
	}
}

/*Signup form validation code*/
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters"
		return false;
	}
		
	
		/*Successful signup then redirects to login page*/
	else {
		alert("Successfully signed up");
		window.open('login.html');
		return true;
	}
}
		