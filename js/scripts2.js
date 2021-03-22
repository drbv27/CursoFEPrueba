function Estudiante(nombre, calificacion){
    this.nombre = nombre;
    this.calificacion = calificacion;
}

const hugo = new Estudiante('Hugo', 4.9);
console.log(hugo);
//esta funcion sirve para....
function formatoEstudiante(estudiante){
    const {nombre,calificacion} = estudiante;
    return `El estudiante ${nombre} obtuvo calificacion de ${calificacion}`;
}

console.log(formatoEstudiante(hugo));

function Profesor(nombre,grado,materia) {
    this.nombre = nombre;
    this.grado = grado;
    this.materia = materia;
}

const diego = new Profesor('Diego',10,'JavaScript');

console.log(formatoEstudiante(diego));

