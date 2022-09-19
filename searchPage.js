studDetails = JSON.parse(localStorage.getItem("details"));

function search(){
    displaySearch = document.getElementById('disp');
    // displaySearch.innerHTML+= "";
    searchIndex = searchindex.value;
    // console.log(searchindex.value);
    result = "<tr><td>"+studDetails[searchIndex].randomNumber + "</td><td>"+ studDetails[searchIndex].firstName+ "</td><td>"+ studDetails[searchIndex].lastName +"</td><td>"+ studDetails[searchIndex].email + "</td><td>"+studDetails[searchIndex].myDate+"</td></tr>"
    displaySearch.innerHTML = result;

    displaySearch.style.color = "green";
    searchindex.value ="";
    
}
function Back(){
    // alert("I dey work")
    window.location = "displayPage.html"
}
function logOut(){
    window.location.href = "./signIn/signIn.html";
}