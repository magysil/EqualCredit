export default () => {
  const viewsAbout = `
    <h5>Aqui va la informacion de que hacemos y testimonios</h5>
    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsAbout;
  return divElement;
};
