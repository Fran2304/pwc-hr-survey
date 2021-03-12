<template>
  <div class="graphs">
    <h2>Investigación: Políticas y prácticas de recursos humanos</h2>
    <br>
    <div class="table-input">
          <table class="responsive-table-input-matrix">
        <tr>
          <th>200</th>
          <th>28/02/2021</th>
          <th>12/03/2020</th>
        </tr>
        <tr>
          <td>Total de encuesta</td>
          <td>Inicio de campaña</td>
          <td>Fin de campaña</td>
        </tr>
      </table>
    </div>
    <br>
    <h4>Informes</h4>
    <div class="options">
      <img src="../assets/documentos.png" alt="">
      <img src="../assets/graficos.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.graphs {
  margin: 54px 96px 0 96px;
}
h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 149.8%;
  color: #585858;
}
.table-input {
  display: flex;
  justify-content: start;
  color: #585858;
}

.responsive-table-input-matrix {
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
  line-height: 149.8%;
}

td {
  padding: 5px 30px;
}

th {
  padding: 5px 30px;
}

h4 {
  //styleName: H4;
font-family: Raleway;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
}

.options img{
  height: 150px;
width: 150px;
left: 302px;
top: 326px;
border-radius: 0px;

}
</style>
