<template>
  <div class="infoUserWrapper">
     {{id}}es
    <div class="infoUserContainer">
      <div class="welcomeText">
        <h2 class="welcomeTitle">Te damos la bienvenida, gracias por tu participación</h2>
        <p class="welcomeText">Antes de comenzar la encuesta, por favor llene el formulario.<br>
        Tus datos personales serán confidenciales.</p>
      </div>
      <div class="dataForm">
        <form>
          <div class="formTitle">
            <h3 class="formTitleText">Datos generales de la empresa</h3>
          </div>
          <div class="formLayout">
            <p>Todos los campos son obligatorios</p>
            <p>
              <label for="companyName">Razón Social</label><br>
              <input
                id="companyName"
                v-model="companyName"
                type="text"
                name="companyName"
                placeholder="Escriba aquí"
              >
            </p>
            <p>
              <label for="contact">
                Nombre de la persona que proporciona los datos</label><br>
              <input
                id="contact"
                v-model="contact"
                type="text"
                name="contact"
                placeholder="Escriba aquí"
              >
            </p>
            <p>
              <label for="position">Cargo</label><br>
              <input
                id="position"
                v-model="position"
                type="text"
                name="position"
                placeholder="Escriba aquí"
              >
            </p>
            <p>
              <label for="email">Correo electrónico</label><br>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                placeholder="Escriba aquí"
              >
            </p>
            <p>
              <label for="phone">Teléfono/ Celular</label><br>
              <input
                id="phone"
                v-model="phone"
                type="number"
                name="phone"
                placeholder="Escriba aquí"
              >
            </p>
            <p>
              <label for="annualRevenue">
                Volúmen de facturación anual US$ (Opcional)</label><br>
              <input
                id="annualRevenue"
                v-model="annualRevenue"
                type="number"
                name="annualRevenue"
                placeholder="Escriba aquí"
              >
            </p>
            <p>
              <label>Sector de actividad</label><br>
              <select v-model="selectedActivity">
                <option disabled value="">Seleccione</option>
                <option>Primario</option>
                <option>Secundario o Industrial</option>
                <option>Terciario o de Servicios</option>
              </select>
            </p>
            <p>
              <label>Orígen del capital</label><br>
              <select v-model="selectedCapitalOrigen">
                <option disabled value="">Seleccione</option>
                <option>Nacional</option>
                <option>Extranjero</option>
                <option>Mixto</option>
                <option>Estatal</option>
              </select>
            </p>
            <div class="center">
              <button
              class="saveDataBtn"
              type="button"><router-link class="saveDataBtn"
               :to="'/' + 'empresa' + '/' + this.id + '/' + 'moduleOne'">
              SIGUIENTE</router-link></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';

console.log(db);
export default {
  name: 'InfoUser',
  props: ['id'],
  data() {
    return {
      selectedActivity: '',
      selectedCapitalOrigen: '',
      companyName: '',
      contact: '',
      position: '',
      email: '',
      phone: '',
      annualRevenue: '',
    };
  },
  // firestore: {
  //   collectionCompanies: db.collection('clientes'),
  // },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800&display=swap');

.infoUserWrapper {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
}
.infoUserContainer {
  width: 60%;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.welcomeText {
  color: #707070;
  text-align: center;
}
.welcomeTitle {
  font-style: normal;
  font-weight: lighter;
  font-size: 32px;
  line-height: 149.8%;
}
.welcomeText {
  margin-top: 30px;
  font-size: 18px;
}
.dataForm {
  width: 70%;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: #F7F7F7;
}
.formTitle {
  width: 100%;
  height: 40px;
  background-color: #4577C9;
}
.formTitleText {
  line-height: 40px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
}
.formLayout {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  font-size: 14px;
}
.formLayout p {
  padding-top: 10px;
  padding-bottom: 10px;
}
form label {
  padding-left: 10px;
}
form input,
form select {
  width: 100%;
  height: 36px;
  margin-top: 10px;
  padding: 5px 20px;
  border: 1px solid #a3a2a2;
  border-radius: 6px;
  color: #5a5858;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.saveDataBtn {
  width: 116px;
  height: 40px;
  margin-top: 43px;
  margin-bottom: 60px;
  color: white;
  background-color: #D04A02;
  border: none;
  border-radius: 6px;
  text-decoration: none;
}
.saveDataBtn:hover,
.saveDataBtn:active,
.saveDataBtn:visited,
.saveDataBtn:link {
  color: white;
  background-color: #D04A02;
  text-decoration: none;
}
</style>
