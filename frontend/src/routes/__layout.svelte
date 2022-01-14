<script lang="ts">
    import Nav from '../components/nav.svelte';
    import '../app.postcss';
</script>

<Nav/>

<div class="container mx-auto mt-4">
    <slot />
</div>