function  createUser(varUser, varPass)
{
	var userExists;
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/FASTi/user");
	myFirebaseRef.once("value", function(snapshot) {
    userExists = snapshot.child(varUser).exists();
  // a === true
  console.log("userExist in Firebase ="+ userExists);
	
	if (!userExists)
		{
	myFirebaseRef.child(varUser).set({
   loginName: varUser,
  password: varPass,
    level1: "undefined",
    level2: "undefined",
    level3: "undefined"
});
	}
	
	});	
	
	
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}