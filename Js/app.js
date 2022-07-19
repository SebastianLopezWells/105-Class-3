//creat the constructor
class User {
    id=0;
    constructor(fname, lname, age, address, email, password, payMethod) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
        this.email = email;
        this.password = password;
        this.payMethod = payMethod;
        this.id++;
    }
}
function isValid(newUser) {
    let valid=true;
    /*
    if(newUser.fname=="" || newUser.lname=="" || newUser.age=="" || newUser.address==""||newUser.email=="" || newUser.password=="" || newUser.payMethod==){//is not empty?
        valid=false;
        console.log("valid = false");
    }
    return valid;*/
    if(newUser.fname.length==0){
        valid=false;
        $("#txtName").addClass("error-input");
        console.error("Please enter a valid first name");
    }
    if(newUser.fname.length==0){
        valid=false;
        $("#txtLastName").addClass("error-input");
        console.error("Please enter a valid last name");
    }
    if(newUser.age.length==0){
        valid=false;
        $("#txtAge").addClass("error-input");
        console.error("Please enter a valid age");
    }
    if(newUser.address.length==0){
        valid=false;
        $("#txtAddress").addClass("error-input");
        console.error("Please enter a valid address");
    }
    if(newUser.email.length==0){
        valid=false;
        $("#txtEmail").addClass("error-input");
        console.error("Please enter a valid email");
    }
    if(newUser.password.length==0){
        valid=false;
        $("#txtPassword").addClass("error-input");
        $("#txtPasswordCom").addClass("error-input");
        console.error("Please enter a valid password");
    }
    return valid;
}
//create the registration fucntion
function register(){
    
    //get values from the imputs
    /*
    let name = document.getElementById("txtName").value;
    let lname = document.getElementById("txtLastName").value;
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;
    let payMethod = document.getElementById("txtPayment").value;*/
    let name = $("#txtName").val();
    let lname = $("#txtLastName").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let payMethod = $("#txtPayment").val();

    //create the obj
    let user = new User(name,lname, age, address,email,password,payMethod);
    if(isValid(user)) {
        console.log("Working");
        //display the users on the console
        console.log(user);
        saveUser(user);
    }
    else{
        console.log(" Not Working");
    }
}

function clearInput(){
    
    $("#txtName").val("");
    $("#txtLastName").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtPasswordCom").val("");
    $("#txtPayment").val($("#op0").val());
}
/*
function hiding() {
    if($("#usersArch").val();=="USERS"){
        $("#index").hide();
    }
    else{
        console.log("errror");
    }
    
}*/

function hideForm(id){
$("#hideForm").on("click", function(){
        $("#userForm").slideUp(3000);
    })
}
function showForm(id){
    $("#newUser").on("click", function(){
        $("#userForm").slideDown(3000);
    })
}

function init(){
      //hook events
    $("#userForm").hide();

      //hide the user form
}
window.onload = init;