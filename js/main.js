const alunos = [
    {nome:"Andriele", foto:"/img/Andriele.jpeg"},
    {nome:"Bianca", foto:"/img/Bianca.jpeg"},
    {nome:"Carlos Eduardo", foto:"/img/CarlosEduardo.png"},
    {nome:"Eduardo Meireles", foto:"/img/Dudu Meireles.jpg"},
    {nome:"Elane", foto:"/img/Elane.jpeg"},
    {nome:"Elizeu", foto:"/img/Eliseu.jpeg"},
    {nome:"Emanoella", foto:"/img/Emanuelly.jpeg"},
    {nome:"Francisco Kauan", foto:"/img/Francisco Kauan.webp"},
    {nome:"Francisco Veras", foto:"/img/FranciscoV.jpeg"},
    {nome:"Felipe Gabriel", foto:"/img/FelipeD.jpeg"},
    {nome:"Maria Geovana", foto:"/img/Geovanaportela11 Portela.jpg"},
    {nome:"Maria Ilana", foto:"/img/Ilana.jpeg"},
    {nome:"Ingrid", foto:"/img/Ingrid Geovana.jpeg"},
    {nome:"Kaio Douglas", foto:"/img/KaioD.jpeg"},
    {nome:"Janilton", foto:"/img/Janilton.jpeg"},
    {nome:"Jardel", foto:"/img/Jardel Da silva sousa.jpg"},
    {nome:"João José", foto:"/img/JoaoJ.jpeg"},
    {nome:"Lyvia", foto:"/img/Livia.jpeg"},
    {nome:"Maria Luara", foto:"/img/Luara Franca.jpeg"},
    {nome:"Maisa Geovana", foto:"/img/Maisa Aguiar.jpeg"},
    {nome:"Manoel Miguel", foto:"/img/ManoelM.jpeg"},
    {nome:"Paulina", foto:"/img/Paulina Silva.jpg"},
    {nome:"Railan", foto:"/img/Railan Silva.jpg"},
    {nome:"Rondinei Mesquita", foto:"/img/Rondinei Mesquita.webp"},
    {nome:"Silmara", foto:"/img/Silmara Oliveira.jpg"},
    {nome:"Stefhany", foto:"/img/Stefhany Costa.png"},
    {nome:"Vitor Emanoel", foto:"/img/Vitor Emanoel.png"},
    {nome:"William Gomes", foto:"/img/William Gomes.jpg"},
    {nome:"William Silva Meireles", foto:"/img/William Silva Meireles.webp"},
    
];

const galeria = document.getElementById("galeria");

alunos.forEach(aluno=>{
    galeria.innerHTML += `
        <div class="card">
            <img src="${aluno.foto}" alt="${aluno.nome}">
            <p>${aluno.nome}</p>
        </div>
    `;
});