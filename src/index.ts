class POO {
    codigo:string;
    nombre:string;
    edad: number;
    laboratorio: number;
    parcial: number;
    
    constructor(_codigo:string = '', _nombre:string = '', _edad:number = 0,
        _laboratorio:number = 0, _parcial:number = 0){
            this.codigo=_codigo;
            this.nombre=_nombre;
            this.edad=_edad;
            this.laboratorio=_laboratorio;
            this.parcial=_parcial;
    }

    public mostrarDatos(): void {
        console.log("El estudiante: "+this.nombre);
        console.log("Con codigo: "+this.codigo);
        console.log("Tiene las siguientes notas de laboratorio: "+this.laboratorio+" parcial: "+this.parcial);
    }

    public mostrarNotas(): void {
        console.log("lab: "+this.laboratorio+" parcial: "+this.parcial)
    }
}

//sacar el promedio de las notas y la suma es el resultado final de las notas
class Redes {
    codigo: string;
    nombre: string;
    L1: number;
    L2: number;
    LA3: number;
    P1: number;
    P2: number;
    P3: number;

    constructor(_codigo: string = '', _nombre: string = '', _L1: number = 0, _L2: number = 0, _LA3: number = 0, _P1: number = 0, _P2: number = 0, _P3: number = 0) {
        this.codigo = _codigo;
        this.nombre = _nombre;
        this.L1 = _L1;
        this.L2 = _L2;
        this.LA3 = _LA3;
        this.P1 = _P1;
        this.P2 = _P2;
        this.P3 = _P3;
    }

    public sumaNotas(): number {
        return this.L1 + this.L2 + this.LA3 + this.P1 + this.P2 + this.P3;
    }

    public promedio(): number {
        const cantidad = 6; 
        return this.sumaNotas() / cantidad;
    }

    public mostrarDatos(): void {
        console.log('El estudiante: ' + this.nombre);
        console.log('Con codigo: ' + this.codigo);
        console.log('Notas labs: L1:' + this.L1 + ' L2:' + this.L2 + ' LA3:' + this.LA3);
        console.log('Parciales: P1:' + this.P1 + ' P2:' + this.P2 + ' P3:' + this.P3);
        console.log('Suma de notas: ' + this.sumaNotas());
        console.log('Promedio: ' + this.promedio());
    }

    public mostrar(): void {
        let prom1 = ((this.L1 * 0.60) + (this.P1 * 0.40));
        let prom2 = ((this.L2 * 0.60) + (this.P2 * 0.40));
        let prom3 = ((this.LA3 * 0.60) + (this.P3 * 0.40));
        console.log('El promedio del primer parcial es: ' + prom1);
        console.log('El promedio del segundo parcial es: ' + prom2);
        console.log('El promedio del tercer parcial es: ' + prom3);
        const sumaPromedios = prom1 + prom2 + prom3;
        const promedioFinal = sumaPromedios / 3;
        console.log('Suma de promedios: ' + sumaPromedios);
        console.log('Promedio final (media de los 3 parciales): ' + promedioFinal);
    }
}

//objeto instancia a POO
let estudiante1 = new POO('u20251084', 'JOSUE ALEXANDER ZELAYA RODRIGUEZ', 21, 9, 8);
estudiante1.mostrarDatos();
estudiante1.mostrarNotas();
//objeto instancia a Redes 
let estudiante2 = new Redes('u20251234', 'MARIA FERNANDA VALERIANO PEREZ', 10, 8.6, 10, 9.5, 10, 9);
estudiante2.mostrarDatos();
estudiante2.mostrar();

console.log(estudiante1);
console.log(estudiante2);
