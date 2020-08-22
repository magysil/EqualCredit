export default () => {
  const viewsProyect = `
  <h5>Aqui va la informacion de creditos</h5>
    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsProyect;
  return divElement;
};
