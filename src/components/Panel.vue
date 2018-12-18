<template>
  <div class="panel">
    <div>
      <span>Vue</span>Splash
    </div>
    <div class="git">
      <a href="https://github.com/cogor/vuesplash" target="_blank" rel="noopener noreferrer">
        <img src="../assets/github.svg" alt>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Panel"
};
</script>
<style lang="scss">
.panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-content: center;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
  span {
    color: #42b983;
  }
  color: #000;
  font-family: "Ubuntu";
  font-weight: bold;
  font-size: 32px;
  img {
    max-height: 35px;
    max-width: 35px;
  }
}
.git {
  display: flex;
  align-self: center;
  justify-self: flex-end;
  cursor: pointer;
  font-size: 0;
}
</style>
