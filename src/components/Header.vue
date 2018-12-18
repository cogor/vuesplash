<template>
  <div class="header">
    <div class="inform">
      <h1>
        <span>Vue</span>Splash
      </h1>
      <p>Beautiful, free photos.
        <br>Gifted by the world’s most generous community of photographers. 🎁
      </p>
    </div>
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
  justify-items: start;
  justify-content: center;
  align-items: flex-start;
  background-image: url("../assets/bg-sr.jpg");
  background-position: center center;
  background-size: cover;
}
h1 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: left;
  text-align-last: left;
  span {
    color: #42b983;
  }
  color: #fff;
  font-family: "Ubuntu";
  font-weight: bold;
  font-size: 32px;
}
p {
  text-align: left;
  color: #fff;
  font-family: "Ubuntu";
  font-weight: 500;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 10px;
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
  outline: none;
  border: 2px solid #fff;
  transition: all 0.3s;
  &:focus {
    border: 2px solid #42b983;
  }
}
.inform {
  align-self: flex-end;
  align-items: flex-end;
  align-content: flex-end;
  justify-items: flex-start;
  justify-content: start;
  text-align: left;
}
</style>
