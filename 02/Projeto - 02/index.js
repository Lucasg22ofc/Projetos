let tarefas = []

function clicar(){

    const texto = document.getElementById("inputTarefa")
    let tarefa = texto.value.trim()

    const mensagem = document.getElementById("mensagem")

    if(tarefa == ""){

        let mensagemErro = "DIGITE UM ALIMENTO PARA ADICIONAR EM SUA LISTA!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "black"
    } else {
        let mensagemsucesso = "COMPRAS ADICIONADAS COM SUCESSO!"
        mensagem.textContent = mensagemsucesso
        mensagem.style.color = "black"

        tarefas.push(tarefa)
        renderizarvalores()
    }

    texto.value = ""
}

function renderizarvalores(){
    const listatarefas = document.getElementById("listatarefas")
    listatarefas.innerHTML = ""

    for(let i = 0; i < tarefas.length; i++){
        let novatarefa = document.createElement("li")
        
        let nomeAlimento = document.createElement("span")
        nomeAlimento.textContent = tarefas[i]
        nomeAlimento.style.marginRight = "35px"

       let botaoRemover = document.createElement("button")
       botaoRemover.className = "remover"
       botaoRemover.textContent = "Remover"
       botaoRemover.style.marginRight =" 20px"
       botaoRemover.style.backgroundColor = "red"
       botaoRemover.style.color = "white"

       botaoRemover.onclick = () => removerTarefa (i)
       botaoRemover.style.transform = "translateY(-6px)"
       botaoRemover.style.borderRadius ="10px";
      
       let botaoEditar = document.createElement("button")
       botaoEditar.className = "editar"
       botaoEditar.textContent = "Editar"
       botaoEditar.style.backgroundColor = "blue"
       botaoEditar.style.color = "white"
      

       botaoEditar.onclick = () => editarTarefa (i)
       botaoEditar.style.transform = "translateY(-6px)"
       botaoEditar.style.borderRadius ="10px";

       novatarefa.appendChild(nomeAlimento)
       novatarefa.appendChild(botaoRemover)
       novatarefa.appendChild(botaoEditar)
      
       listatarefas.appendChild(novatarefa)
    }
}

function removerTarefa(i){
    tarefas.splice(i, 1)
    renderizarvalores()
}

function editarTarefa(i) {
   let tarefaEditada = prompt('EDITE A TAREFA', tarefas[i])
   if(tarefaEditada && tarefaEditada.trim !== ""){
     tarefas[i] = tarefaEditada.trim()
     renderizarvalores()
   }
}

document.getElementById("finalizarBtn").addEventListener("click", () => {
    if (tarefas.length > 0) {
      const menina = document.getElementById("meninaAnimada");
      menina.classList.remove("correr");
      void menina.offsetWidth;
      menina.style.display = "block";
      menina.classList.add("correr");

      menina.addEventListener("animationend", () =>{
          menina.style.display = "none";
      }, {once: true});
    } else {
      alert("Adicione ao menos uma compra antes de finalizar!");
    }
  });
  
