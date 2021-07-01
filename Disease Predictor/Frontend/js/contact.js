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
		
    if(user){
        
        var searchDisease = document.getElementById("searchdisease");
        searchDisease.style.display = "block";
        
    }else{
        var searchDisease = document.getElementById("searchdisease");
        searchDisease.style.display = "none";
        //no user is signed in
    }
    
    
    
});


function contactFormSubmit(){
    // Declaring variables
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("msg").value;

    if(name.length == 0 || email.length == 0 || subject.length == 0 || message.length == 0){
        alert("Please fill all the required fields");
        return false;
    }
    else if(email.indexOf("@") == -1 || email.length < 6){
        alert("Please enter a valid email address including @ and 6 characters at max");
        return false;
    }
    else if(message.length <= 50){
        alert("Message length must be 50 words long");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}

function sendMail() {
    var link = "mailto:mohmohsinalii@gmail.com"
    + "?cc=mohmohsinalii@gmail.com"
    + "&subject=" + escape(document.getElementById('subject').value)
    + "&body=" + escape(document.getElementById('msg').value)
;

window.location.href = link;
}