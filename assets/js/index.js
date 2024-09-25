import { AnimalFactory } from './animal/AnimalFactory.js';

let AnimalesRepositorio = [];
const animalFactory = new AnimalFactory();

const btnRegistrar = document.querySelector("#btnRegistrar");


const ActualizarTablaEnVista = () =>{}

const registrarAnimal = async () =>{
   const animalName = document.querySelector("#animal").value;
   const edad = document.querySelector("#edad").value;
   const comentarios = document.querySelector("#comentarios").value;
   
   const newAnimal = await animalFactory.create(animalName, edad, comentarios);
   
   if(!newAnimal){return}
   AnimalesRepositorio.push(newAnimal)

   AnimalesRepositorio.map((animal)=>console.log(animal))

   ActualizarTablaEnVista();
}

btnRegistrar.addEventListener("click", registrarAnimal)
