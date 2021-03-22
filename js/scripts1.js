const estudiante ={
    nombre:'Diego',
    calificacion:5.0,
}

console.log(estudiante);
//se llama object constructor
function Estudiante(nombre, calificacion){
    this.nombre = nombre;
    this.calificacion = calificacion;
}

//instanciar

const hugo = new Estudiante('Hugo', 4.9);
const edward = new Estudiante('Edward',4.3);

console.log(hugo);
console.log(edward);