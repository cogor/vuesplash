<template>
  <div class="home">
    <Panel/>
    <Header/>
    <PhotosGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import PhotosGrid from "@/components/PhotosGrid";
import Panel from "@/components/Panel";

export default {
  name: "home",
  components: {
    Header,
    PhotosGrid,
    Panel
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Ubuntu:400,500,700");
</style>

