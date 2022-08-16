import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => {
    return {
      capital: "",
      area: "",
      borders: [],
      officalName: "",
      flag: "",
    };
  },
});
