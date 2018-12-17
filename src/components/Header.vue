<template>
  <div class="header">
    <input type="text" v-model="inputValue" placeholder="Search free high-resolution photos">
  </div>
</template>
<script>
export default {
  name: "Header",
  data: function() {
    return {
      inputValue: "",
      image:
        "https://images.unsplash.com/photo-1544579880-df63ebd166c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    };
  }
};
</script>
<style lang="scss">
.header {
  height: 35vh;
  display: grid;
  justify-items: center;
  align-items: center;
  background-image: url("../assets/bg-sr.jpg");
  background-position: center center;
  background-size: cover;
}
input {
  width: 50vw;
  border-radius: 5px;
  border: 0;
  height: 45px;
  font-family: "Montserrat";
  font-weight: 300;
  color: dimgray;
  padding-left: 15px;
}
</style>
