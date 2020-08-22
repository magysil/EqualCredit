export default () => {
  const viewsHome = `
  <div class="container">
        <div class="row">
            <div class="col" id="text-style">
                EqualCredit te permite acceder a créditos de manera igualitaria; evaluamos tus datos reales sin importar quién eres y de manera automática te indicaremos si puedes optar a este beneficio que permitirá abrirte puertas para todo lo que deseas.
            </div>
            <div class="col">
                VIDEO
            </div>
        </div>
        
    </div>
  
    `;
    
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsHome;
  return divElement;
};
