<template>
 <router-link
    to="/details"
    class="list-group-item list-group-item-action"
  >
    <img
      :src="
        'https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code.toLowerCase() + '.png'
      "
    />
    <p>{{ country.name.official }}</p>
  </router-link>
</template>

<script>
import { useCountriesStore } from "../store/countries";


export default {
  name: "CountriesList",
  props: {
    country: Object,
  },
  methods:{
  },
  setup() {
    const countries = useCountriesStore();
    console.log(countries);
    return {countries};
  },
};
</script>

<style></style>
