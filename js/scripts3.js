/* function Estudiante(nombre, calificacion){
    this.nombre = nombre;
    this.calificacion = calificacion;
}

const hugo = new Estudiante('Hugo', 4.9);
console.log(hugo);

Estudiante.prototype.tipoEstudiante = function() {
    console.log('Desde un nuevo Prototype');
}

hugo.tipoEstudiante();

function Profesor(nombre,grado,materia) {
    this.nombre = nombre;
    this.grado = grado;
    this.materia = materia;
}

const diego = new Profesor('Diego',10,'JavaScript');
console.log(diego); */


function Estudiante(nombre, calificacion){
    this.nombre = nombre;
    this.calificacion = calificacion;
}
const hugo = new Estudiante('Hugo', 2);
console.log(hugo);

Estudiante.prototype.tipoEstudiante = function() {
    let tipo;
    if(this.calificacion >=4.9){
        tipo = 'Excelente'
    }else if (this.calificacion >= 4.0){
        tipo = "Buen"
    }else if (this.calificacion >=3.0){
        tipo = 'Regular'
    }else{
        tipo = "Deficiente"
    }
    return tipo;
}

console.log(hugo.tipoEstudiante());

Estudiante.prototype.nombreECal = function(){
    return `Estudiante:${this.nombre}, Calificacion:${this.calificacion}
     es tipo ${this.tipoEstudiante()}`;
}
console.log(hugo.nombreECal());









function Profesor(nombre,grado,materia) {
    this.nombre = nombre;
    this.grado = grado;
    this.materia = materia;
}

const diego = new Profesor('Diego',10,'JavaScript');
console.log(diego);