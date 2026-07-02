function showMessage() {

    let email = document.querySelector("input").value;

    if(email === "") {
        alert("Please enter your email!");
    }
    else {
        alert("Welcome to Netflix Clone!");
    }
}