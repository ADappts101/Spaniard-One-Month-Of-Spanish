document.addEventListener("DOMContentLoaded", () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(this.responseText, "text/xml");
            var text = xmlDoc.getElementsByTagName("text");
            var body = document.body;
            var html = document.documentElement;
            
            function adNeCh(parent, child, id){
                document.createElement(child);
                child.setAttribute("id", id);
                parent.appendChild(child);
            }

            counter1 = 0;
            counter2 = 1;
            class TextElem() {
                constructor(elem){
                    this.elem = adNeCh(body, "p", `p${counter1+=1}`);
                    return this.elem;
                }
            }
            document.getElementById(`p${counter1}`).innerHTML = text[counter1].childNodes[0].nodeValue;
        }
    };
    xhttp.open("GET", "index.xml", true);
    xhttp.send();
});

