function gerarTabuada() {
    var numero = parseInt(document.getElementById("numeroT").value);
    var select = document.getElementById("tabuada");

    // Limpa o select antes de gerar a nova tabuada
    select.innerHTML = "";

    // Gera as opções da tabuada
    if(numeroT.value.length == 0){
        window.alert('Digite algum valor')
    }else{
        for (var i = 1; i <= 9; i++) {
        var option = document.createElement("option");
        option.text = numero + " x " + i + " = " + (numero * i);
        select.add(option);
        }
    }
    
  }