var users = {
	{	'firstname':'Mo',
		'lastname':'Sho',
		'password':'password'
	},
	{	'name':'Rickie',
		'lastname':'Jo',
		'password':'password'
	}
};

function addUser(fname, lname, password) {
	users.push({
		'name':fname,
		'lastname':lname,
		'password':password
	});

}