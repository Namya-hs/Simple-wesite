function validation(){
    var username = document.getElementById('exampleInputName').value;
    var email = document.getElementById('exampleInputEmail').value;
    var number = document.getElementById('exampleInputNumber').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var cpassword= document.getElementById('exampleInputPassword2').value;

    var usercheck = /^[A-Za-z ]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]$/;

    if (usercheck.test(username)){
        document.getElementById('errorname').innerHTML = " ";
    }
    else{
        document.getElementById('errorname').innerHTML = "Please use only Alphabets";
        return false;
    }

    if (emailcheck.test(email)){
        document.getElementById('errormail').innerHTML = " ";
    }
    else{
        document.getElementById('errorname').innerHTML = "Please follow the valid email syntax";
        return false;
    }

    if (numbercheck.test(number)){
        document.getElementById('errornumber').innerHTML = " ";
    }
    else{
        document.getElementById('errornumber  ').innerHTML = "Invalid Number";
        return false;
    }

    if (passwordcheck.test(password)){
        document.getElementById('errorpassword').innerHTML = " ";
    }
    else{
        document.getElementById('errorpassword').innerHTML = "Enter a valid password";
        return false;
    }

    if (cpassword.match(password)){
        document.getElementById('errorcpassword').innerHTML = " ";
    }
    else{
        document.getElementById('errorcpassword').innerHTML = "Password is not matching";
        return false;
    }
}

function close1(){
    document.getElementById('exampleModal').style.display='none';
}