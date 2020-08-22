export default () => {
  const viewsHome = /*html*/ `

  
  <!-- <div class="container-banner">
      <div class="image-widescreen">
        <img src="img/banner1.jpg"/ class="img-fluid" style="padding-top:1px;">
      </div>
  </div> -->

  <header class="py-5 bg-image-full" style="background-image: url('img/banner1.jpg');">
  <p class="text-over">EL SISTEMA AUTOMATIZADO
  MÁS INNOVADOR DEL MERCADO, DONDE TODOS CUENTAN</p>
  </header>


  <div class="container">
        <div class="row" style="margin:50px 0 50px 0;">
            <div class="col" id="text-style">
                EqualCredit te permite acceder a créditos de manera igualitaria; evaluamos tus datos reales sin importar quién eres y de manera automática te indicaremos si puedes optar a este beneficio, el cual permitirá abrirte puertas a todo lo que deseas.
            </div>
            <div class="col">
                VIDEO
            </div>
        </div>
    </div>

   
  <div class="py-5 bg-image-full" style="background-image: url('img/home_image.jpeg');">
    <a href="#/credit" class="btn btn-info button_class">Pide tu crédito</a>
    <div style="height: 200px;"></div>
  </div> 

  
    `;
    
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsHome;
  return divElement;
};
