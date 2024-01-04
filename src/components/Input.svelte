<script lang="ts">
  export let allTodos: any[] = [];

  let newTodoId = 0;
  let newTodoName = "";
  $: {
    if (allTodos.length === 0) {
      newTodoId = 1;
    } else {
      newTodoId = Math.max(...allTodos.map((t) => t.id)) + 1;
    }
  }

  function addTodo() {
    if (newTodoName === "") return;
    allTodos = [
      ...allTodos,
      { id: newTodoId, name: newTodoName, completed: false },
    ];
    newTodoName = "";
  }
</script>

<form on:submit|preventDefault={addTodo}>
  <h2>
    <label for="todo-0"> What needs to be done? </label>
  </h2>
  <input bind:value={newTodoName} type="text" id="todo-0" autocomplete="off" />
  <button type="submit"> Add </button>
</form>
