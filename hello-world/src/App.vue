<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <b-nav tabs align="center">
        <b-nav-item ><router-link to='/'>Home</router-link></b-nav-item>
        <b-nav-item><router-link to='/newMatch'>NewMatch</router-link></b-nav-item>
    </b-nav>
      <router-view></router-view>
  </div>  
</template>

<script>
export default { }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
