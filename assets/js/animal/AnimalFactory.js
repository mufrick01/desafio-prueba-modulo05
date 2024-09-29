import { Leon } from "./Leon.js";
import { Lobo } from "./Lobo.js";
import { Aguila } from "./Aguila.js";
import { Oso } from "./Oso.js";
import { Serpiente } from "./Serpiente.js";



export class AnimalFactory {

    constructor() {       
        this.animalList = [];
        this.getAnimalListFromApi();
    }


    async create(nombre, edad, comentarios) {
        const animalFiltradoFromList = this.animalList.find(a=>a.name===nombre)
        
        const{name,imagen,sonido}= animalFiltradoFromList;


        if(name==="Leon"){
            const animal = new Leon(name,edad,imagen,sonido)
            animal.setComentarios(comentarios);
            return animal;
        }
        if(name==="Lobo"){
            const animal = new Lobo(name,edad,imagen,sonido)
            animal.setComentarios(comentarios);
            return animal;
        }
        if(name==="Aguila"){
            const animal = new Aguila(name,edad,imagen,sonido)
            animal.setComentarios(comentarios);
            return animal;
        }
        if(name==="Oso"){
            const animal = new Oso(name,edad,imagen,sonido)
            animal.setComentarios(comentarios);
            return animal;
        }
        if(name==="Serpiente"){
            const animal = new Serpiente(name,edad,imagen,sonido)
            animal.setComentarios(comentarios);
            return animal;
        }

        return null;
        
    }
    
    
    getAnimalListFromApi= async()=>{
        try {
            const resp = await fetch('../animales.json')
            const res = await resp.json();
            this.animalList = res.animales;
        } catch (error) {
            throw new Error(error);
        }
    }
}