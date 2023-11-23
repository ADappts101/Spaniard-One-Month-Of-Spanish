document.addEventListener("DOMContentLoaded", () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(this.responseText, "text/xml");
            var text = xmlDoc.getElementsByTagName("text");
            document.getElementById("demo").innerHTML = text[0:text.length].childNodes[0].nodeValue;
        }
    };
    xhttp.open("GET", "index.xml", true);
    xhttp.send();
});

