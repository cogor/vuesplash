<template>
  <div>
    <div class="header" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
      <div class="inform">
        <h1>
          <span>Vue</span>Splash
        </h1>
        <p>Beautiful, free photos.
          <br>Gifted by the world’s most generous community of photographers. 🎁
        </p>
      </div>
      <input
        type="text"
        v-model="query"
        @keyup.enter="search"
        placeholder="Search free high-resolution photos"
      >
    </div>
    <div class="images-grid" v-show="newest">
      <masonry :cols="3" :gutter="10">
        <div class="item" v-for="(item, index) in items" :key="index">
          <img :src="item.urls.regular">
          <div class="likes">
            <img src="../assets/like.svg" alt>
            {{item.likes}}
          </div>
          <div class="autor-info">
            <a :href="item.user.links.html">
              <img class="autor-img" target="_blank" :src="item.user.profile_image.medium" alt>
            </a>
            <span>
              <a :href="item.user.links.html" target="_blank">{{item.user.name}}</a>
            </span>
          </div>
        </div>

        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </masonry>
    </div>
    <div class="search-grid" v-show="searching">
      <masonry :cols="3" :gutter="10">
        <div class="item" v-for="(item, index) in search_items" :key="index">
          <img :src="item.urls.regular">
          <div class="likes">
            <img src="../assets/like.svg" alt>
            {{item.likes}}
          </div>
          <div class="autor-info">
            <a :href="item.user.links.html">
              <img class="autor-img" target="_blank" :src="item.user.profile_image.medium" alt>
            </a>
            <span>
              <a :href="item.user.links.html" target="_blank">{{item.user.name}}</a>
            </span>
          </div>
        </div>
        <!-- <infinite-loading @infinite="infiniteSearch"></infinite-loading> -->
      </masonry>
      <p
        class="notice"
      >Infinite load does not work due to limitations of the Unsplash API demo mode 😭</p>
    </div>
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
      query: "",
      image: "",
      search_items: [],
      newest: true,
      searching: false
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
    },
    infiniteSearch($state) {
      axios
        .get("https://api.unsplash.com/search/photos", {
          params: {
            client_id:
              "13ab8e477065cb9a6df56f89ad91cc9481238d694f26054c62acd40cb2f5fe3d",
            query: this.query,
            page: this.page
          }
        })
        .then(response => {
          this.page += 1;
          this.search_items = this.search_items.concat(response.data);
          $state.loaded();
        });
    },
    search() {
      this.searching = true;
      this.newest = false;
      console.log("Search started");
      axios
        .get("https://api.unsplash.com/search/photos", {
          params: {
            client_id:
              "13ab8e477065cb9a6df56f89ad91cc9481238d694f26054c62acd40cb2f5fe3d",
            query: this.query,
            page: this.page
          }
        })
        .then(response => {
          this.search_items = response.data.results;
        })
        .catch(e => {
          this.erorrs.push(e);
        });
    }
  },
  created() {
    axios
      .get("https://api.unsplash.com/photos", {
        params: {
          client_id:
            "13ab8e477065cb9a6df56f89ad91cc9481238d694f26054c62acd40cb2f5fe3d"
        }
      })
      .then(response => {
        this.items = response.data;
      })
      .catch(e => {
        this.erorrs.push(e);
      }),
      axios
        .get("https://api.unsplash.com/photos/random", {
          params: {
            client_id:
              "13ab8e477065cb9a6df56f89ad91cc9481238d694f26054c62acd40cb2f5fe3d"
          }
        })
        .then(response => {
          this.image = response.data.urls.regular;
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
.search-grid {
  margin-top: 15px;
  padding-left: 50px;
  padding-right: 50px;
  .notice {
    font-size: 18px;
    font-family: "Montserrat";
    font-weight: 300;
    text-align: center;
  }
}
.item {
  position: relative;
  &:hover {
    img {
      filter: brightness(80%);
    }
  }
  margin-bottom: 15px;
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
  .likes {
    visibility: hidden;
  }
  &:hover {
    .likes {
      visibility: visible;
    }
    .autor-info {
      visibility: visible;
    }
  }
  .autor-info {
    position: absolute;
    left: 10px;
    bottom: 10px;
    visibility: hidden;
    display: flex;
    justify-items: start;
    align-items: center;
    img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      cursor: pointer;
    }
    a {
      color: #fff;
      font-family: "Montserrat";
      font-size: 20px;
      line-height: 18px;
      font-weight: 300;
      text-decoration: none;
    }
    span {
      margin-left: 15px;
    }
  }
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
  img {
    height: 18px;
    width: 18px;
    padding-right: 3px;
    margin-top: -2px;
  }
}
img {
  height: 100%;
  width: 100%;
  cursor: zoom-in;
}
</style>
