
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDY92ee0ZDoW8UsXnWKp3qiZRWKrsp0YIo",
    authDomain: "dpwebapp-se.firebaseapp.com",
    projectId: "dpwebapp-se",
    storageBucket: "dpwebapp-se.appspot.com",
    messagingSenderId: "356658982784",
    appId: "1:356658982784:web:4dc996c469f18f8a7cdb65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


function loggedIn(){
    var email = document.getElementById("email");
	var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));

}

auth.onAuthStateChanged(function(user){
		
    if(user){
        
        var email = user.email;
        alert('Login Successful');
        alert("Active User " + email);
        
        //Take user to a different or home page

        //is signed in
    location.replace("./searchdisease.html");
        
    }else{
        
        alert("No Active User");
        //no user is signed in
    }
    
    
    
});

