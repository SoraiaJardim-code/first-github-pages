function changeText() {
    let element = document.getElementById("message");
    element.innerHTML = "Clicked from JavaScript";
    window.confirm("Do you want to continue?");
}


document.getElementById("big-btn").addEventListener("click", changeText);


