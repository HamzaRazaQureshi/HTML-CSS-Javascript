function sayhello() {
    var name = document.getElementById("name").value;
    var msg = "<h2>Hello " + name + "!<h2>";

    document.getElementById("content").innerHTML = msg;

    if (name === "hamza"){
        var title = document.querySelector("#title").textContent;
        title += " with " + name;
        document.querySelector("#title").textContent = title;
    }
}