<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/images/logo_innogrid.svg"
          alt=""
          style="width: 120px; height: 40px"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'portfolio' }"
              class="nav-link"
              :class="{ active: $route.name === 'portfolioView' }"
            >
              PORTFOLIO
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-active {
  font-weight: bold;
}
.nav-item {
  .active {
    font-weight: bold;
  }
}
</style>
