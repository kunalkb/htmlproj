var database = [
{ 
   username:"kunal" ,
   password:"kk123456"
}
];

var newsfeed = [
{
	username:"arjun",
	timeline:"I am a cool boy!"
},
{
username:"rohan",
timeline:"javascript is best!"
}

];
var userprompt=prompt("Enter username");
var passprompt=prompt("Enter Password");
function signIn(user,pass)
{
	if(user===database[0].username && pass===database[0].password)
	{
		console.log(newsfeed);
	}
	else 
	{
		alert("Warning! Password or username is Incorrect");
		}
		

	
}
signIn(userprompt,passprompt);