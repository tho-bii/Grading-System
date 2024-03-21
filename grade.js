function getGrade(){
    let yourName = document.getElementById("yourName").value;
    let yourScore = document.getElementById("yourScore").value;

    if (yourScore > 69) {
        alert("Welcome " + yourName + " your grade is Distinction");
        document.getElementById("display").innerHTML = "Welcome " + yourName + " your grade is Distinction"
    } else if (yourScore > 59) {
        alert("Welcome " + yourName + " your grade is Upper Credit");
        document.getElementById("display").innerHTML = "Welcome " + yourName + " your grade is Upper Credit"
    } else if (yourScore > 49) {
        alert("Welcome " + yourName + " your grade is Credit");
        document.getElementById("display").innerHTML = "Welcome " + yourName + " your grade is Credit"
    } else if (yourScore > 44) {
        alert("Welcome " + yourName + " your grade is Pass");
        document.getElementById("display").innerHTML = "Welcome " + yourName + " your grade is pass"
    } else {
        alert("Welcome " + yourName + " your grade is Fail");
        document.getElementById("display").innerHTML = "Welcome " + yourName + " your grade is fail"
    }

}