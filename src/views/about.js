export default () => {
  const viewsAbout = /*html*/ `
<div class='container'>


  <div class="row">
    <div class="col-sm about-text">
    <i class="fas fa-users" id="icono"></i>
    <div class="text-center" style="margin-top:22px;">Somos una aplicación web que otorga créditos automatizados, solo tomando datos que realmente importan para poder brindarle oportunidad a todos por igual.</div>
    </div>
    
    <div class="col-sm about-text">
    <i class="fab fa-font-awesome-flag" id="icono"></i>
    <div class="text-center" style="margin-top:22px;">Tenemos como misión darles la oportunidad a todos de surgir, brindar beneficios sin tener ningún prejuicio, ofreciendo un sistema financiero igualitario.</div>
    </div>

    <div class="col-sm about-text">
    <i class="fas fa-hands-helping" id="icono"></i>
    <div class="text-center" style="margin-top:22px;">Los valores de EqualCredit están fundados en la igualdad de oportunidades, en la inclusión y  empatía, en la cooperación, justicia, respeto, solidaridad y tolerancia.</div>
    </div>
</div>

<div class="row">
<div class="col-md-4" style="margin:50px 0 20px 0;"><p class="testim-title">Testimonios Exitosos</p></div>
</div>

<div class="row" style="margin-bottom:100px;">

<div class="col-sm">
        <div class="card">
            <div class="card-img-top">
                <img class="img-fluid" src="img/testi1.jpeg" alt=""></div>
            <div class="card-block about-text" style="border:1px solid #cecece;">
                <p class="card-text">Gracias a EqualCredit obtuve un crédito que me permitió crecer económicamente ya que pude invertir y realizar mi emprendimiento.</p>
                <p><i>María Teresa Parra, 41 años.</i></p>
                    <a class="btn btn-primary button_quote">
                    <i class="fas fa-quote-left"></i></a>
            </div>
        </div>
    </div>

    <div class="col-sm">
    <div class="card">
        <div class="card-img-top">
            <img class="img-fluid" src="img/testi2.jpeg" alt=""></div>
            <div class="card-block about-text" style="border:1px solid #cecece;">
            <p class="card-text">Con la oportunidad que me dio EqualCredit pude crear mi propio negocio, y con eso sentirme realizada como mujer y mamá.</p>
            <p><i>Carmen Pérez, 35 años.</i></p>
            <a class="btn btn-primary button_quote">
            <i class="fas fa-quote-left"></i></a>
        </div>
    </div>
</div>

    <div class="col-sm">
        <div class="card">
            <div class="card-img-top">
                <img class="img-fluid" src="img/testi3.jpeg" alt=""></div>
            <div class="card-block about-text" style="border:1px solid #cecece;">
            <p class="card-text">Por ser joven y mujer me cerraron algunas puertas, pero gracias a EqualCredit me dieron esa facilidad sin cuestionar mi capacidad de pago.</p>
            <p><i>Constanza Peña, 25 años.</i></p>
                    <a class="btn btn-primary button_quote">
                    <i class="fas fa-quote-left"></i></a>
            </div>
        </div>
    </div>

</div>

</div>

    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsAbout;
  return divElement;
};
