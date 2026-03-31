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

function botaogerar() {
    let qtd = parseInt(document.getElementById("numero").innerText);
    let resultado = document.getElementById("resultado");

    let familia = criarFamilia(qtd); // 🔥 vem do outro JS
    let cidade = choice(cidades);    // 🔥 vem do outro JS

    let html = `<h3 class="verde">🌆 Cidade:</h3><h3><span>${cidade}<span></h3>`;

    familia.forEach((membro, i) => {
        html += `
            <h3 class="verde">${i + 1}º integrante:</h3>
            <p>
            Tipo: ${membro.tipo}<br>
            Raça: ${membro.raca}<br>
            Sexo: ${membro.sexo}<br>
            Idade: ${membro.idade}<br>
            Traços: ${membro.tracos.join(", ")}
            </p>
        `;
    });

    resultado.innerHTML = html;
}