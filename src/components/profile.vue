<script setup lang="ts">
const logout = () => {
  localStorage.clear();
}
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container d-flex justify-content-between">
      <RouterLink to="/main">
        <button class="btn btn-outline-secondary">Back to Posts</button>
      </RouterLink>
      <div class="navbar-brand d-flex align-items-center logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-circle logo"
             viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-.148 4.5a2.5 2.5 0 1 0-2.704 0h2.704z"/>
        </svg>
        <h1> MY BLOG </h1>
      </div>
      <RouterLink to="/about">
        <button class="btn btn-outline-secondary" @click="logout">Logout</button>
      </RouterLink>
    </div>
  </nav>
  <div class="container-fluid w-50">
    <div class="card bg-secondary mb-3 about-me-card">
      <div class="card-header bg-secondary text-white">About me</div>
      <div class="card-body bg-secondary">
        <div class="row mb-3">
          <span class="col-4 text-white">Name :</span>
          <p class="col-7" id="name"></p>
        </div>
        <div class="row mb-3">
          <span class="col-4 text-white">Email :</span>
          <p class="col-7" id="email"></p>
        </div>
        <div class="row mb-3">
          <span class="col-4 text-white">Sex :</span>
          <p class="col-7" id="sex"></p>
        </div>
        <div class="row mb-3">
          <span class="col-4 text-white">Birth date :&nbsp;</span>
          <p class="col-4" id="birth"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  height: 100vh;
}
</style>