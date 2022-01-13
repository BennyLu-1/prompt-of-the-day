<script lang="ts">
    import Nav from '../components/nav.svelte';
    import '../app.postcss';
</script>
<style>
	:global(body) {
		margin: 0;
        background-color: #F3F4F6;
	}
</style>
<Nav/>
<slot />