<script>
  import { logout } from "$lib/util";
  import { onMount } from "svelte";
  import LoginModal from "./loginModal.svelte";
  let jwt;
  onMount(()=>{
    jwt = localStorage.getItem('jwt');
  });

  function showLoginModal(){

  }
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box mx-auto">
  <div class="px-2 mx-2 navbar-start">
    <a href="/">
      <span class="text-lg font-bold">
            Prompt of the Day
    </span>
    </a>
  </div> 
  <div class="hidden px-2 mx-2 navbar-center lg:flex">
    <div class="flex items-stretch">
      <a href="/" class="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
    </div>
  </div> 
  <div class="navbar-end">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">     
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
      </svg>
    </button> 
  </div>
  <div class="flex-none">
    {#if jwt}
      <div class="avatar">
        <div class="rounded-full w-10 h-10 m-1">
          <img src="https://i.pravatar.cc/500?img=32">
        </div>
        <button class="btn btn-primary" on:click={logout}>Logout</button>
      </div>
    {:else}
      <LoginModal />
    {/if}
  </div>
</div>
