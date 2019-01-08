var Calculadora = {
  valor: "",
  yapunto: false,
  resultado: 0,
  operacion: "",
  operando: "1",
  vroperando1: "",
  vroperando2: "",
  yaigual: false,
// LISTENERS DE TECLAS DE NÚMEROS
procesarCero: document.getElementById("0").addEventListener("mousedown",function(){
  document.getElementById("0").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor=""; document.getElementById("display").innerHTML = 0; }
  if (Number(Calculadora.valor)!==0 && Calculadora.valor.length<8){
    Calculadora.valor = Calculadora.valor + "0";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }else {
   if(Calculadora.yapunto){
    Calculadora.valor = Calculadora.valor +"0";
    document.getElementById("display").innerHTML = Calculadora.valor;
    }
  }
}),
procesarCeroSoltar: document.getElementById("0").addEventListener("mouseup",function(){
    document.getElementById("0").setAttribute("style","transform:scale(1,1)")
}),
procesarUno: document.getElementById("1").addEventListener("mousedown",function(){
  document.getElementById("1").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Calculadora.valor.length < 8){
     Calculadora.valor =  Calculadora.valor + "1";
     document.getElementById("display").innerHTML = Calculadora.valor;
    }
}),
procesarUnoSoltar: document.getElementById("1").addEventListener("mouseup",function(){
    document.getElementById("1").setAttribute("style","transform:scale(1,1)")
}),
procesarDos: document.getElementById("2").addEventListener("mousedown",function(){
  document.getElementById("2").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Calculadora.valor.length < 8){
    Calculadora.valor = Calculadora.valor + "2";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }
}),
procesarDosSoltar: document.getElementById("2").addEventListener("mouseup",function(){
    document.getElementById("2").setAttribute("style","transform:scale(1,1)")
}),
procesarTres: document.getElementById("3").addEventListener("mousedown",function(){
  document.getElementById("3").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, valor="";}
  if (Calculadora.valor.length < 8){
    Calculadora.valor = Calculadora.valor + "3";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }
}),
procesarTresSoltar: document.getElementById("3").addEventListener("mouseup",function(){
    document.getElementById("3").setAttribute("style","transform:scale(1,1)")
}),
procesarCuatro: document.getElementById("4").addEventListener("mousedown",function(){
  document.getElementById("4").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Calculadora.valor.length < 8){
    Calculadora.valor = Calculadora.valor + "4";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }
}),
procesarCuatroSoltar: document.getElementById("4").addEventListener("mouseup",function(){
    document.getElementById("4").setAttribute("style","transform:scale(1,1)")
}),
procesarCinco: document.getElementById("5").addEventListener("mousedown",function(){
  document.getElementById("5").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Calculadora.valor.length < 8){
    Calculadora.valor = Calculadora.valor + "5";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }
}),
procesarCincoSoltar: document.getElementById("5").addEventListener("mouseup",function(){
    document.getElementById("5").setAttribute("style","transform:scale(1,1)")
}),
procesarSeis: document.getElementById("6").addEventListener("mousedown",function(){
  document.getElementById("6").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Calculadora.valor.length < 8){
    Calculadora.valor = Calculadora.valor + "6";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }
}),
procesarSeisSoltar: document.getElementById("6").addEventListener("mouseup",function(){
    document.getElementById("6").setAttribute("style","transform:scale(1,1)")
}),
procesarSiete: document.getElementById("7").addEventListener("mousedown",function(){
  document.getElementById("7").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Calculadora.valor.length < 8){
    Calculadora.valor = Calculadora.valor + "7";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }
}),
procesarSieteSoltar: document.getElementById("7").addEventListener("mouseup",function(){
    document.getElementById("7").setAttribute("style","transform:scale(1,1)")
}),
procesarOcho: document.getElementById("8").addEventListener("mousedown",function(){
  document.getElementById("8").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Calculadora.valor.length < 8){
    Calculadora.valor = Calculadora.valor + "8";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }
}),
procesarOchoSoltar: document.getElementById("8").addEventListener("mouseup",function(){
    document.getElementById("8").setAttribute("style","transform:scale(1,1)")
}),
procesarNueve: document.getElementById("9").addEventListener("mousedown",function(){
  document.getElementById("9").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Calculadora.valor.length < 8){
    Calculadora.valor = Calculadora.valor + "9";
    document.getElementById("display").innerHTML = valor;
  }
}),
procesarNueveSoltar: document.getElementById("9").addEventListener("mouseup",function(){
    document.getElementById("9").setAttribute("style","transform:scale(1,1)")
}),
// ----------------------- BOTON ON  ---------------------------------
botonOn: document.getElementById("on").addEventListener("mousedown",function(){
  document.getElementById("on").setAttribute("style","transform:scale(.9,.9)")
  Calculadora.yaigual=false;
  Calculadora.valor="";
  Calculadora.resultado="";
  Calculadora.yapunto=false;
  Calculadora.operando="1";
  document.getElementById("display").innerHTML = "0"
}),
botonOnSoltar: document.getElementById("on").addEventListener("mouseup",function(){
    document.getElementById("on").setAttribute("style","transform:scale(1,1)")
}),
// ----------------------- SIGNO MENOS ---------------------------------
signoMenos: document.getElementById("sign").addEventListener("mousedown",function(){
  document.getElementById("sign").setAttribute("style","transform:scale(.9,.9)")
  Calculadora.yaigual=false;
  if(Number(Calculadora.valor)>0 && Calculadora.valor.length<8){
     Calculadora.valor = "-" + Calculadora.valor;
     document.getElementById("display").innerHTML = Calculadora.valor;
   }else{
     if (Number(Calculadora.valor)<0 ){
       Calculadora.valor = Number(Calculadora.valor)*-1;
       Calculadora.valor = Calculadora.valor.toString();
       document.getElementById("display").innerHTML = Calculadora.valor;
     }
   }
}),
signoMenosSoltar: document.getElementById("sign").addEventListener("mouseup",function(){
    document.getElementById("sign").setAttribute("style","transform:scale(1,1)")
}),
// ----------------------- PUNTO ---------------------------------------
punto: document.getElementById("punto").addEventListener("mousedown",function(){
  document.getElementById("punto").setAttribute("style","transform:scale(.9,.9)")
  if (Calculadora.yaigual) { Calculadora.yaigual=false, Calculadora.valor="";}
  if (Number(Calculadora.valor)!==0 && !Calculadora.yapunto && Calculadora.valor.length<8){
    Calculadora.valor = Calculadora.valor + ".";
    document.getElementById("display").innerHTML = Calculadora.valor;
  }else{ if (Number(Calculadora.valor)==0){
    Calculadora.valor = "0.";
    document.getElementById("display").innerHTML = Calculadora.valor;
    }
  }
  Calculadora.yapunto=true;
}),
puntoSoltar: document.getElementById("punto").addEventListener("mouseup",function(){
    document.getElementById("punto").setAttribute("style","transform:scale(1,1)")
}),
// ----------------------- SUMA --------------------------------------------
suma: document.getElementById("mas").addEventListener("mousedown",function(){
  document.getElementById("mas").setAttribute("style","transform:scale(.9,.9)")
  Calculadora.yapunto=false;
  Calculadora.yaigual=false;
  if (Number(Calculadora.valor)==0 && Number(Calculadora.vroperando1)==0) { Calculadora.operando="0"; document.getElementById("display").innerHTML = 0;}
  switch (Calculadora.operando) {
    case "0":
      document.getElementById("display").innerHTML = "0";
      Calculadora.operando="1";
      break;
    case "1":
      Calculadora.vroperando1=Calculadora.valor;
      Calculadora.valor="";
      Calculadora.operando="2";
      Calculadora.antoperacion="sum";
      Calculadora.operacion="sum";
      document.getElementById("display").innerHTML = "0";
      break;
    case "2":
      Calculadora.vroperando2=Calculadora.valor;
      Calculadora.operacion=Calculadora.antoperacion;
      Calculadora.totalice(Calculadora.operacion);
      Calculadora.antoperacion="sum";
      document.getElementById("display").innerHTML = "0";
      document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0,8);
      Calculadora.operando="2";
      Calculadora.vroperando1 = Calculadora.resultado.toString();
      Calculadora.vroperando2="";
      Calculadora.valor="";
      break;
    default:
  }
}),
sumaSoltar: document.getElementById("mas").addEventListener("mouseup",function(){
    document.getElementById("mas").setAttribute("style","transform:scale(1,1)")
}),
// ----------------------- RESTA -------------------------------------
resta: document.getElementById("menos").addEventListener("mousedown",function(){
  document.getElementById("menos").setAttribute("style","transform:scale(.9,.9)")
  Calculadora.yapunto=false;
  Calculadora.yaigual=false;
  if (Number(Calculadora.valor)==0 && Number(Calculadora.vroperando1)==0) { Calculadora.operando="0"; document.getElementById("display").innerHTML = 0;}
  switch (Calculadora.operando) {
    case "0":
      document.getElementById("display").innerHTML = "0";
      Calculadora.operando="1";
      break;
    case "1":
      Calculadora.vroperando1 = Calculadora.valor;
      Calculadora.valor="";
      Calculadora.operando="2";
      Calculadora.antoperacion="res";
      Calculadora.operacion="res";
      document.getElementById("display").innerHTML = "0";
      break;
    case "2":
      Calculadora.vroperando2=Calculadora.valor;
      Calculadora.operacion=Calculadora.antoperacion;
      Calculadora.totalice(Calculadora.operacion);
      Calculadora.antoperacion="res";
      document.getElementById("display").innerHTML = "0";
      document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0,8);
      Calculadora.operando="2";
      Calculadora.vroperando1=Calculadora.resultado.toString();
      Calculadora.vroperando2="";
      Calculadora.valor="";
      break;
    default:
  }
}),
restaSoltar: document.getElementById("menos").addEventListener("mouseup",function(){
    document.getElementById("menos").setAttribute("style","transform:scale(1,1)")
}),
// ----------------------- MULTIPLICACIÓN ---------------------------------
multiplicacion: document.getElementById("por").addEventListener("mousedown",function(){
  document.getElementById("por").setAttribute("style","transform:scale(.9,.9)")
  Calculadora.yapunto=false;
  Calculadora.yaigual=false;
  if (Number(Calculadora.valor)==0 && Number(Calculadora.vroperando1)==0) { Calculadora.operando="0"; document.getElementById("display").innerHTML = 0;}
  switch (Calculadora.operando) {
    case "0":
      document.getElementById("display").innerHTML = "0";
      Calculadora.operando="1";
      break;
    case "1":
      Calculadora.vroperando1 = Calculadora.valor;
      Calculadora.valor="";
      Calculadora.operando="2";
      Calculadora.antoperacion="mul";
      Calculadora.operacion="mul";
      document.getElementById("display").innerHTML = "0";
      break;
    case "2":
      Calculadora.vroperando2 = Calculadora.valor;
      Calculadora.operacion=Calculadora.antoperacion;
      Calculadora.totalice(Calculadora.operacion);
      Calculadora.antoperacion="mul";
      document.getElementById("display").innerHTML = "0";
      document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0,8);
      Calculadora.operando="2";
      Calculadora.vroperando1=Calculadora.resultado.toString();
      Calculadora.vroperando2="";
      Calculadora.valor="";
      break;
    default:
  }
}),
multiplicacionSoltar: document.getElementById("por").addEventListener("mouseup",function(){
    document.getElementById("por").setAttribute("style","transform:scale(1,1)")
}),
// ----------------------- DIVISIÓN ---------------------------------
division: document.getElementById("dividido").addEventListener("mousedown",function(){
  document.getElementById("dividido").setAttribute("style","transform:scale(.9,.9)")
  Calculadora.yapunto=false;
  Calculadora.yaigual=false;
  if (Number(Calculadora.valor)==0 && Number(Calculadora.vroperando1)==0) { Calculadora.operando="0"; document.getElementById("display").innerHTML = 0;}
  switch (Calculadora.operando) {
    case "0":
      document.getElementById("display").innerHTML = "0";
      Calculadora.operando="1";
      break;
    case "1":
      Calculadora.vroperando1 = Calculadora.valor;
      Calculadora.valor="";
      Calculadora.operando="2";
      Calculadora.antoperacion="div";
      Calculadora.operacion="div";
      document.getElementById("display").innerHTML = "0";
      break;
    case "2":
      Calculadora.vroperando2 = Calculadora.valor;
      Calculadora.operacion=Calculadora.antoperacion;
      Calculadora.totalice(Calculadora.operacion);
      Calculadora.antoperacion="div";
      //document.getElementById("display").innerHTML = resultado;
      document.getElementById("display").innerHTML = "0";
      document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0,8);
      Calculadora.operando="2";
      Calculadora.vroperando1=Calculadora.resultado.toString();
      Calculadora.vroperando2="";
      Calculadora.valor="";
      break;
    default:
  }
}),
divisionSoltar: document.getElementById("dividido").addEventListener("mouseup",function(){
    document.getElementById("dividido").setAttribute("style","transform:scale(1,1)")
}),
// ----------------------- IGUAL --------------------------------------------
igual: document.getElementById("igual").addEventListener("mousedown",function(){
  document.getElementById("igual").setAttribute("style","transform:scale(.9,.9)")
  if (!Calculadora.yaigual) {
  Calculadora.yaigual=true;
  Calculadora.vroperando2 = Calculadora.valor;
  Calculadora.totalice(Calculadora.antoperacion);
  Calculadora.vroperador1=Calculadora.resultado.toString();
  Calculadora.valor=Calculadora.resultado.toString();
  Calculadora.operando="1";
  document.getElementById("display").innerHTML = Calculadora.resultado;
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0,8)
} else {
  switch (Calculadora.antoperacion) {
      case "res":
        Calculadora.resultado = Calculadora.resultado - Number(Calculadora.vroperando2);
        break;
      case "mul":
        Calculadora.resultado = Calculadora.resultado * Number(Calculadora.vroperando2);
        break;
      case "div":
        Calculadora.resultado = Calculadora.resultado / Number(Calculadora.vroperando2);
        break;
      case "sum":
        Calculadora.resultado = Calculadora.resultado + Number(Calculadora.vroperando2);
        break;
    default:
  }
  document.getElementById("display").innerHTML = Calculadora.resultado;
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0,8)
}
}),
igualSoltar: document.getElementById("igual").addEventListener("mouseup",function(){
     document.getElementById("igual").setAttribute("style","transform:scale(1,1)");
}),
// Función para cálculo resultado
totalice: function(hopera) {
  switch (hopera) {
    case "sum":
          Calculadora.resultado = Number(Calculadora.vroperando1) + Number(Calculadora.vroperando2);
      break;
    case "res":
          Calculadora.resultado = Number(Calculadora.vroperando1) - Number(Calculadora.vroperando2);
      break;
    case "mul":
          Calculadora.resultado = Number(Calculadora.vroperando1) * Number(Calculadora.vroperando2);
      break;
    case "div":
          Calculadora.resultado = Number(Calculadora.vroperando1) / Number(Calculadora.vroperando2);
      break;
    default:
  }
}
}
