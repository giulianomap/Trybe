let custo = 50;
let venda = 120;

if(custo > 0 && venda > 0) {
  let lucro = (venda - custo)*0.8;
  console.log(lucro * 1000);
} else {
  console.log("Não foi possível calcular");
}



