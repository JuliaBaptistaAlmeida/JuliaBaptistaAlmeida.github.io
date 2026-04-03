let valor = 1;

function aumentar() {
    let numero = document.getElementById("numero");

    if (valor < 8) {
        valor++;
        numero.innerText = valor;
    }
}

function diminuir() {
    let numero = document.getElementById("numero");

    if (valor > 1) {
        valor--;
        numero.innerText = valor;
    }
}

function alternarMenu() {
    let menu = document.getElementById("menu-lateral");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
