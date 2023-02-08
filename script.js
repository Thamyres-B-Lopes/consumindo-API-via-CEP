
async function buscaEndereco(cep) {
var mensagemErro = document.getElementById ('erro');
mensagemErro.innerHTML = "";
try{
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaConvertida = await consultaCep.json();
    if (consultaConvertida.erro) {
        throw Error('Cep inválido');
    }
    var bairro = document.getElementById('bairro');
    var endereco = document.getElementById('endereco');
    var numero = document.getElementById('numero');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado')

    cidade.value = consultaConvertida.localidade;
    bairro.value = consultaConvertida.bairro;
    endereco.value = consultaConvertida.logradouro;
    estado.value = consultaConvertida.uf;
    numero.value = consultaConvertida.numero;

   return consultaConvertida

}catch (erro) {
    mensagemErro.innerHTML = `<p>Cep não existe<p>`
}
}

var cep = document.getElementById ('cep');
cep.addEventListener ('focusout', () => buscaEndereco(cep.value))


