document.getElementById("adicionar").addEventListener("click", adicionarAluno);

function adicionarAluno(event){
    event.preventDefault();
    let nome = document.getElementById("campo_nome").value;
    let nota1 = Number.parseFloat(document.getElementById("nota_aluno_1").value);
    let nota2 = Number.parseFloat(document.getElementById("nota_aluno_2").value);
    let nota3 = Number.parseFloat(document.getElementById("nota_aluno_3").value);
    let frequencia = Number.parseFloat(document.getElementById("frequencia_aluno_1").value);
    let media = (nota1 + nota2 + nota3) / 3;
    let situacao;
    if(media < 6 || frequencia < 75) situacao = "Reprovado";
    else situacao = "Aprovado";
    let nova_linha = document.createElement("tr");
    nova_linha.classList.add("aluno");
    let celula_nome = document.createElement("td");
    celula_nome.classList.add("tab_nome_aluno");
    celula_nome.textContent = nome;

    let celula_nota1 = document.createElement("td");
    celula_nota1.classList.add("nota_aluno");
    celula_nota1.textContent = nota1;

    let celula_nota2 = document.createElement("td");
    celula_nota2.classList.add("nota_aluno");
    celula_nota2.textContent = nota2;

    let celula_nota3 = document.createElement("td");
    celula_nota3.classList.add("nota_aluno");
    celula_nota3.textContent = nota2;

    let celula_media = document.createElement("td");
    celula_media.classList.add("media");
    celula_media.textContent = media;

    let celula_frequencia = document.createElement("td");
    celula_frequencia.classList.add("frequencia");
    celula_frequencia.textContent   =    frequencia;

    let celula_situacao = document.createElement("td");
    celula_situacao.classList.add("situacao");
    celula_situacao.textContent = situacao;

    nova_linha.appendChild(celula_nome);
    nova_linha.appendChild(celula_nota1);
    nova_linha.appendChild(celula_nota2);
    nova_linha.appendChild(celula_nota3);
    nova_linha.appendChild(celula_media);
    nova_linha.appendChild(celula_frequencia);
    nova_linha.appendChild(celula_situacao);

    document.getElementById("tabela_alunos").appendChild(nova_linha);
}