import { Animal } from "./Animal.js";




export class Aguila extends Animal {

    constructor(nombre, edad, img, sonido) {
        super(nombre, edad, img, sonido);
    }


    getSonido = () => {
        return this.Chillar();
    };

    Chillar() {
        return this.sonido;
    }
}
