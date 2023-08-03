//botões para cadastrar, excluir e editar 
let btnEnviar = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[1];
let btnEditar = document.querySelectorAll('#botoes button')[2];

//categorias preenchida pelo usuário
let nome = document.querySelectorAll('#wrap input')[0];
let quantidade = document.querySelectorAll('#wrap input')[1];
let preco = document.querySelectorAll('#wrap input')[2];
let descricao = document.querySelectorAll('#wrap input')[3];
let categoria = document.querySelectorAll('#wrap input')[4];

let tabela = document.querySelector('#saida table');
let BD = [];


//botão cadastrar
btnEnviar.onclick = function(){
    let produto = new Object();
    produto.nome = nome.value;
    produto.quantidade = quantidade.value;
    produto.preco = preco.value;
    produto.descricao = descricao.value;
    produto.categoria = categoria.value;
    produto.id = BD.length;
    BD.push(produto);
    tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.nome}</td><td>${produto.quantidade}</td><td>${preco.value}</td><td>${descricao.value}</td><td>${categoria.value}</td></tr>`;
}


//botão excluir
btnExcluir.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD.splice(elemento.id, 1);
            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quant.</td><td>Preço</td></tr>`;
            montarTabela();
        }
    }
}

//conteudo que será guardado em forma de tabela  e exposto ao usuário
function montarTabela(){
    for (let i = 0; i < BD.length; i++){
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].nome}</td><td>${BD[i].quantidade}</td><td>${BD[i].preco}</td><td>${BD[i].descricao}</td><td>${BD[i].categoria}</td></tr>`;
    }
}


//botão editar
btnEditar.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD[i].nome = nome.value;
            BD[i].quantidade = quantidade.value;
            BD[i].preco = preco.value;

            BD[i].descricao = descricao.value;
            BD[i].categoria = categoria.value;

            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quantidade</td><td>Preço</td><td>Descrição</td</tr>`;
            montarTabela();
        }
    }    
}

function verificar(id){
    let cont = 0;
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            nome.value = BD[i].nome;
            quantidade.value = BD[i].quantidade;
            preco.value = BD[i].preco;
            descricao.value = BD[i].descricao;
            categoria.value = BD[i].categoria;

            cont++;
            if (cont > 1){
                alert('Não é possível selecionar mais de 1 elemento.');
                elemento.checked = false;
                break;
            }
        }
    }
}

