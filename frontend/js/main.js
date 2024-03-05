const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todos: [
        /*        {
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
        }, */
      ],
    };
  },

  methods: {
    fetchTodos() {
      axios.get("../backend/API/read-todos.php").then((response) => {
        console.log(response);
      });
    },
  },

  mounted() {
    this.fetchTodos();
  },
});

app.mount("#app");
