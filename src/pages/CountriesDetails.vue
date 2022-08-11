<template>
  <router-view></router-view>
  <div class="col-7">
    <img
      :src="
        'https://flagpedia.net/data/flags/icon/72x54/' +
        country.alpha2Code.toLowerCase() +
        '.png'
      "
      alt="country flag"
      style="width: 300px"
    />
    <h1>{{ country.name.official }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km <sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li><a href="/AND">Andorra</a></li>
              <li><a href="/BEL">Belgium</a></li>
              <li><a href="/DEU">Germany</a></li>
              <li><a href="/ITA">Italy</a></li>
              <li><a href="/MCO">Monaco</a></li>
              <li><a href="/ESP">Spain</a></li>
              <li><a href="/CHE">Switzerland</a></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CountriesDetails",
  data(){
    return{

    };
  },
  mounted() {
  }
};
</script>

<style></style>
