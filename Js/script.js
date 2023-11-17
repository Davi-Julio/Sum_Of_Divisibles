/* Função para calcular a somatória dos valores inteiros
 divisíveis por 3 ou 5 que são inferiores ao número específico.
*/

const btn = document.querySelector("#btn");
const num = document.querySelector("#number");
const messg = document.querySelector("#messg");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    var numValue = num.value;

    function somarDivisao(numValue) {
        let somar = 0;

        for (let i = 1; i < numValue; i++) {
            // Lop For para percorrer todos os números

            if (i % 3 === 0 || i % 5 === 0) {
                // Verifica se o número e divisível por 3 ou 5
                somar += i;
            }
        }

        return somar;
    }

    const resultado = somarDivisao(numValue);
    messg.innerHTML = '<p>O Resultado Será:</p>' + resultado;
    messg.style.color = 'green';


    num.value = '';


    /*
    Validação do Formulário
    */

    if (numValue === "") {
        messg.innerHTML = 'Preencha os campos!'
        messg.style.color = 'red';


        setTimeout(() => {
            messg.innerHTML = '';
        }, 2000)
    }


})


/*Efeito Btn*/

btn.addEventListener('mouseover', () => {
    btn.style.boxShadow = '10px 10px 20px black'
    btn.style.border = 'none'
    btn.style.transition = '1.1s';

    setTimeout(() => {
        btn.style.boxShadow = '0px 0px 0px black'
    }, 1000)
})



