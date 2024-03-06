const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todos: [],

      newTodo: {
        task: "",
        done: false,
      },
    };
  },

  methods: {
    fetchTodos() {
      axios.get("../backend/API/read-todos.php").then((response) => {
        this.todos = response.data;
      });
    },

    fetchNewTodo() {
      const data = {
        task: this.newTodo.task,
        done: false,
      };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post("../backend/API/store-todos.php", data, params)
        .then((response) => {
          this.todos = response.data;
        });
    },
  },

  mounted() {
    this.fetchTodos();
  },
});

app.mount("#app");
