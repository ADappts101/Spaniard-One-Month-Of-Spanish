document.addEventListener("DOMContentLoaded", () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(this.responseText, "text/xml");
            var textTag = xmlDoc.getElementsByTagName("text");
            var chapterTag = xmlDoc.getElementsByTagName("chapter");
            var body = document.body;

            function addNewChild(parent, child, id) {
                var childElem = document.createElement(child);
                childElem.setAttribute("id", id);
                parent.appendChild(childElem);
                return childElem;
            }

            var counter1 = 0;
            var counter2 = 1;

            class TextElem {
                constructor() {
                    this.elem = addNewChild(body, "p", `p${counter2++}`);
                }
            }

            class ChapterElem {
                constructor() {
                    this.elem = addNewChild(body, "div", `chapter${counter2++}`);
                }
            }

            var text = new TextElem();
            text.elem.innerHTML = textTag[counter1].childNodes[0].nodeValue;

            // Process chapterTag
            for (let i = 0; i < chapterTag.length; i++) {
                let items = chapterTag[i].getElementsByTagName("item");

                let chapter = new ChapterElem();
                for (let j = 0; j < items.length; j++) {
                    let itemName = items[j].getAttribute("Name");
                    let itemPageNo = items[j].getAttribute("PgNo.");
                    let itemChNo = chapterTag[i].getAttribute("ChNo.");

                    // Do something with the attributes, for example, create a new paragraph
                    let itemParagraph = addNewChild(chapter.elem, "p", `item${counter2++}`);
                    itemParagraph.innerHTML = `${itemChNo}: ${itemName} - Page ${itemPageNo}`;
                }
            }
        }
    };
    xhttp.open("GET", "index.xml", true);
    xhttp.send();
});
