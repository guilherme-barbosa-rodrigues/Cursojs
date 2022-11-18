function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let num = parseInt(Math.random()* 101)
let res = parimpar(num)
console.log(`O numero ${num} é ${res}`)
