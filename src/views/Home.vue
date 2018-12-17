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
