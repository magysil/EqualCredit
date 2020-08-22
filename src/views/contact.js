export default () => {
  const viewsContact = `
  <h5>Aqui va la informacion de contactos</h5>
    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsContact;
  return divElement;
};
