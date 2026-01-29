"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class POO {
    constructor(_codigo, _nombre, _edad, _laboratorio, _parcial) {
        this.codigo = _codigo;
        this.nombre = _nombre;
        this.edad = _edad;
        this.laboratorio = _laboratorio;
        this.parcial = _parcial;
    }
    mostrarDATOS() {
        console.log("El estudiante: " + this.nombre);
        console.log("Codigo: " + this.codigo);
        console.log("Tiene las siguientes notas - laboratorio: " + this.laboratorio, "parcial: " + this.parcial);
    }
    mostrarNOTAS() {
        console.log("Tiene las siguientes notas - laboratorio: " + this.laboratorio, "parcial: " + this.parcial);
    }
}
class Redes {
    constructor(_nombre, _laboratorio1, _laboratorio2, _laboratorio3, _parcial1, _parcial2, _parcial3) {
        this.nombre = _nombre;
        this.laboratorio1 = _laboratorio1;
        this.laboratorio2 = _laboratorio2;
        this.laboratorio3 = _laboratorio3;
        this.parcial1 = _parcial1;
        this.parcial2 = _parcial2;
        this.parcial3 = _parcial3;
    }
    MostrarDatos() {
        const notaLaboratorio = ((this.laboratorio1 + this.laboratorio2 + this.laboratorio3) * 0.60) / 3;
        const notaParcial = ((this.parcial1 + this.parcial2 + this.parcial3) * 0.40) / 3;
        console.log(`${this.nombre} ${this.laboratorio1} ${this.laboratorio2} ${this.laboratorio3} ${this.parcial1} ${this.parcial2} ${this.parcial3} = ${notaLaboratorio + notaParcial}`);
    }
}
const estudiante1 = new POO('U20251084', 'Josué Alexander(POCHO)', 21, 10, 9);
estudiante1.mostrarDATOS();
//estudiante1.mostrarNOTAS();
const alumno1 = new Redes('Josué Alexander(POCHO)', 10, 10, 7, 8, 8, 10);
alumno1.MostrarDatos();
//# sourceMappingURL=index.js.map