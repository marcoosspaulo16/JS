let num = document.getElementById('input_number')
let Nlista = document.getElementById('lista')
let res = document.getElementById('resultado')
let vetor = []

/* Vetor foi criado com o intuito de armazenar os numeros escritos pelo usuario */

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

/* Todas as vezes que o botão armazena for clicado, um valor sera adicionado ao vetor  */

function armazena(){
    if(isNumero(num.value) && !inLista(num.value, vetor)){
        vetor.push(Number(num.value))
        
        /* mostra no select os valores dentro do vetor */

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado` 
        Nlista.appendChild(item)

    }else {
        window.alert('Numero invalido ou ja se encontra na lista')
    }
    num.value = ''
    num.focus()
    /* Zera o campo de input e mantem o 'foco'*/
}

function analisaNumeros(){
    if(vetor.length == 0){
        window.alert('Digite algum valor antes de finalizar')
    } else {
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = vetor[0]
        let media = vetor[0]

        for(let i in vetor){
            soma += vetor[i]
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }

        media = soma / vetor.length

        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo temos ${total} numeros cadastrados </p>`
        resultado.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        resultado.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        resultado.innerHTML += `<p> A soma dos numeros foi ${soma} </p>`
        resultado.innerHTML += `<p> A media dos numeros foi ${media.toFixed(2)} </p>`
    }

}