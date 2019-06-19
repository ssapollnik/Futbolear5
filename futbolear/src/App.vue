<template>
  <div>
    <div id="bannerLogo"  class="homeBackground">
    <img alt="Vue logo" style="max-width: 500px" src="./assets/logo.png">
    </div>
    <div id="menu" style="background-color: white">
    <b-nav tabs align="center">
        <b-nav-item ><router-link to='/'>Partidos</router-link></b-nav-item>
        <b-nav-item><router-link to='/newMatch'>Crear Partido</router-link></b-nav-item>
    </b-nav>
    </div>
    <div id="listado">
      <router-view></router-view>
    </div>
  </div>  
</template>

<script>
export default { }
</script>

<style>
#bannerLogo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5%;
  }

.homeBackground {
   background: url(../src/assets/background.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}  
.homeBanner {
   background: url(../src/assets/banner.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}  

#listado {
  margin-top: 20px;
  text-align: center;
}

</style>
