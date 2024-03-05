const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todos: [
        {
          task: "task 1",
          done: false,
        },
        {
          task: "task 2",
          done: false,
        },
        {
          task: "task 3",
          done: true,
        },
        {
          task: "task 4",
          done: false,
        },
        {
          task: "task 5",
          done: false,
        },
      ],
    };
  },
});

app.mount("#app");
