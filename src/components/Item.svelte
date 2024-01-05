<script>
  let isEditing = false;
  export let id = 0;
  export let name = "";
  export let completed = false;

  const handleCheckboxChange = () => {
    completed = !completed;
  };

  const handleTextClick = () => {
    isEditing = true;
  };
</script>

<div class="container">
  <input
    type="checkbox"
    bind:checked={completed}
    on:change={handleCheckboxChange}
  />

  {#if isEditing}
    <input
      type="text"
      id="todo-{id}"
      bind:value={name}
      placeholder="Enter text..."
      class="text"
    />
  {:else}
    <a on:click={handleTextClick} class="text">{name}</a>
  {/if}
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
  }

  .text {
    flex: 1;
    margin-left: 10px;
    cursor: pointer;
  }
</style>
