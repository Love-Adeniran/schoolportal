display = document.getElementById('disp');
form.style.display ="none"
studDetails = JSON.parse(localStorage.getItem("details"));
// console.log(studDetails)
for(i =0; i<studDetails.length; i++){
    result = "<tr>";
    result +=`
    <td>${i+1} </td>
    <td> ${studDetails[i].randomNumber} </td> 
    <td> ${studDetails[i].firstName}</td>
    <td> ${studDetails[i].lastName} </td> 
    <td> ${studDetails[i].email} </td> 
    <td> ${studDetails[i].password} </td> 
    <td>${studDetails[i].myDate} </td>
    <td> 
        <button onclick='del(${i})'>delete</button>
        <button onclick='edit(${i})'>Edit</button>
    </td>`;
    result += "</tr>";
    display.innerHTML += result;
}

function del(line){
studDetails = JSON.parse(localStorage.getItem("details"));
console.log(line)
studDetails.splice(line, 1);
localStorage.setItem("details", JSON.stringify(studDetails))
console.log(result)
display.innerHTML += result
window.location.reload(display.innerHTML)
}


let ind;

function edit(line){
  ind = line;
    form.style.display="block"
    firstname.value = studDetails[line].firstName;
    lastname.value = studDetails[line].lastName;
    useremail.value = studDetails[line].email;
    userpassword.value = studDetails[line].password; 
    console.log(line)
}
function update(){
    var rexStudent = {
        randomNumber : "SQ"+Math.round(Math.random()*1000001),
        firstName: firstname.value,
        lastName: lastname.value,
        email: useremail.value,
        password: userpassword.value,
        myDate : new Date()
    }
    studDetails[ind]=rexStudent

    localStorage.setItem("details", JSON.stringify(studDetails))

    form.style.display = "none";
}
function logOut(){
    window.location.href = "./signIn/signIn.html";
}