<template>
  <div class="InstructionBoardWrapper">
    <div class="board">
      <div class="info"></div>
      <p class="instructionText"><span class="bold">Instrucciones:</span> Lea
      cuidadosamente las preguntas, recuerde colocar correctamente la moneda
      solicitada. En muchos de los casos, cuando se solicita el detalle en el
      recuadro "especificar" se debe escribir en la primera celda. Cuando no
      aplique una práctica por favor responder con una X en la opción "NO".</p>
      <div class="close"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructionBoard',
};
</script>

<style scoped lang="scss">
.InstructionBoardWrapper {
  width: 100%;
}
.board {
  border: 1px solid #4577C9;
  border-left: 5px solid #4577C9;
  padding: 10px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.bold {
  font-weight: bold;
}
.info,
.close {
  width: 2%;
  height: 55px;
}
.info {
  margin-top: 20px;
  margin-right: 15px;
  background-image: url(../assets/infoIcon.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
.close {
  margin-top: 40px;
  margin-left: 20px;
  background-image: url(../assets/closeIcon.jpg);
  background-size: 70%;
  background-repeat: no-repeat;
}
.instructionText {
  width: 94%;
  font-size: 16px;
}
</style>
