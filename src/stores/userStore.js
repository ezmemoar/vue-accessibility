import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "Tester",
    email: "tester@gmail.com",
    age: 23,
  });

  return { user };
});
