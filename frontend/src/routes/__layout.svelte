<script lang="ts">
    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';
    import '../app.postcss';
</script>

<div class="flex flex-col h-screen justify-between">
    <div class="container mx-auto m-4">
        <Nav/>
    </div>
    <div class="container mb-auto mx-auto mt-4">

        <slot />
    </div>
    <div class="container m-4 mx-auto">
        <Footer/>
    </div>
</div>