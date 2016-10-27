var Name = document.getElementById("idTxtName").value;
var Birth = document.getElementById("idDOB").value;
var Job = document.getElementById("idJob").value;
var State = document.getElementById("idState").value;
var City = document.getElementById("idCity").value;
var Address = document.getElementById("idStAd").value;
var Zip = document.getElementById("idZipCode").value;
var Food = document.getElementById("idFood").value;
var Lfood = document.getElementById("idLfood").value;
var Sport = document.getElementById("idSport").value;
var Lsport = document.getElementById("idLsport").value;
var Hobby = document.getElementById("idHobby").value;
function submitAll(){
   var submit = confirm("Did you fill in the entire form?");
   if(submit == true){
       window.alert("Thank You For Filling Out This Form");
   }
   
   else{
       window.alert("Why did you press the submit button?");
   }
}