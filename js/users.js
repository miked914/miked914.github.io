var users = [
	{	'firstname':'Mo',
		'lastname':'Sho',
		'password':'password'
	},
	{	'firstname':'Rickie',
		'lastname':'Joe',
		'password':'password'
	}
];

var usr = $("#login-username");
var pwd = $("#login-password");
var loginBTN = $("#btn-login");
var signupBTN = $("#btn-signup");

// Log in user
loginBTN.on("click", function(event) {
	for (var i = 0; i < users.length; i++) {
        if (users[i].firstname == usr.val()) {
        	if (users[i].password == pwd.val()) {
        		usr.val('');
        		pwd.val('');
            	alert("You have successfully logged in");
            }
        }
    }
});

// Sign up user
signupBTN.on("click", function(event) {
	users.push(
		{'firstname':usr.val(),
		'lastname':'',
		'password':pwd.val()
		}
	);

	alert("You have successfully signed in");
	console.log("usr: ", usr.val());
	console.log("pwd: ", pwd.val());

	usr.val('');
    pwd.val('');
	
});
