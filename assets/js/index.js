import { AnimalFactory } from './animal/AnimalFactory.js';

let AnimalesRepositorio = [];
const animalFactory = new AnimalFactory();

const btnRegistrar = document.querySelector("#btnRegistrar");


const ActualizarTablaEnVista = () => {
   const tablaAnimales = document.querySelector('#Animales')
   tablaAnimales.innerHTML = '';
   if (AnimalesRepositorio.length === 0) { return }

   AnimalesRepositorio.map((animal) => {

      const containerDiv = document.createElement('div');
      containerDiv.classList.add('d-flex', 'flex-column');

      const imgAnimal = document.createElement('img');
      imgAnimal.src = `/assets/imgs/${animal.getImg()}`;
      imgAnimal.alt = '';
      imgAnimal.width = 200;
      imgAnimal.height = 300;

      
      const button = document.createElement('button');
      button.classList.add('w-100', 'bg-dark', 'd-flex');


      button.addEventListener('click',()=>{
         const playerAudio = document.querySelector('#player')
         playerAudio.src = `/assets/sounds/${animal.getSonido()}`
         playerAudio.play();
      })
      
      const audioImg = document.createElement('img');
      audioImg.src = '/assets/imgs/audio.svg';
      audioImg.alt = '';
      audioImg.classList.add('mx-auto');
      audioImg.style.height = '50px';  // Asignar la altura
      
      containerDiv.appendChild(imgAnimal);
      button.appendChild(audioImg);
      containerDiv.appendChild(button);


      tablaAnimales.appendChild(containerDiv);

   })

}

const registrarAnimal = async () => {
   const animalName = document.querySelector("#animal").value;
   const edad = document.querySelector("#edad").value;
   const comentarios = document.querySelector("#comentarios").value;

   const newAnimal = await animalFactory.create(animalName, edad, comentarios);

   if (!newAnimal) { return }
   AnimalesRepositorio.push(newAnimal)

   AnimalesRepositorio.map((animal) => console.log(animal))

   ActualizarTablaEnVista();
}

btnRegistrar.addEventListener("click", registrarAnimal)
