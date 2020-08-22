export default () => {
    const viewsNotFound = `
      <h1>Credito aprobado</h1>
      `;
    const divElement = document.createElement("div");
    divElement.innerHTML = viewsNotFound;
    return divElement;
  };