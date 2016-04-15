function alert_fn()
{


alert("Hello World");

}
function installFirebase()
{/*
	var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= 'https://cdn.firebase.com/js/client/2.4.1/firebase.js';
   head.appendChild(script);*/
}

function  createUser(varUser, varPass)
{
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/user");
	myFirebaseRef.push({
  
  loginName: varUser,
  password: varPass,
  score: {
    level1: "undefined",
    level2: "undefined",
    level3: "undefined"
  }
});
}

function setUserInfo(){
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com");
	myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});
}
	
function getUserInfo(user, pass){
	/*
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com");
	myFirebaseRef.child("location/city").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
});
*/
var data = null;
var key = null;
var ref = new Firebase("https://gmdemoapp.firebaseio.com/user");
ref.orderByChild("loginName").equalTo(user).on("child_added", function(snapshot) {
  if (pass == snapshot.val().password)
  {
	  console.log("verified");
      return "valid";
  }
  else
  {
	  console.log("invalid");
	  return "invalid";}
});
}

function getUserScore(user, level){
	/*
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com");
	myFirebaseRef.child("location/city").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
});
*/
var data = null;
var key = null;
var ref = new Firebase("https://gmdemoapp.firebaseio.com/user");
ref.orderByChild("loginName").equalTo(user).on("child_added", function(snapshot) {
  console.log( snapshot.child("score/level1").val());
  if (level == "1")
  return snapshot.child("score/level1").val();
  if (level == "2")
  return snapshot.child("score/level2").val();
  if (level == "3")
  return snapshot.child("score/level3").val();
  
});
}
function getTotalQuestions(level){
	
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/questions/"+level+"");
	myFirebaseRef.once("value", function(snapshot) {
	var a = snapshot.numChildren()
	 console.log("num of questions of the user "+level+"= "+a);
	});
 

}