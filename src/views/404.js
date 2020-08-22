export default () => {
    const viewsNotFound = `
      <h1>Pagina no existe</h1>
      `;
    const divElement = document.createElement("div");
    divElement.innerHTML = viewsNotFound;
    return divElement;
  };