function sendContact() {
    var valid;	
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
            /*url:("C:/Users/User/Desktop/Firma/Bujalla/js/contact.php"),*/
            data:'userName='+$("#userName").val()+'&userEmail='+
            $("#userEmail").val()+'&subject='+
            $("#subject").val()+'&content='+
            $(content).val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
            },
            error:function (){}
        });
    }
}

function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var error = "";

    if (name == "") {
        error += "Please enter your name.\n";
    }

    if (email == "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n";
    }

    if (message == "") {
        error += "Please enter a message.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
