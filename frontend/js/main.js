const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todolist: [],
    };
  },
});

app.mount("#app");
