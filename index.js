document.addEventListener("DOMContentLoaded", () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(this.responseText, "text/xml");
            var textTag = xmlDoc.getElementsByTagName("text");
            var body = document.body;

            function addNewChild(parent, child, id) {
                var childElem = document.createElement(child);
                childElem.setAttribute("id", id);
                parent.appendChild(childElem);
                return childElem;
            }

            var counter1 = 0;

            class TextElem {
                constructor() {
                    this.elem = addNewChild(body, "p", `p${counter1 += 1}`);
                }
            }

            function newClass(className, varName) {
                window[varName] = new window[className]();
            }

            newClass("TextElem", "text");
            text.elem.innerHTML = textTag[counter1].childNodes[0].nodeValue;
        }
    };
    xhttp.open("GET", "index.xml", true);
    xhttp.send();
});
