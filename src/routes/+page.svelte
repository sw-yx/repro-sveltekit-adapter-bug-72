<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<pre>{@html JSON.stringify(data.post, null, 2)}</pre>