<script lang="ts">
  import Background from "./components/Background.svelte";
  import TodoList from "./components/TodoList.svelte";
  import Input from "./components/Input.svelte";
  import Fonts from "./components/fonts.svelte";
  import StoreSelect from "./components/StoreSelect.svelte";
  import { allTodos } from "./store.js";

  $allTodos = [];
  let stores: any[] = ["Colruyt", "Aldi", "GB"];
  let selected: any = stores[0];
</script>

<Fonts />

<main>
  <h1>Grose</h1>
  <Background bind:allTodos={$allTodos} />
  <StoreSelect bind:stores bind:selected />
  <Input bind:allTodos={$allTodos} bind:selected />
  <TodoList bind:allTodos={$allTodos} bind:selected />
</main>
