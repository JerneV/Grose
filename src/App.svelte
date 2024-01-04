<script lang="ts">
  import Background from "./components/Background.svelte";
  import TodoList from "./components/TodoList.svelte";
  import Input from "./components/Input.svelte";
  import Fonts from "./components/fonts.svelte";

  let allTodos: any[] = [];
</script>

<Fonts />

<main>
  <h1>Grose</h1>
  <Background bind:allTodos />
  <Input bind:allTodos />
  <TodoList bind:allTodos />
</main>
