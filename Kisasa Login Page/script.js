 

// Below function Executes on click of login button.
let submit = document.getElementById('submit')

submit.addEventListener("click", function (event) {
    event.preventDefault();
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if ( email.match(mailformat) && password.length >= 6){
    document.getElementById('msg1').innerHTML = "Login Successful"
    document.getElementById("msg1").style.color = "green";
    document.getElementById('msg1').style.fontWeight = 'bold'
//  // Redirecting to other page.
    window.location = "https://www.kisasa.co.za/"; 
 }
 else{
 document.getElementById('msg1').innerHTML ="Enter a valid Email Address and Password!"
 document.getElementById("msg1").style.color = "red";
 document.getElementById('msg1').style.fontWeight = 'bold'
 }
});


