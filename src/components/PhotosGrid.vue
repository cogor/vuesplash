<template>
  <div class="images-grid">
    <masonry :cols="3" :gutter="10">
      <div class="item" v-for="(item, index) in items" :key="index">
        <a :href="item.urls.raw" target="_blank">
          <img :src="item.urls.regular">
        </a>
        <p class="info">
          Autor:
          <a :href="item.user.links.html" target="_blank">{{item.user.name}}</a>
          likes: {{item.likes}} ♥️
        </p>
      </div>

      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </masonry>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueMasonry from "vue-masonry-css";
import InfiniteLoading from "vue-infinite-loading";
Vue.use(VueMasonry);
Vue.use(InfiniteLoading);
export default {
  name: "PhotosGrid",
  data: function() {
    return {
      items: [],
      erorrs: [],
      page: 1
    };
  },
  methods: {
    loadMore: function() {
      this.count++;
      axios
        .get("https://api.unsplash.com/photos", {
          params: {
            client_id:
              "d902e77395c5914d7afe282dfdf4779d3435686cfc4fc98baa9eaa1dfb18d8fd",
            page: this.page
          }
        })
        .then(response => {
          this.items = this.items.concat(response.data);
        })
        .catch(e => {
          this.erorrs.push(e);
        });
    },
    infiniteHandler($state) {
      axios
        .get("https://api.unsplash.com/photos", {
          params: {
            client_id:
              "17143180d187328ba40710420aab0502eaf5393211e1f7666edf0a258b7c88fc",
            page: this.page
          }
        })
        .then(response => {
          this.page += 1;
          this.items = this.items.concat(response.data);
          $state.loaded();
        });
    }
  },
  created() {
    axios
      .get("https://api.unsplash.com/photos", {
        params: {
          client_id:
            "17143180d187328ba40710420aab0502eaf5393211e1f7666edf0a258b7c88fc"
        }
      })
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
.load {
  border: 1px solid #42b983;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 24px;
  margin-bottom: 10px;
  background: #fff;
  color: #42b983;
  cursor: pointer;
  outline: none;
}
.images-grid {
  margin-top: 15px;
  padding-left: 50px;
  padding-right: 50px;
}
img {
  height: 100%;
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
  p {
    color: #393939;
  }
}
</style>
