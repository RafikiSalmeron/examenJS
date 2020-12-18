function ejercicio1(cad){
  var parentesis = [];
  for (caracter of cad){
    if(caracter == '('){
      parentesis.push(caracter);
    }
    if(caracter == ')'){
      if(parentesis.length == 0){
        return false;
      }
      parentesis.pop();
    }
  }
  return parentesis.length === 0;
}

console.log(ejercicio1(")ccc(ccc(ccc)cc)ccc("))

function ejercicio2(fecha, fechaInicio, fechaFin) {
  var fechasFinales = [];
  var fechaI = parseFechas(fechaInicio);
  var fechaF = parseFechas(fechaFin)
  for (let i = 0; i < fecha.length; i++) {
    let fechaC = parseFechas(fecha[i]);
    if (fechaC >= fechaI && fechaC <= fechaF) {
      fechasFinales.push(fecha[i]);
    }
  }
  return fechasFinales;
}

function parseFechas(fecha) {
  let fechaString = fecha.replaceAll('/', '-');
  let partes = fechaString.split("-");
  let fechaCorrecta = new Date(+partes[2], partes[1] - 1, +partes[0]);
  return fechaCorrecta;

}

console.log(ejercicio2(["01/03/2016", "02/05/2019", "10/12/2008", "10/01/2018"], "01/01/2018", "01/01/2020"));

// EJERCICIO 3
function ejercicio3(num) {
  if (typeof(num) === 'number') {
    return num;
  } else {
    var res = 1;
    for (let i = 0; i < num.length; i++) {
      res = res * ejercicio3(num[i]);
    }
    return res;
  }
}

// EJERCICIO 3 DE OTRA FORMA, POR SI LA DE ARRIBA NO LE PARECE CORRECTA
function ejercicio3_2(num) {
  var res = 1;
  for (n of num){
    res = res * n;
  }
  return res;
}

console.log(ejercicio3([1, 2, 3, 4, 5]));
console.log(ejercicio3_2([1, 2, 3, 4, 5]));


function ejercicio4(filas, columnas, color, nodo) {
  var texto;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      texto = this.responseText;
      crearTabla(filas, columnas, color, nodo, texto);
    }
  };
  xhttp.open("GET", "textoEjercicio4.txt", true);
  xhttp.send();
  //var division = document.getElementById(nodo);

}

function crearTabla(filas, columnas, color, nodo, texto){
  var tabla = document.createElement("table");
  tabla.setAttribute("border", "solid");
  for (let i = 0; i < filas; i++) {
    var tr = document.createElement("tr");
    if (i % 2 == 0) {
      tr.setAttribute("style", "background-color: red;");
    }
    for (let p = 0; p < columnas; p++) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(texto));
      td.addEventListener("click", function() {
        borrarTexto(event);
        localStorage.setItem("table", JSON.stringify(tabla.outerHTML));
      });
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }
  nodo.appendChild(tabla);
  localStorage.setItem("table", JSON.stringify(tabla.outerHTML));
}

function borrarTexto(event) {
  var target = event.target;
  target.innerHTML = "";
}
ejercicio4(5, 6, "red", document.getElementById("bloque1"));
