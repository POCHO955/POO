// class GYM{
// peso:number;
// estatura:number;
// constructor(peso:number, estatura:number){
//     this.peso=peso;
//     this.estatura=estatura;
// }
// public IMC(): void{
//     let estado;
//     let imc= (this.peso/(this.estatura*this.estatura));
//     console.log("El IMC es de: "+imc)

//     if(imc< 18.5){
//         estado="bajo peso";
    
//     }else if(imc>=18.5 && imc <=24.9){
//         estado="Normal";
//     }else if(imc>=25 && imc <=29.9){
//         estado="sobre peso";
//     }else if(imc>=30){
//         estado="Obesidad";
//     }
//     //Interpretación del IMC en adultos 
//     //Bajo peso: Menos de 18.5.
//     //Peso saludable (Normal): 18.5 – 24.9.
//     //Sobrepeso: 25.0 – 29.9.
//     //Obesidad: 30.0 o más.   
 //}
 //}

// let cliente = new GYM(48,1.5);
// cliente.IMC();




// class conversor{
// temp:number;
// constructor(temp:number){
//     this.temp=temp;

// }
// public FC(): void {
//     //f°-32/1.8
// }
// public CF(): void {
//     //C°=5/9(F°-32)
// }
// public KF(): void {
//     //°F=(K-273.15)9/5+32
// }
// public KC(): void {
//   //K-273.15   
// }
// }

// let aire = new conversor(45);


class Instituto {
    nombre: string;
    infraccion: number;
    total: number = 0;
    descripcion: string = "";

    constructor(nombre: string, infraccion: number) {
        this.nombre = nombre;
        this.infraccion = infraccion;
        this.calcularSancion();
    }

    private calcularSancion(): void {
        switch (this.infraccion) {
            case 1:
                this.descripcion = "Llegada tardía";
                this.total = 1;
                break;
            case 2:
                this.descripcion = "Caminar por los pasillos en horas de clase";
                this.total = 3;
                break;
            case 3:
                this.descripcion = "No andar vestimenta apropiada";
                this.total = 5;
                break;
            case 4:
                this.descripcion = "No hacer uso adecuado de las instalaciones";
                this.total = 10;
                break;
            default:
                this.descripcion = "Infracción no válida";
                this.total = 0;
        }
    }

    public mostrarMensaje(): void {
        if (this.total > 0) {
            console.log(
                `Estudiante: ${this.nombre}\n` +
                `Infracción: ${this.descripcion}\n` +
                `Total a cancelar: $${this.total}`
            );
        } else {
            console.log("No se aplicó ninguna sanción.");
        }
    }
}

let estudiante1 = new Instituto("JEFFERSON REQUENO", 3);
estudiante1.mostrarMensaje();


