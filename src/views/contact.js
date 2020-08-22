export default () => {
  const viewsContact = /*html*/ `
  
  <div class="text-center">
    <img class="rounded mx-auto d-block mb-3" width="145" src="./img/logoContacto.png"/>
    <h5 class='mb-1'>Servicio al Cliente</h5>
    <h6 class='mb-1'>Teléfono</h6>
    <h6 class='mb-1'>600 638 6380</h6>
    <h6 class='mb-1'>Desde celulares</h6>
    <h6 class='mb-1'>+56 2 26612700</h6>
    <h6 class='mb-1'>Escríbenos</h6>
    <h6 class='mb-1'>Horario de Atención y días Contacto Telefónico:</h6>
    <h6 class='mb-1'>Lunes a domingo de 8:00 a 22:00 hrs.</h6>
  </div>
    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsContact;
  return divElement;
};
