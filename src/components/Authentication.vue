<template>
  <div class="form-auth">
    <img class="pwc-logo" src="../assets/pwc-logo.png" alt="" />
    <h6>Te damos la bienvenida</h6>
    <h2>Ingrese a su cuenta</h2>
    <form @submit.prevent="login">
      <label for="mail">Usuario o correo</label>
      <input v-model="usuario" id="mail" type="text" placeholder="usuario" />
      <label for="password">Contraseña</label>
      <input v-model="userPassword" id="password" type="password" placeholder="contraseña" />
      <a href="#">Olvidé mi contraseña</a>
      <input type="submit" value="Ingresar" />
    </form>
    <pre>
       {{$data}}
    </pre>
  </div>
</template>

<script>
import { fb } from '../firebase';

export default {
  data() {
    return {
      usuario: '',
      userPassword: '',
      user: '',
    };
  },
  methods: {
    login() {
      fb
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.userPassword)
        .then(() => this.$router.replace('Report'), (error) => console.log(error));
    },
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800&display=swap");

.form-auth {
  width: 50vw;
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
}
.pwc-logo {
  height: 199px;
  width: 265px;
}
</style>
