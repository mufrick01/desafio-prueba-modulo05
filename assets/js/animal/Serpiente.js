import { Animal } from "./Animal.js";




export class Serpiente extends Animal {

    constructor(nombre, edad, img, sonido) {
        super(nombre, edad, img, sonido);
    }


    getSonido = () => {
        return this.Sisear();
    };

    Sisear() {
        return this.sonido;
    }
}
