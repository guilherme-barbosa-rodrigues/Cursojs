function contar() {
    var ini = document.getElementById('txt1')
    var fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    if(ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ){
        res.innerHTML = 'Impossivel Contar'
    }else {
        res.innerHTML = 'Contando: <br>'
        var i= Number(ini.value)
        var f= Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0 || p > f) {
            alert('Passo invalido, considerando passo 1')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i;c <= f; c+=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
    } else {
        // CONTAGEM DECRESCENTE
        for(let c = i; c>=f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }

    } res.innerHTML += `\u{1F3C1}`
    }
}