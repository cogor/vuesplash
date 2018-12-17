<template>
  <div class="home">
    <Header/>
    <PhotosGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import PhotosGrid from "@/components/PhotosGrid";

export default {
  name: "home",
  components: {
    Header,
    PhotosGrid
  }
};
</script>
