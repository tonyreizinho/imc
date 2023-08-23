 botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC() {
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value/100;
  let resultado = document.getElementById('resultado');
  console.log('tá funfando 01');
  
  if(altura !== "" && peso !== "") {
        let imc = (peso / (altura * altura)).toFixed(1);
        let mensagem = "";
        console.log('tá funfando 02');
  
    if(imc < 18.5){
    mensagem = "Abaixo do peso.";
      }else if(imc < 25){
        mensagem = "Peso ideal.";
      }else if (imc < 30){
        mensagem = "Sobre peso.";
      }else if (imc <35){
        mensagem = "Obesidade Grau I";
      }else if (imc < 40){
        mensagem = "Obesidade Grau II";
      }else{
        mensagem = "Obesidade Grau III";
      }
    resultado.innerHTML = "O seu IMC é: " +imc + ".  " +mensagem;
  
    }else{
    resultado.innerHTML ="Por favor, preencha todos os campos.";
  }
    
}
   
botaoCalcular.addEventListener('click', calculandoIMC);