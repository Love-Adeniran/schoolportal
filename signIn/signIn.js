studentList = JSON.parse(localStorage.getItem('details'));
console.log(studentList);
var found = false;
function signIn(){
    if(useremail.value == ""&& userpassword.value == ""){
        alert("kindly provide your email and password!");
    }
    else {
        alert('Hi')
            for(i = 0; i<studentList.length; i++){
                if(useremail.value == studentList[i].email && userpassword.value == studentList[i].password){
                    console.log(useremail.value);
                    found = true;
                    break;
                }
    
            }
            if(found==true){
                alert("login Successful!");
                window.location = "../displayPage.html";
                useremail.value ="";
            }
            else{
                alert("Incorrect Email or password")
            }  
        }
       
}
