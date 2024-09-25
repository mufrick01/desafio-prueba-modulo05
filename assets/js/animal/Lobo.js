import { Animal } from "./Animal.js";


export class Lobo extends Animal {

    constructor(nombre, edad, img, sonido) {
        super(nombre, edad, img, sonido);
    }


    getSonido = () => {
  
        return this.Aullido();
    };

    Aullido() {
        return this.sonido;
    }
}
