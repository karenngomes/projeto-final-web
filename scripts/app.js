const API_URL = "https://breakingbadapi.com/api/characters";

let dados = [];

let mainContentDiv = document.getElementById('main-content');

function criaCard(dado) {
    let col = document.createElement('div');
    col.setAttribute("class", "col-md-3 col-card");

    let divCard = `
        <div class="card">
            <img class="card-img-top" src=${dado.img} />

            <div class="card-body">
                <h6 class="card-title">${dado.name} </h6>
                <small class="card-subtitle"> Interpretador por: ${dado.portrayed}  </small>
            </div>
        </div>
    `

    col.innerHTML = divCard

    return col;
}

function renderizarConteudo(dados) {

    let row, col;
    let i = 0;

    while (i < dados.length) {

        row = document.createElement('div');
        row.setAttribute("class", "row");

        

        /*

        <div id="main-content">
        <div class="row">
            <div class="col-3">
            <div>
            <div class="col-3">
            <div>
            <div class="col-3">
            <div>
            <div class="col-3">
            <div>
        </div>
        <div class="row">
            
        </div>
        </div>
        


        */


        do {
            col = criaCard(dados[i]);
            row.appendChild(col);

            i++;
        } while (!(i % 4 === 0 || i === dados.length ))


        mainContentDiv.appendChild(row);


        
    }


}

async function fecthDados() {
    try {
        let resposta = await fetch(API_URL)
        
        const dadosJson = await resposta.json()

        return dadosJson;
    } catch (err) {

    }
}


async function main() {
    try {
        dados = await fecthDados()

        if(dados.length) {
           // console.log(dados)
            renderizarConteudo(dados);
        }
    }
    catch(err) {
        console.log("erro ao pegar dados em main()")
    }

}


main()