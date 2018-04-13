function saludo(){
    alert("Hola!");    
}

function mostrarTexto(){
    
    var elem=document.getElementById("parrafo1");
    elem.innerHTML = "Texto de ejemplo con <strong>negrita</strong>";
    
}

function concatenaNombre(){
    var nombre =document.getElementById("nombre").innerHTML;
    var apellido = document.getElementById("apellidos").innerHTML;
    document.getElementById("nombrecompleto").innerHTML = nombre + " " + apellido;
}

function sumanum(){

    var a1=document.getElementById("numero1").value;
    
    var b1=document.getElementById("numero2").value;
    
    var c= parseInt(a1) + parseInt(b1);
    document.getElementById("resultado").innerHTML = c;
}

function restanum(a,b){
    var a1=document.getElementById("numero1").value;
    
    var b1=document.getElementById("numero2").value;
    
    var c= parseInt(a1) - parseInt(b1);
    document.getElementById("resultado").innerHTML = c;
}

function multinum(a,b){
    
    var a1=document.getElementById("numero1").value;
    
    var b1=document.getElementById("numero2").value;
    
    var c= parseFloat(a1) * parseFloat(b1);
    document.getElementById("resultado").innerHTML = c;
}

function divinum(a,b){
    
    var a1=document.getElementById("numero1").value;
    
    var b1=document.getElementById("numero2").value;
    
    var c= parseFloat(a1) / parseFloat(b1);
    document.getElementById("resultado").innerHTML = c;
    
    
}

function expnum(){
    
    var a1=document.getElementById("numero1").value;
    
    var b1=document.getElementById("numero2").value;
    
    var c= Math.pow(parseFloat(a1),parseFloat(b1));    /* También valdría parseFloat(a1)**parseFloat(b1) **/
    document.getElementById("resultado").innerHTML = c;
    
    
}

function quizapar(){
    
    var a1=document.getElementById("numero1").value;
    var b1=document.getElementById("numero2").value;
    
    var c1= parseFloat(a1)%2;
    var c2= parseFloat(b1)%2;
    if (c1===0) {
        document.getElementById("parimpar").innerHTML = "El 1er número es par";
            if (c2===0) {
                document.getElementById("parimpar").innerHTML = "Los dos números son pares";
            }
    }
    else if (c2===0){
            
        document.getElementById("parimpar").innerHTML = "El segundo número es par";
        
    }
    else{
        document.getElementById("parimpar").innerHTML = "Ningún número es par";
    }
}

/* Ejemplo concatenación en for para un Array de texto **/
  
function muestraCoches(){
    var coches=["Renault","Peugeot","Citroen","Ford"];
    var texto= "<ul>";
   
    for (i=0;i<coches.lenght;i++){
       /*texto=texto+"<li>"+coches[i]+"</li>;           Equivalentes**/
       texto+="<li>"+coches[i]+"</li>";
    }
    texto +="</ul>";
    
    document.getElementById("listadocoches").innerHTML = texto;
 }

function calculapeso(){
    var peso=[80,100,73,67,93,89,81];
    var cont=0;
    
    for (i=0;i<peso.length;i++){
        if (peso[i]>80){
            cont++;
        }
    }
    document.getElementById("numpeso").innerHTML = cont;
}

function notasFinales(){
    var notas=[3,8,7,5,4.5,9,8,3.5,6,10,7,7.5]; 
    var conts=[0,0,0,0,0,0];

    
    for (i=0;i<notas.length;i++){
        if (notas[i]<5){
            conts[0]++;
        }
        else if (notas[i]>=5&&notas[i]<6){
            conts[1]++;
        }
        else if (notas[i]>=6&&notas[i]<7){
            conts[2]++;
        }
        else if (notas[i]>=7&&notas[i]<8.5){
            conts[3]++;
        }
        else if (notas[i]>=8.5&&notas[i]<10){
            conts[4]++;
        }
        else if (notas[i]===10){
            conts[5]++;
        }
    }
    document.getElementById("textonotas").innerHTML="<li>Ha(n) sacado Matrícula de Honor "+conts[5]+" persona(s). </li><br> <li>Ha(n) sacado Sobresaliente "+conts[4]+" persona(s). </li><br> <li>Ha(n) sacado Notable "+conts[3]+" persona(s). </li><br> <li>Ha(n) sacado Bien "+conts[2]+" persona(s). </li><br> <li>Ha(n) sacado Apto "+conts[1]+" persona(s). </li><br> <li>Ha(n) suspendido "+conts[0]+" persona(s). </li><br> ";
    
}

/*
   array.push("Nuevo Elemento")  Añade elemento nuevo al final del array 
   array[array.length]= ("Nuevo Elemento") lo mismo
   
   array.join() Añade todos los elementos de un array a un String p.e.:  notas.join("elemento separador")
   array.pop()  Elimina el último elemento del array
   array.shift()  Elimina el primer elemento
   array.unshift("Nuevo Elemento")  Añade un elemento al primer lugar
   array.splice(posición 1, posición 2, "nuevo elemento 1", "nuevo elemento 2")  Añade elementos en las posiciónes indicadas 
   array.splice(posición 1, posición 2, ...) Elimina los elementos de esas posiciones 
   array1.concat(array2, array3,...)  Concatena varios arrays en uno 
   array.toString()  Convierte todo el array en un solo String
   array.sort()  Ordena el array alfabéticamente
   array.reverse()  Inverte el orden del array
   
   var matriz = [
    {nombre: "Juan", peso: 80, año: 1994}                 Crear arrays de tipo matriz con etiquetas
    {nombre: "Antonio", peso: 92, año: 1990}
   ];
   **/


function salario(){
    
    var empleados = [
        {nombre: "Marta", salario: 1000, horas: 50},
        {nombre: "Javier", salario: 3500, horas: 100},
        {nombre: "Pepe", salario: 800, horas: 100},
        {nombre: "Sandra", salario: 950, horas: 95},
        {nombre: "Teresa", salario: 2700, horas: 90},
    ];
    var sueldomedio=0;
    var sueldosuperior=0;
    var sueldoinferior=Number.POSITIVE_INFINITY;
    var isup=0;
    var iinf=0;

 
    for (i=0;i<empleados.length;i++){
        sueldomedio+= empleados[i].salario;
        
        if (sueldosuperior<empleados[i].salario){
            isup=i;
            sueldosuperior=empleados[i].salario;
        }
        if (sueldoinferior>empleados[i].salario){
            iinf=i;
            sueldoinferior=empleados[i].salario;
        }
        
    }
 
    sueldomedio=sueldomedio/(empleados.length);
    document.getElementById("salariomedio").innerHTML= sueldomedio+ " €.";
    document.getElementById("cobradormax").innerHTML= ""+empleados[isup].nombre+" con un salario de " +empleados[isup].salario+" €.";  
    document.getElementById("cobradormin").innerHTML= ""+empleados[iinf].nombre+" con un salario de " +empleados[iinf].salario+" €.";
    
}

$(document).ready(function() {
    $('#example').DataTable( {
        "order": [[ 1, "desc" ]],
        "scrollY":  "150px",
        "scrollCollapse": true,
        "paging":         false,
        "language": {
            "decimal": ",",
            "thousands": ".",
            "lengthMenu": "Mostrar _MENU_ resultados por página",
            "zeroRecords": "No se han encontrado resultados",
            "info": "Mostrando la página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay resultados disponibles",
            "infoFiltered":"(filtrado de un total de _MAX_ resultados)",
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ ",
            "sInfoEmpty":      "No se han encontrado registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
        
    } );
} );


var dataSet = [
    [ "Javier", "3500", "100"],
    [ "Fran", "2000", "200"],
    [ "Ana", "2750", "100"],

];
 
$(document).ready(function() {
    $('#example1').DataTable( {
        data: dataSet,
        columns: [
            { title: "Nombre" },
            { title: "Salario" },
            { title: "Horas" }
        ]
    } );
} );




