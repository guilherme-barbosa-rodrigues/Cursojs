let num = [5 ,8 ,2 , 9, 3]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
/*
for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
} console.log('Concluido') 

for(let pos in num){
    console.log(num[pos])
}
*/