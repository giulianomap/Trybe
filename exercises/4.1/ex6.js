let peça;
peça = "cavalo";

switch(peça.toLowerCase()) {
  case "peão":
    console.log("somente para frente, uma casa por vez");
    break;
  case "bispo":
    console.log("diagonais");
    break;
  case "torre":
    console.log("horizontal e vertical, em casas não ocupadas");
    break;
  case "cavalo":
    console.log("movimento em L, por duas casas horizontais ou verticais, podendo pular peças");
    break;
  case "rainha":
    console.log("horizontal, vertical e diagonal, por todo o tabuleiro");
    break;
  case "rei":
    console.log("qualquer casa adjacente");
    break
  default:
    console.log("Essa peça não existe");  
}