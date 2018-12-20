<template>
  <div id="app">
    <router-view/>
    <div class="badge">
      This project created with Vue.js and
      <a href="https://unsplash.com">Unsplash</a> API
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.badge {
  position: fixed;
  padding-top: 5px;
  padding-bottom: 5px;
  bottom: 0;
  background: #42b983;
  color: #fff;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 300;
  width: 100%;
  a {
    color: #fff;
    &:hover {
      color: #fff;
      opacity: 0.9;
    }
  }
}
</style>
