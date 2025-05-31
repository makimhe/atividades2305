const form= document.getElementById('form');
form.addEventListener('submit',(event)=> {
    event.preventDefault()
    cadastrar();
});

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let senha = document.getElementById('senha').value;
    const dados = document.getElementById('dados');
   
    dados.innerHTML =`
    <div>nome: ${nome}</div>
    <div>telefone: ${telefone}</div>
    <div>cpf: ${cpf}</div>
    <div>email: ${email}</div>
    <div>senha: ${senha}</div>
    <div>cep: ${cep}</div>
    
    `
}
