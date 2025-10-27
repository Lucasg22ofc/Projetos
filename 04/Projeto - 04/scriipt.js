
const cart = [10, 244, 99, 2, 20, 33, 250]
let valordesconto = 0
let valorsemdesconto = 0

function calcularDesconto(preço, desconto) {
    const resultado = preço - (preço * desconto / 100)
    return resultado
}

cart.forEach(value => {
    if (value > 30) {
        const desconto = calcularDesconto(value, 10)
        valordesconto = valordesconto + value - desconto
    } else {
        valordesconto += value
    }

    const semdesconto = value
    valorsemdesconto += semdesconto
});

console.log(`O valor do carrinho com desconto é de R$${valordesconto.toFixed(2)}`)
console.log(`O valor do carrinho sem desconto é de R$${valorsemdesconto.toFixed(2)}`)
console.log(`Você economizou R$${(valorsemdesconto - valordesconto).toFixed(2)}`)
