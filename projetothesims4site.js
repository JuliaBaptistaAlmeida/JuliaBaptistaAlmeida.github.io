// Listas
const generos = ['Masculino', 'Feminino'];

const criaturas = [
    'Humano', 'Vampiro', 'Sereia', 'Fada', 'Feiticeiro', 'Lobisomem', 'Alien'
];

const idades = [
    'Bebê de Colo', 'Bebê', 'Criança', 'Adolescente', 'Jovem Adulto', 'Adulto', 'Idoso'
];

const tracos_bebedecolo = ['Agitado', 'Calmo', 'Cauteloso', 'Intenso', 'Sensível', 'Vibrante'];

const tracos_bebe = [
    'Angelical', 'Bobo', 'Curioso', 'Encantador', 'Grudento', 'Incansável',
    'Independente', 'Irritável'
];

const tracos_crianca = [
    'A Pratica Leva À Perfeição', 'Alegre', 'Cabeça Quente', 'Criativo'
];

const tracos_adultos = [
    'Alegre', 'Ambicioso', 'Criativo', 'Genial', 'Romântico', 'Solitário'
];

const pets = ['Cachorro', 'Gato', 'Cavalo'];
const sexo_pet = ['Macho', 'Fêmea'];
const idades_pet = ['Filhote', 'Adulto', 'Idoso'];

const cidades = [
    'Willow Creek', 'Oasis Springs', 'San Myshuno'
];

// Conflitos
const conflitos_tracos = [
    ['Alegre', 'Cabeça Quente'],
    ['Ambicioso', 'Preguiçoso']
];

// Funções
function choice(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function sample(lista, quantidade) {
    const copia = [...lista];
    const resultado = [];

    for (let i = 0; i < quantidade; i++) {
        const index = Math.floor(Math.random() * copia.length);
        resultado.push(copia.splice(index, 1)[0]);
    }

    return resultado;
}

function temConflito(tracos) {
    return conflitos_tracos.some(conflito =>
        conflito.every(t => tracos.includes(t))
    );
}

function sortearTracosPessoa(idade) {
    if (idade === 'Bebê de Colo') return sample(tracos_bebedecolo, 1);
    if (idade === 'Bebê') return sample(tracos_bebe, 1);
    if (idade === 'Criança') return sample(tracos_crianca, 2);
    return sample(tracos_adultos, 3);
}

function sortearTracosSemConflito(idade) {
    let tracos;
    do {
        tracos = sortearTracosPessoa(idade);
    } while (temConflito(tracos));

    return tracos;
}

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

function criarFamilia(qtd) {
    while (true) {
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
