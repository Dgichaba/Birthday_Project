// function submitForm()
function myFunc() {
    var dob=$("#birthday").val();
    var gender= $('input[name=gender]:checked', '#form1').val();
    
    var dobparts = dob.split("-");
    var DD = parseInt(dobparts[2]);
    var MM = parseInt(dobparts[1]);
    var year = dobparts[0];
    var YY = parseInt(year.slice(2,4));
    var CC = parseInt(year.slice(0,2));
    
    /**
     * Formula to get the day of the week
     */
    var day=(((CC/4)-1*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7

    day=Math.floor(day)

    if(gender==="male"){
        const name = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

        document.getElementById("response").innerHTML="Your akan name is: " + name[day];

    }else if(gender==="female"){
        const name = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
        document.getElementById("response").innerHTML="Your akan name is: " + name[day];
    }
}