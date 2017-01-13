
$("document").ready(function (e) {
{ 
   //var text = localStorage.getItem("dataJSON");
//var obj = JSON.parse(text);
var obj = JSON.parse(localStorage.getItem("dataJSON"));   
$('#first1').val(obj.firstname);
$('#last').val(obj.lastname);
$('#phone').val(obj.phone);
$('#email').val(obj.email);
$('#father').val(obj.father);
$('#mother').val(obj.mother);
$('#marital').val(obj.marital);
$('#spouse').val(obj.spouse);
$('#company').val(obj.company);
$('#desi').val(obj.designation);

$('#gender').val(obj.gender);
var date1 = new Date()
var Year = date1.getFullYear();
var birtYear=(obj.date).substring(6,(obj.date).length);
var age1=Year-birtYear;

$('#age').val(age1);
var newImage = document.createElement('img');
        newImage.src = obj.image;
document.getElementById("image1").innerHTML = newImage.outerHTML;
       //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);

}
});