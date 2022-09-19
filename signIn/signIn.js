studentList = JSON.parse(localStorage.getItem('details'));
console.log(studentList);
var found = false;
var regForEmail = '^(([\w]+)(@)([\w]+)([.])([a-zA-Z]{1,5})([.]{1,5})?)$'
function signIn(){
    console.log(studentList[0].email);
    // alert("i dey work!")
    if(useremail.value == ""&& userpassword.value == ""){
        alert("kindly provide your email and password!");
    }else{
        if(){
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
            }else{
                alert("Incorrect Email or password")
            }  
        }
       
    }
   
}