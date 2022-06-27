
function convertToText(response){
    if (response.ok){
        return response.text();
    } else {
        throw new Error('Bad Response');
    }
}
async function loadTemplate(path) {
    const html = await fetch(path).then(convertToText);
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
}

function renderTemplate(template, parent) {
    let clone = template.content.cloneNode(true);
    parent.appendChild(clone);
}

export function qs(selector) {
    return document.querySelector(selector);
}

export async function loadHeaderFooter(){
    const headerDiv = document.getElementById("my-header");
    const header = await loadTemplate("../partials/header.html");
    renderTemplate(header, headerDiv);
    const footerDiv = document.getElementById("my-footer");
    const footer = await loadTemplate("../partials/footer.html");
    renderTemplate(footer, footerDiv);
}