<!-- Will contain a list of Todo items both check and unchecked -->
<script lang="ts">
  import { swipeable } from "@react2svelte/swipeable";
  import type { SwipeEventData } from "@react2svelte/swipeable";

  export let allTodos: any[] = [];
  export let selected: any = "";

  $: totalTodos = allTodos.filter(
    (todo) => todo.selectedStore === selected
  ).length;
  $: completedTodos = allTodos.filter(
    (todo) => todo.completed && todo.selectedStore === selected
  ).length;

  function completeTodo(todo: any) {
    todo.completed = !todo.completed;
    // Update the todo list so lists get re-rendered
    allTodos = [...allTodos];
  }

  function handler(e: CustomEvent<SwipeEventData>) {
    console.log("User swiped!", e.detail);
    // Dispatch remove to this todo item...
    //e.target?.dispatchEvent(removeFromList());
  }

  export function removeFromList(todo: any) {
    allTodos = allTodos.filter((t) => t.id !== todo.id);
  }
</script>

<h2>
  {completedTodos} out of {totalTodos} items completed for {selected}
</h2>
<ul>
  {#each allTodos.filter((todo) => !todo.completed && todo.selectedStore === selected) as todo (todo.id)}
    <li>
      <input
        type="checkbox"
        bind:checked={todo.completed}
        id="todo-{todo.id}"
        on:click={() => completeTodo(todo)}
      />
      {todo.name}
    </li>
  {:else}
    All items have been checked off!
  {/each}
</ul>

<h2>Completed items</h2>
<ul>
  {#each allTodos.filter((todo) => todo.completed && todo.selectedStore === selected) as todo (todo.id)}
    <li>
      <div use:swipeable on:swiped={handler}>
        <input
          type="checkbox"
          bind:checked={todo.completed}
          id="todo-{todo.id}"
          on:click={() => completeTodo(todo)}
        />
        {todo.name}
      </div>
    </li>
  {:else}
    Nothing was checked off!
  {/each}
</ul>
