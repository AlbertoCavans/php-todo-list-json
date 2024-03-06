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
    /* get todos from API */
    fetchTodos() {
      axios.get("../backend/API/read-todos.php").then((response) => {
        this.todos = response.data;
      });
    },

    /* send new todo to API and get new full-todos */
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

    /* notDone/done todo */
    fetchDoneNotDoneTodo(todo, index) {
      const statusTodo = !todo.done;

      const data = {
        index,
        task: todo.task,
        done: statusTodo,
      };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post("../backend/API/doneNotDone-todos.php", data, params)
        .then((response) => {
          console.log(response.data);
        });
    },
  },

  mounted() {
    this.fetchTodos();
  },
});

app.mount("#app");
