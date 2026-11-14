function changeText() {
    let element = document.getElementById("message");
    element.innerHTML = "Clicked from JavaScript";
    window.alert();
    if (response) {
        element.innerHTML = "Clicked OK";
    }
}


document.getElementById("big-btn").addEventListener("click", changeText);


