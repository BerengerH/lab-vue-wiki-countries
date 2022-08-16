<template>
  <div id="app">
    <router-view></router-view>
    <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <CountriesList />
      </div>
      <div class="col-7">
        <CountriesDetails />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CountriesList from "./pages/CountriesList.vue";
import CountriesDetails from "./pages/CountriesDetails.vue";

export default {
  components: {
    CountriesList,
    CountriesDetails,
  },
};
</script>