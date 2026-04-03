// Características
const generos = ['Masculino', 'Feminino'];

const criaturas = [
    'Humano', 'Vampiro', 'Sereia', 'Fada', 'Feiticeiro', 'Lobisomem', 'Alien'
];

const idades = [
    'Bebê de Colo', 'Bebê', 'Criança', 'Adolescente', 'Jovem Adulto', 'Adulto', 'Idoso'
];

//Traços
const tracos_bebedecolo = ['Agitado', 'Calmo', 'Cauteloso', 'Intenso', 'Sensível', 'Vibrante'];

const tracos_bebe = [
    'Angelical', 'Bobo', 'Curioso', 'Encantador', 'Grudento', 'Incansável', 'Independente', 'Irritável'
];

const tracos_crianca = [
    'A Pratica Leva À Perfeição', 'Alegre', 'Cabeça Quente', 'Criativo', 'Errático', 'Genial', 'Nauseento', 'Pateta', 'Seguro de Si', 'Soturno', 'Adora o Ar Livre', 'Amante da Arte', 'Amante da Música', 'Devorador de Livros', 'Geek', 'Reciclador', 'Amigo da Natureza', 'Asseado', 'Ativo', 'Aventureiro', 'Cleptomaníaco', 'Competitivo', 'Filho da Ilha', 'Filho do Oceano', 'Glutão', 'Intolerante à Lactose', 'Perfeccionista', 'Preguiçoso', 'Provinciano', 'Relaxado', 'Vegetariano', 'Amante de Cavalos', 'Amante de Cachorros', 'Amante de Gatos', 'Amante de Plantas', 'Bondoso', 'Engajado', 'Extrovertido', 'Fã de Animais', 'Maldoso', 'Maligno', 'Respeitoso', 'Solitário'
];

const tracos_adolescente = [
    'A Pratica Leva À Perfeição', 'Alegre', 'Cabeça Quente', 'Criativo', 'Desajeitado', 'Errático', 'Exigente', 'Genial', 'Infantil', 'Nauseento', 'Não Paquerador', 'Paranoico', 'Pateta', 'Romanticamente Reservado', 'Romântico', 'Seguro de Si', 'Sentimental', 'Soturno', 'Adora o Ar Livre', 'Amante da Arte', 'Amante da Música', 'Criador', 'Devorador de Livros', 'Gastrônomo', 'Geek', 'Máquina de Dança', 'Reciclador', 'Além das Expectativas', 'Amigo da Natureza', 'Asseado', 'Ativo', 'Aventureiro', 'Cleptomaníaco', 'Competitivo', 'Cético', 'Filho da Ilha', 'Filho do Oceano', 'Freegano', 'Glutão', 'Incoveniente', 'Intolerante à Lactose', 'Macabro', 'Materialista', 'Místico', 'Perfeccionista', 'Perseguido pela Morte', 'Preguiçoso', 'Provinciano', 'Rancheiro', 'Relaxado', 'Vegetariano', 'Amante de Cavalos', 'Amante de Cachorros', 'Amante de Gatos', 'Amante de Plantas', 'Benevolente', 'Bondoso', 'Chegado', 'Ciumento', 'Desonesto', 'Egocêntrico', 'Engajado', 'Esnobe', 'Extrovertido', 'Fã de Animais', 'Grande Festeiro', 'Idealista', 'Leal', 'Maldoso', 'Maligno', 'Odeia Crianças', 'Respeitoso', 'Sem Noção', 'Socialmente Desconfortável', 'Solitário', 'Xereta'
];

const tracos_adultos = [
    'A Pratica Leva À Perfeição', 'Alegre', 'Ambicioso', 'Cabeça Quente', 'Criativo', 'Desajeitado', 'Errático', 'Exigente', 'Genial', 'Infantil', 'Nauseento', 'Não Paquerador', 'Paranoico', 'Pateta', 'Romanticamente Reservado', 'Romântico', 'Seguro de Si', 'Sentimental', 'Soturno', 'Adora o Ar Livre', 'Amante da Arte', 'Amante da Música', 'Criador', 'Devorador de Livros', 'Gastrônomo', 'Geek', 'Máquina de Dança', 'Reciclador', 'Além das Expectativas', 'Amigo da Natureza',
    'Asseado', 'Ativo', 'Aventureiro', 'Cleptomaníaco', 'Competitivo', 'Cético', 'Filho da Ilha', 'Filho do Oceano', 'Freegano', 'Glutão', 'Incoveniente', 'Intolerante à Lactose', 'Macabro', 'Materialista', 'Místico', 'Perfeccionista', 'Perseguido pela Morte', 'Preguiçoso', 'Provinciano', 'Rancheiro', 'Relaxado', 'Vegetariano', 'Amante de Cavalos', 'Amante de Cachorros', 'Amante de Gatos', 'Amante de Plantas', 'Benevolente', 'Bondoso', 'Chegado', 'Ciumento', 'Desonesto',
    'Egocêntrico', 'Engajado', 'Esnobe', 'Evasivo', 'Extrovertido', 'Familiar', 'Fã de Animais', 'Grande Festeiro', 'Idealista', 'Leal', 'Maldoso', 'Maligno', 'Odeia Crianças', 'Respeitoso', 'Sem Noção', 'Socialmente Desconfortável', 'Solitário', 'Xereta'
];

const pets = ['Cachorro', 'Gato', 'Cavalo'];
const sexo_pet = ['Macho', 'Fêmea'];
const idades_pet = ['Filhote', 'Adulto', 'Idoso'];

const tracos_cachorro = [
    'Agressivo', 'Amigável', 'Arisco', 'Ativo', 'Aventureiro', 'Brincalhão', 'Caçador', 'Conversador', 'Encrenqueiro', 'Glutão', 'Independente', 'Inteligente', 'Investigador', 'Leal', 'Náufrago do Sofá', 'Peludo', 'Teimoso'
];

const tracos_gato = [
    'Amigável', 'Animado', 'Arisco', 'Arredio', 'Brincalhão', 'Carinhoso', 'Curioso', 'Esperto', 'Espírito Livre', 'Falador', 'Felpudo', 'Gatuno', 'Glutão', 'Mimado', 'Preguiçoso', 'Territorial', 'Travesso'
];

const tracos_cavalo = [
    'Agressivo', 'Amigável', 'Elétrico', 'Espírito Livre', 'Grudento', 'Independente', 'Inteligente', 'Medroso', 'Rebelde', 'Tranquilo', 'Valente'
];

// Cidades
const cidades = [
    'Willow Creek', 'Oasis Springs', 'San Myshuno', 'Windenburg', 'Brindleton Bay', 'Del Sol Valley', 'Sulani', 'Strangerville', 'Henford-on-Bagley', 'Moonwood Mill', 'Copperdale'
];

// Conflitos
const conflitos_tracos = [
    ['Alegre', 'Cabeça Quente'], ['Alegre', 'Soturno'], ['Alegre', 'Macabro'], ['Ambicioso', 'Freegano'],['Ambicioso', 'Preguiçoso'], ['Cabeça Quente', 'Soturno'], ['Desajeitado', 'Criador'], ['Infantil', 'Esnobe'], ['Infantil', 'Maligno'], ['Infantil', 'Odeia Crianças'], ['Nauseento', 'Adora o Ar Livre'], ['Nauseento', 'Freegano'], ['Nauseento', 'Glutão'], ['Nauseento', 'Relaxado'], ['Não Paquerador', 'Romanticamente Reservado'], ['Não Paquerador', 'Romântico'], ['Não Paquerador', 'Sentimental'], ['Paranoico', 'Extrovertido'], ['Pateta', 'Esnobe'], ['Romanticamente Reservado', 'Romântico'], ['Romanticamente Reservado', 'Sentimental'], ['Romanticamente Reservado', 'Extrovertido'], ['Sentimental', 'Solitário'], ['Criador', 'Preguiçoso'], ['Gastrônomo', 'Freegano'], ['Cético', 'Macabro'], ['Cético', 'Místico'], ['Competitivo', 'Preguiçoso'], ['Asseado', 'Preguiçoso'], ['Asseado', 'Relaxado'], ['Ativo', 'Preguiçoso'], ['Filho da Ilha', 'Provinciano'], ['Cleptomaníaco', 'Bondoso'], ['Freegano', 'Materialista'], ['Freegano', 'Esnobe'], ['Glutão', 'Benevolente'], ['Incoveniente', 'Macabro'], ['Incoveniente', 'Místico'], ['Incoveniente', 'Respeitoso'], ['Macabro', 'Místico'], ['Materialista', 'Benevolente'], ['Místico', 'Perseguido pela Morte'], ['Vegetariano', 'Amante das Plantas'], ['Relaxado', 'Respeitoso'], ['Benevolente', 'Maldoso'], ['Benevolente', 'Maligno'], ['Bondoso', 'Maldoso'], ['Bondoso', 'Maligno'], ['Desonesto', 'Idealista'], ['Engajado', 'Solitário'], ['Evasivo', 'Familiar'], ['Evasivo', 'Leal'], ['Extrovertido', 'Solitário'], ['Extrovertido', 'Socialmente Desconfortável'], ['Familiar', 'Odeia Crianças'], ['Grande Festeiro', 'Solitário'], ['Maldoso', 'Respeitoso'], ['Respeitoso', 'Sem Noção'], ['Grande Festeiro', 'Socialmente Desconfortável'], ['Agressivo', 'Amigável'], ['Elétrico', 'Tranquilo'], ['Grudento', 'Independente'], ['Medrosa', 'Valente'], ['Ativo', 'Náufrago do Sofá'], ['Independente', 'Leal'], ['Territorial', 'Amigável'], ['Animado', 'Preguiçoso'], ['Arredio', 'Carinhoso']
];

// Função de Escolher Coisa Únicas
function choice(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

// Função de Escolher os Traços sem Repetir
function sample(lista, quantidade) {
    const copia = [...lista];
    const resultado = [];

    for (let i = 0; i < quantidade; i++) {
        const index = Math.floor(Math.random() * copia.length);
        resultado.push(copia.splice(index, 1)[0]);
    }

    return resultado;
}

// Função de Garantir que não Tenha conflitos
function temConflito(tracos) {
    return conflitos_tracos.some(conflito =>
        conflito.every(t => tracos.includes(t))
    );
}

// Função de Sortear os Traços
function sortearTracosPessoa(idade) {
    if (idade === 'Bebê de Colo') return sample(tracos_bebedecolo, 1);
    if (idade === 'Bebê') return sample(tracos_bebe, 1);
    if (idade === 'Criança') return sample(tracos_crianca, 2);
    if (idade === 'Adolescente') return sample (tracos_adolescente, 3);
    return sample(tracos_adultos, 3);
}

// Função de Sortear os Traços sem Conflito
function sortearTracosSemConflito(idade) {
    let tracos;
    do {
        tracos = sortearTracosPessoa(idade);
    } while (temConflito(tracos));

    return tracos;
}

// Função de cria um Integrante
function criarIntegrante() {
    const tipo = choice(['Pessoa', 'Pet']);

    if (tipo === 'Pessoa') {
        const genero = choice(generos);
        const criatura = choice(criaturas);
        const idade = choice(idades);
        const tracos = sortearTracosSemConflito(idade);

        return {
            tipo: 'Pessoa',
            sexo: genero,
            raca: criatura,
            idade,
            tracos
        };
    } else {
        return {
            tipo: 'Pet',
            raca: choice(pets),
            sexo: choice(sexo_pet),
            idade: choice(idades_pet),
            tracos: ['Fofo', 'Brincalhão']
        };
    }
}

//Função de Criar família Garantindo que Tenha pelo menos um Adulto
function criarFamilia(qtd) {
    let tentativas = 0;

    while (tentativas < 100) {
        tentativas++;

        const familia = [];

        for (let i = 0; i < qtd; i++) {
            familia.push(criarIntegrante());
        }

        const temAdulto = familia.some(m =>
            m.tipo === 'Pessoa' &&
            ['Jovem Adulto', 'Adulto', 'Idoso'].includes(m.idade)
        );

        if (temAdulto) return familia;
    }
}

// Botão Gerar Família
function botaogerar() {
    let qtd = parseInt(document.getElementById("numero").innerText);
    let resultado = document.getElementById("resultado");

    let familia = criarFamilia(qtd);
    let cidade = choice(cidades);

    let html = `
        <h3>
        🌆 <span class="verde">Cidade:</span> 
        <span class="branco">${cidade}</span>
        </h3>`;

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
