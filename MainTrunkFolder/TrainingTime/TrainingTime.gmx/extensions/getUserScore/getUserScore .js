function getUserScore(user)
{
	var scoreReturn = null;
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com");
var hopperRef = myFirebaseRef.child(user);
hopperRef.on("value", function(snapshot) {
  console.log(snapshot.val());
  scoreReturn = snapshot.child("level1")+";"snapshot.child("level2")+";";
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
console.log(scoreReturn);
return scoreReturn;
}