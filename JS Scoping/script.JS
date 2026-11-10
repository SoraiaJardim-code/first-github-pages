let name = null;
function SayMyName(givenName) {
    name = givenName;
    console.log(name);
}

function greetSomeone() {
    console.log("Hello", name);
}

SayMyName("Filipe");
greetSomeone();