var studentList= [];
if(localStorage.details){
    studentList= JSON.parse(localStorage.getItem('details'));
}
function addStudent(){
    let regForEmail = /^(([\w]+)(@)([\w]+)([.])([a-zA-Z]{1,5})([.]{1,5})?)$/
    let regForPassword = /^([\w]{8,})$/
    if(firstname.value == "" || lastname.value == "" || useremail.value == "" || userpassword == ""){
        alert("Kindly supply your details completely!")
    }
    else if(regForEmail.test(useremail.value)&& regForPassword.test(userpassword.value)){
        var newStudent = {
            randomNumber : "SQ"+Math.round(Math.random()*1000001),
            firstName: firstname.value,
            lastName: lastname.value,
            email: useremail.value,
            password: userpassword.value,
            myDate : new Date()
        }
        studentList.push(newStudent);
        console.log(studentList)
        localStorage.setItem("details",JSON.stringify(studentList));
        // console.log()
        alert("congratulations! your details has been stored successfully.")
        firstname.value = "";
        lastname.value = "";
        useremail.value ="";
        userpassword.value = "";
        window.location ='../signIn/signIn.html';
        
    }
    else{
        alert("Invalid Email or too weak Password!")
    }
}