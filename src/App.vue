<!-- src/App.js -->
<template>
  <div id="app">
    <router-view></router-view>
    <div class="container">
      <div class="raw">
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
          <div class="list-group">
            <CountriesList v-for="country in countries" :country="country" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "./logo.svg";
import CountriesList from "./pages/CountriesList.vue";

export default {
  data() {
    return {
      logo,
      countries: null,
    };
  },
  async mounted() {
    const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
    const finalRes = await res.json();
    console.log(finalRes);
    this.countries = finalRes;
  },
  components: {
    CountriesList,
},
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.app {
  text-align: center;
}

.app-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: app-logo-spin infinite 20s linear;
  }
}

.app-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.app-link {
  color: #61dafb;
}

@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
