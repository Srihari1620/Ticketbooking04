function validateForm6() {
  var errors = [];
  var radio1 = document.getElementById("oneway").checked
  var radio2 = document.getElementById("Roundtrip").checked
  var src = document.forms["myForm2"]["origin"].value;
  var dest = document.forms["myForm2"]["destination"].value;
  var passanger1 = document.forms["myForm3"]["fname"].value;
  var passanger1age = document.forms["myForm6"]["Mobile No"].value;
  var passanger2 = document.forms["myForm4"]["fname"].value;
  var passanger2age = document.forms["myForm6"]["Mobile No"].value;
  var child = document.forms["myForm5"]["fname"].value;
  var departdt = document.forms["myForm2"]["Departure date"].value;
  var retundate = document.forms["myForm2"]["Return date"].value;
  var emailid = document.forms["myForm6"]["Mobile No"].value;
  var mobileid = document.forms["myForm6"]["Email"].value;

  if (radio1 == false && radio2 == false){
     errors.push("Please select either one way or round trip")
  }
  if (src == ""){
     errors.push("origin can't be blank")
  }
  if (dest == ""){
     errors.push("destination can't be blank")
  }
  if (departdt == ""){
     errors.push("departure date can't be blank")
  }
  if (retundate == "" && radio2 == true){
     errors.push("return date is required as you selected round trip")
  }
  if (emailid == ""){
     errors.push("Email id is required")
  }
  if (mobileid == ""){
     errors.push("Mobile number is required")
  }
  if (child != "" && child.length < 6){
     errors.push("Child's first name should be more than 5 characters")
  }
  if (passanger1 != "" && passanger1.length < 6){
     errors.push("Passanger1 first name should be more than 5 characters")
  }
  if (passanger2 != "" && passanger2.length < 6){
     errors.push("Passanger2 first name should be more than 5 characters")
  }
  var messages = "";
  for(var i=0; i<errors.length;i++){
    messages += errors[i]+ "\n";
   }
alert(messages)
}