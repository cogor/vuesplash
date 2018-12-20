<template>
  <div class="images-grid">
    <masonry :cols="3" :gutter="10">
      <div
        class="item"
        v-for="(item, index) in items"
        :key="index"
        @mouseover="showInfo = true"
        @mouseleave="showInfo = false"
      >
        <img :src="item.urls.regular">
        <div class="likes" v-show="showInfo">
          <svg
            version="1.1"
            id="heart"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            style="enable-background:new 0 0 50 50;"
            xml:space="preserve"
          >
            <path
              style="fill:#D75A4A;"
              d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
            ></path>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          {{item.likes}}
        </div>
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
      page: 2,
      showInfo: false
    };
  },
  methods: {
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
  margin-bottom: 15px;
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
.item {
  position: relative;
}
.likes {
  display: flex;
  position: absolute;
  top: 5px;
  right: 10px;
  background: rgb(231, 231, 231);
  border-radius: 7px;
  align-items: center;
  padding: 8px 15px;
  font-size: 15px;
  color: #727272;
  font-weight: 300;
  font-family: "Montserrat";
  cursor: pointer;
}
img {
  height: 100%;
  width: 100%;
  cursor: zoom-in;
}
#heart {
  height: 18px;
  width: 18px;
  padding-right: 3px;
  margin-top: -2px;
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
