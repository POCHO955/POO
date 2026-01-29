class POO {
    codigo: string;
    nombre: string;
    edad: number;
    laboratorio: number;
    parcial: number;

    constructor(_codigo: string, _nombre: string, _edad: number, _laboratorio: number, _parcial: number) {
        this.codigo = _codigo
        this.nombre = _nombre
        this.edad = _edad
        this.laboratorio = _laboratorio
        this.parcial = _parcial
    }

    public mostrarDATOS(): void {
        console.log("El estudiante: "+this.nombre);
        console.log("Codigo: "+this.codigo);
        console.log("Tiene las siguientes notas - laboratorio: "+this.laboratorio, "parcial: "+this.parcial);
    }

    public mostrarNOTAS(): void {
        console.log("Tiene las siguientes notas - laboratorio: "+this.laboratorio, "parcial: "+this.parcial);
    }
}


class Redes {
    nombre: string;
    laboratorio1: number;
    laboratorio2: number;
    laboratorio3: number;
    parcial1: number;
    parcial2: number;
    parcial3: number;

    constructor(
        _nombre: string,
        _laboratorio1: number,
        _laboratorio2: number,
        _laboratorio3: number,
        _parcial1: number,
        _parcial2: number,
        _parcial3: number
    ) {
        this.nombre = _nombre
        this.laboratorio1 = _laboratorio1
        this.laboratorio2 = _laboratorio2
        this.laboratorio3 = _laboratorio3
        this.parcial1 = _parcial1
        this.parcial2 = _parcial2
        this.parcial3 = _parcial3
    }

    public MostrarDatos(): void {
        const notaLaboratorio = ((this.laboratorio1 + this.laboratorio2 + this.laboratorio3) * 0.60) / 3
        const notaParcial = ((this.parcial1 + this.parcial2 + this.parcial3) * 0.40) / 3
        console.log(`${this.nombre} ${this.laboratorio1} ${this.laboratorio2} ${this.laboratorio3} ${this.parcial1} ${this.parcial2} ${this.parcial3} = ${notaLaboratorio + notaParcial}`);
    }
}

const estudiante1 = new POO('U20251084','Josué Alexander(POCHO)',21,10,9);
estudiante1.mostrarDATOS();
//estudiante1.mostrarNOTAS();
const alumno1 = new Redes('Josué Alexander(POCHO)', 10,10,7,8,8,10);
alumno1.MostrarDatos();

