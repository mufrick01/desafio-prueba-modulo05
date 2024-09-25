import { Animal } from "./Animal.js";




export class Oso extends Animal {

    constructor(nombre, edad, img, sonido) {
        super(nombre, edad, img, sonido);
    }


    getSonido = () => {
 
        return this.Grunir();
    };

    Grunir() {
        return this.sonido;
    }
}
