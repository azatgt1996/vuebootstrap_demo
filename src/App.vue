<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="/src/assets/vue.svg" alt="Logo" width="30" height="24">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <router-link to="/form" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view>
    <template #default="{ Component }">
      <KeepAlive v-if="Component" :max="3">
        <component :is="Component" />
      </KeepAlive>
    </template>
    <template #fallback>
      <UiAlert>Loading...</UiAlert>
    </template>
  </router-view>
</template>
