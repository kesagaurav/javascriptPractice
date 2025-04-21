function ok(ok) {
    ok.toString().toUpperCase();
    console.log(ok);
    fetch("https://www.google.com").then(res=>res.json()).then(res=>console.log("res")).catch(res=>console.log("hi"));
}

ok("gaurav");