const route = (event) => {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    404: "/notes/404.html",
    "/ajax": "/notes/ajax.html",
    "/forms": "/notes/forms.html",
    "/func": "/notes/func.html",
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("notes-div").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();