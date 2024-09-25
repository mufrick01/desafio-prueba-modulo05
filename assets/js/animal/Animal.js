


export class Animal {


    constructor(nombre, edad, img, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentario = "";
        this.sonido = sonido;
    }

    getNombre = () => this.nombre;
    getEdad = () => this.edad;
    getImg = () => this.img;
    setComentarios = (value) => this.comentarios = value;
    getComentarios = () => this.comentarios;
    getSonido = () => { throw new Error('sonido no implementado en clase concreta') }

}


