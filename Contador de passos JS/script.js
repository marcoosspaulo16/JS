function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('resultado')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F6B6}`
            }
            
        } else {
            for(let c = i; c >= f; c-= p){
                //Contagem regressiva
                res.innerHTML += `${c} \u{1F6B}`
            }
        }
    }
    res.innerHTML += '\u{1F3C1}'
}