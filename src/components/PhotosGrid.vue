<template>
  <div class="images-grid">
    <div class="item" v-for="(item, index) in items" :key="index">
      <a :href="item.urls.raw" target="_blank">
        <img :src="item.urls.raw">
      </a>
      <p class="info">
        Autor:
        <a :href="item.user.links.html" target="_blank">{{item.user.name}}</a>
        likes: {{item.likes}} ♥️
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PhotosGrid",
  data: function() {
    return {
      items: [],
      erorrs: []
    };
  },
  created() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=13ab8e477065cb9a6df56f89ad91cc9481238d694f26054c62acd40cb2f5fe3d&per_page=21"
      )
      .then(response => {
        this.items = response.data;
      })
      .catch(e => {
        this.erorrs.push(e);
      });
  }
};
</script>
<style lang="scss">
.images-grid {
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding-left: 50px;
  padding-right: 50px;
}
.item img {
  width: 100%;
}
.info {
  background: rgb(228, 228, 228);
  margin-top: -4px;
  font-family: "Montserrat";
  font-weight: 300;
  a {
    color: #42b983;
    text-decoration: none;
    font-weight: 500;
  }
}
</style>
