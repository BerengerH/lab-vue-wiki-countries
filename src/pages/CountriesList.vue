<template>
  <div class="list-group">
    <div
      class="list-group-item list-group-item-action"
      v-for="el in countries"
      @click="showCountry(el)"
    >
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/
${el.alpha2Code.toLowerCase()}.png`"
      />
      <p>{{ el.name.official }}</p>
    </div>
  </div>
</template>

<script>
import { useCountryStore } from "../store/country";

export default {
  setup() {
    const country = useCountryStore();
    return { country };
  },
  data() {
    return {
      countries: null,
    };
  },
  methods: {
    async getCountries() {
      const res = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const finalRes = await res.json();
      this.countries = finalRes;
    },
    showCountry(el) {
      this.country.officalName = el.name.official;
      this.country.capital = el.capital[0];
      this.country.borders = el.borders;
      this.country.code = el.alpha3Code;
      this.country.area = el.area;
      this.country.flag = el.alpha2Code;
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>
