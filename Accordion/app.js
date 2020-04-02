import * as ___ from './___.min.js'

function createNodeAccordion(data) {
    const li1 = ___.createNode({ tagName: 'li', att: { class: ["accordion__li", "accordion__li--have-sub"] } });
    const a1 = ___.createNode({ tagName: 'a', att: { class: "accordion__link" }, child: `${data.Name}` });
    const li2 = ___.createNode({ tagName: 'li', att: { class: "accordion__li" } });
    const a2 = ___.createNode({ tagName: 'a', att: { class: "accordion__link", href: `Question/craeteprivate/${data.ID}` }, child: "سوال" });
    const li3 = ___.createNode({ tagName: 'li', att: { class: "accordion__li" } });
    const a3 = ___.createNode({ tagName: 'a', att: { class: ["accordion__link", "PrivateChat"] }, child: "چت" });
    const sub = ___.createNode({ tagName: 'ul', att: { class: "accordion__sub" } });
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    sub.appendChild(li2);
    sub.appendChild(li3);
    li1.appendChild(sub);
    li1.addEventListener("click", () => toggleSub(li1));
    return li1;
}

const listAccHavSub = document.querySelectorAll('accordion__li--have-sub');
listAccHavSub.forEach(li=>li.classList.toggle("accordion__li--selected"))

function toggleSub(li) {
    li.classList.toggle("accordion__li--selected");
}

let accordion = document.querySelector(".accordion");

accordion.appendChild(createNodeAccordion({
    Name: "سهیل حسنجانی",
    ID: 7
}));
accordion.appendChild(createNodeAccordion({
    Name: "میلاد حسنجانی",
    ID: 10
}));
accordion.appendChild(createNodeAccordion({
    Name: "محسن خراسانی",
    ID: 8
}));
accordion.appendChild(createNodeAccordion({
    Name: "سهیل حسنجانی",
    ID: 5
}));
