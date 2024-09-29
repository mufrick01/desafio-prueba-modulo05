import { AnimalFactory } from './animal/AnimalFactory.js';

let AnimalesRepositorio = [];
const animalFactory = new AnimalFactory();
const modalElement = document.getElementById('exampleModal')
const modal = new bootstrap.Modal(modalElement);

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

      imgAnimal.addEventListener('click', () => {
         const modalBody = modalElement.querySelector('.modal-body')

         modalBody.innerHTML= `     
         <div class="d-flex flex-column text-white p-5">
            <h2>${animal.getNombre()}</h2>
            <img src="/assets/imgs/${animal.getImg()}" class="mx-auto my-3" style="height: 500px; width: 400px;">
            <h4>Edad del animal:</h4>
            <p>${animal.getEdad()}</p>
            <h4>Descripción:</h4>
            <p>${animal.getComentarios()}</p>
           </div>  
         `
         modal.show();
      })


      const button = document.createElement('button');
      button.classList.add('w-100', 'bg-dark', 'd-flex');


      button.addEventListener('click', () => {
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

const ActualizarAnimalPreview=()=>{}

btnRegistrar.addEventListener("click", registrarAnimal)
