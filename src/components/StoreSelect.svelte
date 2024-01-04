<script lang="ts">
  export let stores: any[] = [];
  if (stores.length === 0) {
    stores = ["No Stores"];
  }
  export let selected = stores[0];

  function onClick(event: any) {
    selected = event.currentTarget.value;
  }
</script>

<h2>Store Select</h2>
<ul>
  {#each stores as store}
    <li>
      <input
        type="radio"
        checked={selected === store}
        on:change={onClick}
        bind:group={selected}
        value={store}
      />
      {store}
    </li>
  {:else}
    No stores
  {/each}
</ul>
