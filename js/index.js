var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;


    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdPeso.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        tdAltura = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#formAdiciona");
    let nome = form.nome.value;
    let peso =  form.peso.value;
    let altura = form.altura.value; 
    let gordura = form.gordura.value;

    let trPaciente = document.createElement("tr");

    let tdNome = document.createElement("td");
    let tdPeso = document.createElement("td");
    let tdAltura = document.createElement("td");
    let tdGordura = document.createElement("td");
    let tdImc = document.createElement("td");

    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;

    trPaciente.appendChild(tdNome);
    trPaciente.appendChild(tdPeso);
    trPaciente.appendChild(tdAltura);
    trPaciente.appendChild(tdGordura);

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(trPaciente);
    

});



