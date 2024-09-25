import { Animal } from "./Animal.js";


export class Leon extends Animal {

    constructor(nombre, edad, img, sonido) {
        super(nombre, edad, img, sonido);
    }


    getSonido = () => {
  
        return this.Rugir();
    };

    Rugir() {
        return this.sonido;
    }
}
