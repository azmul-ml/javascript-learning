function fun () {
    console.log("fun called...");
    setTimeout(function () {
        console.log("fun settimeout after 5 sec");
    }, 5000);
}

console.log("execution started");
setTimeout(fun, 5000);