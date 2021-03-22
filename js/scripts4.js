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

function Cliente(nombre, calificacion, telefono){
    //para heredar un prototype
    Estudiante.call(this, nombre, calificacion);
    this.telefono = telefono;
}
Cliente.prototype = Object.create(Estudiante.prototype);
const pedro = new Cliente('Pedro', 4.5, 55555777);





console.log(pedro);