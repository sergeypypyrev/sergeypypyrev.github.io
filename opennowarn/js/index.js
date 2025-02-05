function openApp() {
    let app = open("app.html");
    setTimeout(() => app.location.href =
        "https://developer.mozilla.org/en-US/docs/Web/API/Window/open#description",
        5000);
}

function openWithout(event) {
    event.preventDefault();
    // новые окна открываются без подтверждения, если открывающий код находится в
    // обработчике события, активированного пользователем
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/open#description
    openApp();
}

function openWith(event) {
    event.preventDefault();
    // в этом случае окно тоже открывается без подтверждения
    setTimeout(openApp, 1);
}

function init() {
    document.getElementById("without").addEventListener("click", openWithout, false);
    // но это событие не было активировано пользователем, поэтому по умолчанию новое окно
    // будет заблокировано
    setTimeout(openApp, 5000);
}

document.addEventListener("DOMContentLoaded", init, false);
