<template>
  <nav>
      <router-link to="/">HOME </router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/team">TEAM</router-link>
  </nav>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style lang="scss">
nav{
    width: 100%;
    display: flex;
    justify-content: center;
    a{
        text-decoration: none;
        color: lightcoral;
        font-weight: 500;
        font-size: 2rem;
        padding: 1rem;
    }

}
</style>