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

auth.onAuthStateChanged(function(user){

    var searchDisease = document.getElementById("searchdisease");
    
    if(user){
        // user is signed in
        searchDisease.style.display = "block";
        
    }else{
        searchDisease.style.display = "none";
        //no user is signed in
    }
    
    
    
});