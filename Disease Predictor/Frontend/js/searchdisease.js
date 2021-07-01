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
var symptomList ='';
var predictedDisease ='';
var select = document.getElementById("select"),
arr = ['itching',
'skin_rash',
'nodal_skin_eruptions',
'continuous_sneezing',
'shivering',
'chills',
'joint_pain',
'stomach_pain',
'acidity',
'ulcers_on_tongue',
'muscle_wasting',
'vomiting',
'burning_micturition',
'spotting_ urination',
'fatigue',
'weight_gain',
'anxiety',
'cold_hands_and_feets',
'mood_swings',
'weight_loss',
'restlessness',
'lethargy',
'patches_in_throat',
'irregular_sugar_level',
'cough',
'high_fever',
'sunken_eyes',
'breathlessness',
'sweating',
'dehydration',
'indigestion',
'headache',
'yellowish_skin',
'dark_urine',
'nausea',
'loss_of_appetite',
'pain_behind_the_eyes',
'back_pain',
'constipation',
'abdominal_pain',
'diarrhoea',
'mild_fever',
'yellow_urine',
'yellowing_of_eyes',
'acute_liver_failure',
'fluid_overload',
'swelling_of_stomach',
'swelled_lymph_nodes',
'malaise',
'blurred_and_distorted_vision',
'phlegm',
'throat_irritation',
'redness_of_eyes',
'sinus_pressure',
'runny_nose',
'congestion',
'chest_pain',
'weakness_in_limbs',
'fast_heart_rate',
'pain_during_bowel_movements',
'pain_in_anal_region',
'bloody_stool',
'irritation_in_anus',
'neck_pain',
'dizziness',
'cramps',
'bruising',
'obesity',
'swollen_legs',
'swollen_blood_vessels',
'puffy_face_and_eyes',
'enlarged_thyroid',
'brittle_nails',
'swollen_extremeties',
'excessive_hunger',
'extra_marital_contacts',
'drying_and_tingling_lips',
'slurred_speech',
'knee_pain',
'hip_joint_pain',
'muscle_weakness',
'stiff_neck',
'swelling_joints',
'movement_stiffness',
'spinning_movements',
'loss_of_balance',
'unsteadiness',
'weakness_of_one_body_side',
'loss_of_smell',
'bladder_discomfort',
'foul_smell_of urine',
'continuous_feel_of_urine',
'passage_of_gases',
'internal_itching',
'toxic_look_(typhos)',
'depression',
'irritability',
'muscle_pain',
'altered_sensorium',
'red_spots_over_body',
'belly_pain',
'abnormal_menstruation',
'dischromic _patches',
'watering_from_eyes',
'increased_appetite',
'polyuria',
'family_history',
'mucoid_sputum',
'rusty_sputum',
'lack_of_concentration',
'visual_disturbances',
'receiving_blood_transfusion',
'receiving_unsterile_injections',
'coma',
'stomach_bleeding',
'distention_of_abdomen',
'history_of_alcohol_consumption',
'fluid_overload.1',
'blood_in_sputum',
'prominent_veins_on_calf',
'palpitations',
'painful_walking',
'pus_filled_pimples',
'blackheads',
'scurring',
'skin_peeling',
'silver_like_dusting',
'small_dents_in_nails',
'inflammatory_nails',
'blister',
'red_sore_around_nose',
'yellow_crust_ooze'];
             
for(var i = 0; i < arr.length; i++)
{
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value",arr[i]);
    select.insertBefore(option,select.lastChild);
}

var submit_symptoms = document.getElementById("submitbtn");
var symptomstable = document.getElementById("symptomstable");

submit_symptoms.addEventListener("click", function(e) {
    e.preventDefault()
    var select = document.getElementById('select').value;
    let b = document.createElement('BUTTON');

    b.className = "fa fa-window-close btn-primary";
    b.style.width = "auto";
    b.style.height = "auto";
    b.style.marginRight = "4px";
    b.style.marginTop = "4px";
    b.style.marginBottom = "4px";
    b.style.backgroundColor = "skyblue";
    b.style.color = "white";
    b.style.border = "2px solid white";
    b.style.borderRadius = "5px";

    var table = document.getElementById('symptomstable');
    var NewRow = table.insertRow(table.rows.length);
    
    var symptomcell = NewRow.insertCell(0);

    symptomcell.innerHTML = select;
    symptomList = symptomList + '\n' + select;
    b.appendChild(symptomcell);

    b.addEventListener("click", function() {
        this.parentNode.removeChild(this);

      })
      symptomstable.appendChild(b);
      document.querySelector('select').value = "";

});

function signOut(){
		
    auth.signOut();
    alert("Signed Out");
    location.replace("./login.html");
}


function predictSymptom(){
    // var symptoms_Table = document.getElementById("TABLE");
    H1 =  document.getElementById("PredictedDisease");
    H1.style.display = "block";
    H1.innerHTML = 'Please Wait...';
    console.log(symptomList)
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/", true);
    xhttp.send(symptomList);

    xhttp.onreadystatechange = (e) => {
        predictedDisease = xhttp.responseText;
      }

      setTimeout(() => { 
        predictedDisease = predictedDisease.slice(32);
        H1.innerHTML = predictedDisease;
       }, 2000);
     
}