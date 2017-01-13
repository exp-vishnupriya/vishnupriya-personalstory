
var srcData;
function fieldHide() {
    $("#alert1").hide();
    $("#alert2").hide();
    $("#alert3").hide();
    $("#alert4").hide();
    $("#alert5").hide();
    $("#alert6").hide();
    $("#alert7").hide();
    $("#alert8").hide();
    $("#alert9").hide();
    $("#alert10").hide();
}
function imagechange()//image validation and 64baseconvertion
{
    var fileInput = document.getElementById("image").files[0];
	if (fileInput.type.match('image/jpeg') || fileInput.type.match('image/png'))  {
        var filesSelected = document.getElementById("image").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];

      var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64

        var newImage = document.createElement('img');
        newImage.src = srcData;
        
alert(srcData);
       //document.getElementById("imgTest").innerHTML = newImage.outerHTML;
       //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
      }
      fileReader.readAsDataURL(fileToLoad);
    }
    }
else{
  alert("Not a prefered image type")
  return false;
}
}


function myFunction(marital) {
    if ((marital.value) == "SINGLE") {
        $("#spouse").prop('disabled', true);

    }
    else
        $("#spouse").prop('disabled', false);
}
function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}
function Jsonobject(First,Last,Date,Email,Phone,Company,Marital,Father,Mother,Spouse,Designation,Gender,Date1,srcData )
{
    var JSONObj = { "firstname" : First, "lastname"  : Last ,"email":Email,"phone":Phone,"company":Company,"marital":Marital,"father":Father,"mother":Mother,"spouse":Spouse,"designation":Designation,"gender":Gender,"date":Date1,"image":srcData};
		    
         //alert(JSONObj.email);  
         //(JSON.stringify(JSONObj));
       localStorage.setItem("dataJSON",JSON.stringify(JSONObj));

          window.location = "personalstory.html";       
}

$("document").ready(function (e) {
    $("#datepicker-1").datepicker({
        dateFormat: 'dd-mm-yy', maxDate: '0'
    });


    $("#click").click(function () {
        // a.preventDefault();
        // if ($("#myform").valid()) {


        var First = $("#first1").val();
        var Last = $("#last").val();
        var Date = $("#datepicker-1").val();
        var Email = $("#email").val();
        var Phone = $("#phone").val();
        var Company = $("#company").val();
        var Marital = $("#marital").val();
        var Father = $("#father").val();
        var Mother = $("#mother").val();
        var Spouse = $("#spouse").val();
        var Designation = $("#desi").val();
        var Gender=$('input[name=gender]:checked').val();


        if ((First === "") || (Last === "") || (Date === "") || (Email === "") || (Phone === "") || (Company === "") || (Marital === "") || (Father === "") || (Mother === "") || (Designation === "")) {
            if (First === "")//field validations
            {
                $("#alert8").show();
            }
            else {
                $("#alert8").hide();
            }
            if (Last === "") {
                $("#alert9").show();
            }
            else {

                $("#alert9").hide();
            }
            if (Date === "") {
                $("#alert10").show();
            }
            else {
                $("#alert10").hide();
            }
            if (Email === "") {
                $("#alert1").show();
            }
            else {
                $("#alert1").hide();
            }
            if (Phone === "") {
                $("#alert2").show();
            }
            else {
                $("#alert2").hide();
            }
            if (Father === "") {
                $("#alert3").show();
            }
            else {
                $("#alert3").hide();
            }
            if (Mother === "") {
                $("#alert4").show();
            }
            else {
                $("#alert4").hide();
            }
            if (Company === "") {
                $("#alert6").show();
            }
            else {
                $("#alert6").hide();
            }
            if (Designation === "") {
                $("#alert7").show();
            }
            else {
                $("#alert7").hide();
            }
            return false;

        }
        fieldHide();
        if (Marital == "SELECT") {
            alert("Please select marital status");
            return false;
        }
        if (Marital == "MARRIED")//spouse field checking
        {
            if (Spouse == "") {
                $("#alert5").show();
                return false;
            }
        }
        if (!validateEmail(Email)) {              //email validation
            alert("Not a valid email..");
            return false;
        }
        if (Phone.match(/^\d+$/)) {               //phone number validation
            if (Phone.length != 10) {
                alert("Enter a ten digit phone number");
                return false;
            }
        }
        else {
            alert("Enter a valid phone number");
            return false;
        }
        if(!(Father.match(/^[A-Za-z ]+$/))||!(Mother.match(/^[A-Za-z ]+$/))||!(First.match(/^[A-Za-z ]+$/))||!(Last.match(/^[A-Za-z ]+$/)))
        {
         alert("Restricted from numbers and special characters" );
         return false;

        }
        if(Marital == "MARRIED")
        {
         if(!(Spouse.match(/^[A-Za-z ]+$/)))
         {
            alert("Restricted from numbers and special characters in spouse name" ); 
            return false;
         }
        }

      
        Jsonobject(First,Last,Date,Email,Phone,Company,Marital,Father,Mother,Spouse,Designation,Gender,Date,srcData );
          $('#myform').trigger('reset');
        
    });
});
