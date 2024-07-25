	var users = [
		{user : "Alireza" , age : 21 , gender : "male"},
		{user : "Hadi" , age : 18 , gender : "male"},
		{user : "Ahmad" , age : 31 , gender : "male"},
		{user : "Maryam" , age : 17 , gender : "female"},
		{user : "Amir" , age : 38 , gender : "male"},
		{user : "Farhad" , age : 35 , gender : "male"},
		{user : "Fatemeh" , age : 22 , gender : "female"},
		{user : "Mehdi" , age : 43 , gender : "male"},
		{user : "Tarnam" , age : 64 , gender : "female"},
		{user : "Arian" , age : 31 , gender : "male"},
		{user : "Iman" , age : 28 , gender : "male"},
		{user : "Romina" , age : 21 , gender : "female"},
		{user : "Samyar" , age : 27 , gender : "male"},
		{user : "Ghazal" , age : 22 , gender : "female"},
		{user : "Shadi" , age : 43 , gender : "female"},
		{user : "Bahar" , age : 32 , gender : "female"},
		{user : "Hana" , age : 25 , gender : "female"},
		{user : "Sajad" , age : 13 , gender : "male"},
		{user : "Reza" , age : 53 , gender : "male"},
		{user : "Razie" , age : 32 , gender : "female"}
		]	

	function userAppend(){
	for (var index = 0 ; index < users.length ; index ++){
		if (users[index].gender == "male"){
			var male = "Username: " + users[index].user + "|" + "Age: " + users[index].age + " ^^^ ";
			document.getElementById("maleList").append(male);
		};
		if (users[index].gender == "female") {
			var female = "Username: " + users[index].user + "|" + "Age: " + users[index].age + " ^^^ ";
			document.getElementById("femaleList").append(female);
		}
	};
	}
	function maleAvatarAppear(){
		var appear = document.getElementById("maleImg")
		appear.classList.remove("maleAvatarInvicible")
		appear.classList.add("maleAvatar")
	}
	function femaleAvatarAppear(){
		var appear = document.getElementById("femaleImg")
		appear.classList.remove("femaleAvatarInvicible")
		appear.classList.add("femaleAvatar")
	}
	function maleAvatarDisappear(){
		var disappear = document.getElementById("maleImg")
		disappear.classList.add("maleAvatarInvicible")
		disappear.classList.remove("maleAvatar")
	}
	function femaleAvatarDisappear(){
		var disappear = document.getElementById("femaleImg")
		disappear.classList.add("femaleAvatarInvicible")
		disappear.classList.remove("femaleAvatar")
	}