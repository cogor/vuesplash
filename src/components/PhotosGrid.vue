<template>
  <div class="images-grid">
    <div v-for="(item, index) in items" :key="index">
      <img :src="item.urls.raw" alt>
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
        "https://api.unsplash.com/photos/?client_id=13ab8e477065cb9a6df56f89ad91cc9481238d694f26054c62acd40cb2f5fe3d"
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 15px;
  margin-top: 15px;
}
img {
  width: 100%;
}
</style>
