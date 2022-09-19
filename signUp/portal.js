var studentList= [];
if(localStorage.details){
    studentList= JSON.parse(localStorage.getItem('details'));
}
function addStudent(){
    if(firstname.value == "" || lastname.value == "" || useremail.value == "" || userpassword == ""){
        alert("Kindly supply your details completely!")
    }
    else{
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
}