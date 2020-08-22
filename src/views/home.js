export default () => {
  const viewsHome = `
  <h5>Aqui va la informacion de home</h5>
  
    `;
    
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsHome;
  return divElement;
};
