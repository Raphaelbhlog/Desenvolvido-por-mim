
const btn = document.querySelector('#send');


btn.onclick = () => clicar("salvar")

function clicar() {    
    const name = document.querySelector('#name')
    const value = name.value; /*o resultado deve ser consultado como value) */
    
    window.alert("bem vindo(a) " + value)
}




