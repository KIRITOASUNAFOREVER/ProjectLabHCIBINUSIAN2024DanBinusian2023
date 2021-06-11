function formValidation() {
    var username = new String(document.forms["form1"]["username"].value);
    var password = new String(document.forms["form1"]["password"].value);
    var address = new String(document.forms["form1"]["address"].value);
    var email = new String(document.forms["form1"]["email"].value);
    
    

    

    //validate username
    if (username.length < 1) {
        window.alert("Username must be filled!");
        return false;
    } else if (username.length < 5) {
        window.alert("Username must contain at least 5 characters!");
        return false;
    }

    //validate email
    else if (email.length < 1) {
        window.alert("Email must be filled!");
        return false;
    }

    //validate password
    else if (password.length < 1) {
        window.alert("Password must be filled!");
        return false;
    } else if (password.length < 6) {
        window.alert("Password must contain at least 6 characters!");
        return false;
    }

    //validate address
    else if (address.length < 10) {
        window.alert("Address must contain at least 10 characters!");
        return false;
    }


    window.alert("Your order has been placed");

    return true;
}

