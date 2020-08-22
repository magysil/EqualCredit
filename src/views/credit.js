import DB from "../../data/data.js";
export default () => {
  const viewsProyect = /*html*/ `
        <div class='container'>
          <form>
            <div class="row">
              <div class="col">
              </div>
              <div class="col">
                <div id="inputRut" class="form-group">
                  <div class="form-group">
                    <label class="col-form-label mb-0" for="inputDefault">Ingresa tu RUT:</label>
                  </div>
                  <div class="form-inline">
                    <input id="txt_rut" type="text" class="form-control col-8" placeholder="11111111-1">
                    <button id="btnvalida" type="button" class="btn btn-primary ml-3">Evaluar</button>
                  </div>
                </div>
              </div>
              <div class="col">
              </div>
            </div>
          </form>
          <div id="formValid">
            <form>
              <div class="row">
                <div class="col">
                  <label class="col-form-label" for="inputDefault">RUT:</label>
                  <input id="txt_rut_valid" type="text" class="form-control" disabled>
                </div>
                <div class="col">
                </div>
              </div>
            </form>
            <form>
              <div class="row">
                <div class="col">
                  <label class="col-form-label" for="inputDefault">Nombre:</label>
                  <input id="txt_name_valid" type="text" class="form-control" disabled>
                </div>
                <div class="col">
                  <label class="col-form-label" for="inputDefault">Apellido Paterno:</label>
                  <input id="txt_lastname1_valid" type="text" class="form-control" disabled>
                </div>
              </div>
            </form>
            <form>
              <div class="row">
                <div class="col">
                  <label class="col-form-label" for="inputDefault">Apellido Materno:</label>
                  <input id="txt_lastname2_valid" type="text" class="form-control" disabled>
                </div>
                <div class="col">
                  <label class="col-form-label">Fecha de nacimiento:</label>
                  <input id="txt_date_valid" class="form-control" type="text" disabled>
                </div>
              </div>
            </form>
            <form>
              <div class="row">
                <div class="col">
                  <label class="col-form-label">Monto a solicitar:</label>
                  <input id="txt_credit_valid" type="text" class="form-control">
                  <small id="label_top_credit" class="form-text text-muted">Monto Máximo Otorgado: $ 6.000.000</small>
                </div>
                <div class="col">
                  <label class="col-form-label">Cantidad de cuotas:</label>
                  <select class="form-control col-5" id="exampleSelect1">
                    <option>12 Meses</option>
                    <option>24 Meses</option>
                    <option>36 Meses</option>
                    <option>48 Meses</option>
                  </select>
                </div>
              </div>
            </form>
            <button id='btn_sendInfo' type="button" class="btn btn-primary btn-lg mt-3">Ver Crédito</button>
          </div>
        </div>
    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewsProyect;
  const btnEvaluar = divElement.querySelector("#btnvalida");
  const txt_rut = divElement.querySelector("#txt_rut");
  const formValid = divElement.querySelector("#formValid");
  const inputRut = divElement.querySelector("#inputRut");

  const rut = divElement.querySelector("#txt_rut_valid");
  const nombre = divElement.querySelector("#txt_name_valid");
  const apellido1 = divElement.querySelector("#txt_lastname1_valid");
  const apellido2 = divElement.querySelector("#txt_lastname2_valid");
  const fecha = divElement.querySelector("#txt_date_valid");
  const datos = DB;
  formValid.style.display = "none";
  let a = 0;
  let i = 0;
  btnEvaluar.addEventListener("click", (event) => {
    event.preventDefault();
    if (Fn.validaRut(txt_rut.value)) {
      datos.forEach((dato) => {
        if (txt_rut.value === dato.rut) {
          console.log("el usuario se encuentar en la base de datos");
          console.log(datos[i].name);
          formValid.style.display = "block";
          inputRut.style.display = "none";
          rut.value = datos[i].rut;
          nombre.value = datos[i].name;
          apellido1.value = datos[i].lastName1;
          apellido2.value = datos[i].lastName2;
          fecha.value = datos[i].dateBirth;

        }else{
          i++;
          a++;
          if (a === datos.length){
            alert("El Rut Ingresado no se encuentar en la base de datos");
          }
        }
      });
    } else {
      alert("El Rut no es válido");
      formValid.style.display = "none";
    }
  });

  let Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
      rutCompleto = rutCompleto.replace("‐", "-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];
      if (digv == "K") digv = "k";

      return Fn.dv(rut) == digv;
    },
    dv: function (T) {
      var M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    },
  };

  return divElement;
};
