var numero = 0
var boton = document.getElementById("enviar")
boton.addEventListener("click", calcular)

function calcular(){
  numero = document.getElementById("numero_ingresado").value
  ciclo ()
}

function esdivisible (n, div){
  if(n % div == 0){
    return true
  }
  else{
    return false
  }
}

function ciclo(){
  for(i=1; i<= numero; i++){
  if(esdivisible(i,3)){
     resultado.innerHTML += ("agua")
  }
  if(esdivisible(i,5)){
   resultado.innerHTML += ("cate")
  }
  if(!esdivisible(i,3)&&!esdivisible(i,5)){
   resultado.innerHTML += (i)
  }
   resultado.innerHTML += ("<br />");
 }
}


  
  
