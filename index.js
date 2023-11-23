document.addEventListener("DOMContentLoaded", () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(this.responseText, "text/xml");
            document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("text")[0].childNodes[0].nodeValue;
        }
    };
    xhttp.open("GET", "index.xml", true);
    xhttp.send();
});

